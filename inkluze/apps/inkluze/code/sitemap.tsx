namespace inkluze {
  export interface ISiteRoot extends site.INode {
    pravidla: IPravidla;
    q_and_a: site.INode;
    dalsi: site.INode;
    lektori: site.INode;
    kurzy: site.INode;
    //slovnicek: site.INode;
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
    kurzy: site.ITab;
    lektori: site.ITab;
    //slovnicek: site.ITab;
  }

  export var tabs: ITabs;

  export function bootApp() {
    site.root = root = {
      id: 'home',
      title: 'Kurzy zaměřené na inkluzi od zkušených lektorů',
      brTitle: 'Hlavní',
      largeLogo: true,
      createPage: routePar => <Home/>, //sitemapRouter.createElement<IHomePar>(Home, routePar, { subTitle: 'SubTitle Default' }),
      noTitle:true,
      pravidla: {
        id: 'vyzva',
        createPage: rp => <Pravidla/>,
        dump_popups: {
          id: 'dump_popups',
          title: 'Seznam vysvětlivek',
          createPage: routePar => <DumpPopups/>,
        },
      },
      q_and_a: {
        id: 'q_and_a',
        createPage: par => <Q_and_a/>,
      },
      dalsi: {
        id: 'dalsi',
        createPage: par => <Ostatni/>,
      },
      //slovnicek: {
      //  id: 'slovnicek',
      //  createPage: par => <Slovnicek/>,
      //},
      kurzy: {
        id: 'kurzy',
        createPage: (par: IKurzyPars) => React.createElement(Kurzy, par),
      },
      lektori: {
        id: 'lektori',
        createPage: par => <Lektori/>
      },
    }
    site.tabs = tabs = {
      home: {
        title: 'Hlavní',
        rootNode: root,
      },
      kurzy: {
        title: 'Kurzy zaměřené na inkluzi',
        rootNode: root.kurzy,
      },
      lektori: {
          title: 'Naši lektoři',
          rootNode: root.lektori,
      },
      pravidla: {
          title: 'Pravidla Výzvy',
          rootNode: root.pravidla,
      },
      q_and_a: {
          title: 'Dotazy a odpovědi',
          rootNode: root.q_and_a,
      },
      dalsi: {
        title: 'Další služby',
        rootNode: root.dalsi,
      },
      //slovnicek: {
      //  title: 'Slovníček pojmů',
      //  rootNode: root.slovnicek,
      //},
    }
 }
}