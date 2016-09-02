namespace inkluze {
  export interface ISiteRoot extends site.INode {
    pravidla: IPravidla;
    q_and_a: site.INode;
    dalsi: site.INode;
    //personalni: site.INode;
    lektori: site.INode;
    kurzy: site.INode;
    slovnicek: site.INode;
    //kontakt: site.INode;
  }

  export interface IPravidla extends site.INode {
    //msmt_vyzva: site.INode;
    //msmt_priloha3: site.INode;
    dump_popups: site.INode;
  }

  export var root: ISiteRoot;

  export interface ITabs extends site.ITabs {
    home: site.ITab;
    pravidla: site.ITab;
    q_and_a: site.ITab;
    dalsi: site.ITab;
    //personalni: site.ITab;
    kurzy: site.ITab;
    lektori: site.ITab;
    slovnicek: site.ITab;
    //kontakt: site.ITab;
  }

  export var tabs: ITabs;

  export function bootApp() {
    site.root = root = {
      id: 'home',
      title: 'Podpora inkluze s pomocí dotace EU',
      brTitle: 'Hlavní',
      largeLogo: true,
      createPage: routePar => <Home/>, //sitemapRouter.createElement<IHomePar>(Home, routePar, { subTitle: 'SubTitle Default' }),
      noTitle:true,
      pravidla: {
        id: 'vyzva',
        createPage: rp => <Pravidla/>,
        //msmt_vyzva: {
        //  id: 'msmt_vyzva',
        //  title:'msmt_vyzva',
        //  createPage: null,
        //},
        //msmt_priloha3: {
        //  id: 'msmt_priloha3',
        //  title: 'msmt_priloha3',
        //  createPage: null,
        //},
        dump_popups: {
          id: 'dump_popups',
          title: 'Dump Popups',
          createPage: routePar => <DumpPopups/>,
        },
      },
      q_and_a: {
        id: 'q_and_a',
        createPage: par => <Q_and_a/>,
      },
      dalsi: {
        id: 'dalsi',
        createPage: null,
      },
      slovnicek: {
        id: 'slovnicek',
        createPage: par => <Slovnicek/>,
      },
      kurzy: {
        id: 'kurzy',
        createPage: (par: IKurzyPars) => React.createElement(Kurzy, par),
      },
      lektori: {
        id: 'lektori',
        createPage: null,
      },
      //project: {
      //  id: 'ostatni',
      //  createPage: null,
      //},
      //kontakt: {
      //  id: 'kontakt',
      //  createPage: null,
      //},
    }
    site.tabs = tabs = {
      home: {
        title: 'Hlavní',
        rootNode: root,
      },
      pravidla: {
        title: 'Pravidla Výzvy',
        rootNode: root.pravidla,
      },
      kurzy: {
        title: 'Kurzy - inkluze',
        rootNode: root.kurzy,
      },
      lektori: {
        title: 'Naši lektoři',
        rootNode: root.lektori,
      },
      dalsi: {
        title: 'Další služby',
        rootNode: root.dalsi,
      },
      //personalni: {
      //  title: 'Personální podpora',
      //  rootNode: root.personalni,
      //},
      q_and_a: {
        title: 'Dotazy a odpovědi',
        rootNode: root.q_and_a,
      },
      slovnicek: {
        title: 'Slovníček pojmů',
        rootNode: root.slovnicek,
      },
      //kontakt: {
      //  title: 'Kontakt',
      //  rootNode: root.kontakt,
      //},
    }
 }
}