namespace inkluze {
  export interface ISiteRoot extends site.INode {
    pravidla: IPravidla;
    q_and_a: site.INode;
    zadost: site.INode;
    //personalni: site.INode;
    kurzy: site.INode;
    project: site.INode;
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
    q_and_a: site.ITab;
    zadost: site.ITab;
    //personalni: site.ITab;
    kurzy: site.ITab;
    project: site.ITab;
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
        createPage: null,
      },
      zadost: {
        id: 'zadost',
        createPage: null,
      },
      //personalni: {
      //  id: 'personalni',
      //  createPage: null,
      //},
      kurzy: {
        id: 'kurzy',
        createPage: null,
      },
      project: {
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
      q_and_a: {
        title: 'Otázky a odpovědi',
        rootNode: root.q_and_a,
      },
      kurzy: {
        title: 'Kurzy na inkluzi',
        rootNode: root.kurzy,
      },
      zadost: {
        title: 'Žádost o dotaci',
        rootNode: root.zadost,
      },
      //personalni: {
      //  title: 'Personální podpora',
      //  rootNode: root.personalni,
      //},
      project: {
        title: 'Projektové řízení',
        rootNode: root.project,
      },
      kontakt: {
        title: 'Kontakt',
        rootNode: root.kontakt,
      },
    }
 }
}