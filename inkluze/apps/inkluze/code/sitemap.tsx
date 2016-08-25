namespace inkluze {
  export interface ISiteRoot extends site.INode {
    pravidla: IPravidla;
    zadost: site.INode;
    personalni: site.INode;
    kurzy: site.INode;
    ostatni: site.INode;
    kontakt: site.INode;
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
    zadost: site.ITab;
    personalni: site.ITab;
    kurzy: site.ITab;
    ostatni: site.ITab;
    kontakt: site.ITab;
  }

  export var tabs: ITabs;

  export function bootApp() {
    site.root = root = {
      id: 'home',
      title: 'Podpora inkluze s pomocí dotací EU',
      brTitle: 'Hlavní',
      largeLogo: true,
      createPage: routePar => <Home/>, //sitemapRouter.createElement<IHomePar>(Home, routePar, { subTitle: 'SubTitle Default' }),
      pravidla: {
        id: 'vyzva',
        createPage: null,
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
      zadost: {
        id: 'zadost',
        createPage: null,
      },
      personalni: {
        id: 'personalni',
        createPage: null,
      },
      kurzy: {
        id: 'kurzy',
        createPage: null,
      },
      ostatni: {
        id: 'ostatni',
        createPage: null,
      },
      kontakt: {
        id: 'kontakt',
        createPage: null,
      },
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
      zadost: {
        title: 'Žádost o dotaci',
        rootNode: root.zadost,
      },
      kurzy: {
        title: 'Kurzy DVPP',
        rootNode: root.kurzy,
      },
      personalni: {
        title: 'Personální podpora',
        rootNode: root.personalni,
      },
      ostatni: {
        title: 'Ostatní služby',
        rootNode: root.ostatni,
      },
      kontakt: {
        title: 'Kontakt',
        rootNode: root.kontakt,
      },
    }
 }
}