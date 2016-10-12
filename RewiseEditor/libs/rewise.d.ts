declare namespace ftx {
    interface ICatalogue {
        lang: Langs;
        stemVersion: number;
        docs: Array<IDoc>;
        stemGroups: Array<StemGroup>;
        $stemGroups: {
            [hash: number]: StemGroup | Array<StemGroup>;
        };
        $words: {
            [word: string]: StemGroup | Array<StemGroup>;
        };
    }
    interface IDoc {
        getText(): string;
        stemGroupHashs: WordHashs;
        mofified: boolean;
    }
    type Langs = number;
    interface IWordHash {
        word: string;
        hash: number;
    }
    type WordHashs = Array<IWordHash>;
    interface StemGroup {
        words: string;
        hash: number;
        $docs: Array<IDoc> | null;
    }
    function init(cat: ICatalogue): void;
    function search(word: string, doc: ICatalogue): Array<IDoc> | null;
    function refreshStems(doc: ICatalogue, stemVersion: number, completed: lib.TCallback): void;
}
