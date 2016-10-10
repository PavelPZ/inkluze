namespace ftx {

  //********************* OBJECT MODEL 

  //fulltext katalog je skupina dokumentu plus vsechny v dokumentech pouzite stem-grupy
  export interface ICatalogue {
    lang: Langs; //fulltext language
    stemVersion: number; //verze server side stemmeru. Kdyz se zmeni, IDoc.stemGroupHashs a ICatalogue.stemGroups jsou neaktualni
    docs: Array<IDoc>; //jednotlive dokumenty fulltext katalogu
    stemGroups: Array<StemGroup>; //stem-grupy pouzite ve vsech dokumentech katalogu
    //odvozena data:
    $stemGroups: { [hash: number]: StemGroup | Array<StemGroup>; }; //hash table pro vsech pouzitych stem-grup
    $words: { [word: string]: StemGroup | Array<StemGroup>; }; //vyskyt slov v stemGroups
  }

  //fulltext dokument
  export interface IDoc {
    getText(): string; //pro IDoc.mofified===true: dej text dokumentu k indexaci
    stemGroupHashs: WordHashs; //vsechna slova dokumentu s HASHem, ukazujicim na stem-grupu
    mofified: boolean; //priznak modifikovaneho dokumentu => je potreba server side roundtrip pro ziskani stemms
  }

  export type Langs = number;

  export interface IWordHash {
    word: string; //slovo, kteremu hash grupa patri. Pouzije se pro nalezeni spravne hash grupy v ICatalogue.$stemGroups pro pripad, ze ICatalogue.$stemGroups[IWordHash.hash] je array
    hash: number; //hash do ICatalogue.$stemGroups hash-table
  }
  export type WordHashs = Array<IWordHash>;

  export interface StemGroup {
    words: string; //'|' delimited stem words. Napr. 'run|runs|running'
    hash: number;
    $docs: Array<IDoc> | null;
  }


  //********************* EXPORTED PROCS

  export function init(cat: ICatalogue) {

    //vytvor hash-table ze vsech stem-groups, vytvor index slov ve stem groups
    cat.$stemGroups = {}; cat.$words = {};
    cat.stemGroups.forEach(stemGroup => {
      //zarad do hash-table
      let h = stemGroup.hash;
      let $g = cat.$stemGroups[h];
      if (!$g) cat.$stemGroups[h] = stemGroup;
      else if (Array.isArray($g)) ($g as Array<StemGroup>).push(stemGroup); //
      else cat.$stemGroups[h] = [$g as StemGroup, stemGroup];

      //stemGroup words do ICatalogue.words
      delete stemGroup.$docs;
      stemGroup.words.split('|').forEach(word => {
        let sg = cat.$words[word];
        if (!sg) cat.$words[word] = stemGroup;
        else if (Array.isArray(sg)) (sg as Array<StemGroup>).push(stemGroup);
        else cat.$words[word] = [sg, stemGroup];
      });
    });

    //pro dokumenty dopln jejich pouziti do stem-group
    cat.docs.forEach(doc => { //pro kazdy dokument
      doc.stemGroupHashs.forEach(wh => { //pro kazde jeho slovo
        //nalezni stem-grupu (tj. stemy slova)
        let stemGroup = cat.$stemGroups[wh.hash] as StemGroup;
        if (Array.isArray(stemGroup)) {
          let $gs: Array<StemGroup> = stemGroup as any;
          stemGroup = $gs.filter(g => g.words.indexOf(wh.word) >= 0)[0]; //TODO: better test by means of regex
        }
        //pridej dokument do stem-grupy
        if (!stemGroup.$docs) stemGroup.$docs = [doc];
        else if (stemGroup.$docs.indexOf(doc) < 0) stemGroup.$docs.push(doc);
      });
    });

    //odstran nepotrebne stem-grupy
    cat.stemGroups = cat.stemGroups.filter(g => g.$docs && g.$docs.length > 0);
  }

  export function search(word: string, doc: ICatalogue): Array<IDoc> | null {
    let group = doc.$words[word]; if (!group) return null;
    if (!Array.isArray(group)) return group.$docs;
    let res: Array<IDoc> = [];
    (group as Array<StemGroup>).forEach(g => res.push.apply(res, g.$docs));
    return res;
  }

  export function refreshStems(doc: ICatalogue, stemVersion: number, completed: lib.TCallback) {
    if (stemVersion != doc.stemVersion) {
      doc.docs.forEach(d => { delete d.stemGroupHashs, d.mofified = true; });
      doc.stemGroups = [];
      doc.stemVersion = stemVersion;
    }
    let stemGroupHash: { [words: string]: boolean; } = {};
    doc.stemGroups.forEach(g => stemGroupHash[g.words] = true);
    let docs = doc.docs.filter(d => !d.stemGroupHashs);
    if (docs.length == 0) { completed(); return; } //neni nic k indexaci => hotovo
    server.getStemGroups({ lcid: doc.lang, texts: docs.map(d => d.getText()) }, res => {
      for (let i = 0; i < docs.length; i++) {
        let groupInfo = breakerToStems(res.items[i]);
        docs[i].stemGroupHashs = groupInfo.map(inf => {
          if (!stemGroupHash[inf.words]) {
            stemGroupHash[inf.words] = true;
            doc.stemGroups.push({ words: inf.words, hash: inf.hash, $docs:null });
          }
          return { word: inf.word, hash: inf.hash };
        })
      }
      init(doc);
      completed();
    });
  }

  //********************* LOCALS

  interface IServer {
    getStemVersion(completed: (ver: number) => void);
    getStemGroups(inPar: IGetStemGroupsIN, completed: (result: IGetStemGroupsOUT) => void);
  }
  interface IGetStemGroupsItem {
    occurrence: number; //index slova, ke kteremu stem patri (identifikace stem grupy)
    display_term: string; //stem
    expansion_type: number; //2..ohyb, 0..puvodni slovo (pouze jeden vyskyt v stem grupe)
  }
  interface IGetStemGroupsOUT extends services.serviceOUT {
    items: Array<Array<IGetStemGroupsItem>>;
  }
  interface IGetStemGroupsIN {
    lcid: Langs;
    texts: Array<string>;
  }
  interface IStemGroupInfo {
    word: string;
    words: string;
    hash: number;
  }
  function breakerToStems(items: Array<IGetStemGroupsItem>): Array<IStemGroupInfo> {
    if (!items || items.length == 0) throw new lib.Exception('items || items.length == 0');
    let res: Array<IStemGroupInfo> = []; let words: Array<string> = []; let word = '';
    let occ = items[0].occurrence; //identifikace grupy stemu (= index slova, ke kteremu stem patri)
    for (let i = 0; i <= items.length; i++) {
      let item: IGetStemGroupsItem | null = i == items.length ? null : items[i];
      if (item && item.display_term == 'END OF FILE') continue;
      //nova stem-grupa (nebo posledni stem)
      if (!item || occ != item.occurrence) { 
        let wrds = words.sort().join('|');
        if (word == '') throw new lib.Exception('!word');
        res.push({ word: word, words: wrds, hash: lib.hash(wrds) as number });
        words = []; word = '';
        if (item != null) occ = item.occurrence;
      }
      //bezny stem grupy
      if (item) {
        words.push(item.display_term);
        if (item.expansion_type == 0) word = item.display_term;
      }
    }
    return res;
  }
  let server: IServer;
}