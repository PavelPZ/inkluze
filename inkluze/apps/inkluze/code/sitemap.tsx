namespace inkluze {
  export interface ISiteRoot extends site.INode {
    pravidla: IPravidla;
    q_and_a: site.INode;
    dalsi: site.INode;
    lektori: site.INode;
    kurzy: ISiteKurzy;
    onas: site.INode;
    //slovnicek: site.INode;
  }

  export interface ISiteKurzy extends site.INode {
    ZSInkluze8: site.INode;
    ZSInkluze16: site.INode;
    ZSInkluze24: site.INode;
    ZSInkluze32: site.INode;
    ZSCtenarska16: site.INode;
    ZSCtenarska32: site.INode;
    ZSMatematicka: site.INode;
    ZSMentoring32: site.INode;
    ZSMentoring56: site.INode;
    ZSMentoring80: site.INode;
    MSInkluze16: site.INode;
    MSCtenarska: site.INode;
    MSMatematicka: site.INode;
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
    onas: site.ITab;
    //slovnicek: site.ITab;
  }

  export var tabs: ITabs;

  export function bootApp() {
    site.root = root = {
      id: 'home',
      title: 'Akreditované kurzy podle šablon z Výzvy 02_16_022/023 od zkušených lektorů',
      brTitle: 'DVPP',
      largeLogo: true,
      createPage: routePar => <Home />, //sitemapRouter.createElement<IHomePar>(Home, routePar, { subTitle: 'SubTitle Default' }),
      noTitle: true,
      pravidla: {
        id: 'vyzva',
        createPage: rp => <Pravidla />,
        dump_popups: {
          id: 'dump_popups',
          title: 'Seznam vysvětlivek',
          createPage: routePar => <DumpPopups />,
        },
      },
      q_and_a: {
        id: 'q_and_a',
        createPage: par => <Q_and_a />,
      },
      dalsi: {
        id: 'dalsi',
        createPage: par => <Ostatni />,
      },
      //slovnicek: {
      //  id: 'slovnicek',
      //  createPage: par => <Slovnicek/>,
      //},
      kurzy: {
        id: 'kurzy',
        createPage: par => React.createElement(Kurzy),
        ZSInkluze8: {
          id: 'ZSInkluze8',
          createPage: par => React.createElement(Kurzy),
          title: 'Inkluze - 8 hodinový kurz pro sborovnu',
        },
        ZSInkluze16: {
          id: 'ZSInkluze16',
          title: 'Inkluze - 16 hodinový kurz',
          createPage: par => React.createElement(Kurzy),
        },
        ZSInkluze24: {
          id: 'ZSInkluze24',
          title: 'Inkluze - 24 hodinový kurz',
          createPage: par => React.createElement(Kurzy),
        },
        ZSInkluze32: {
          id: 'ZSInkluze32',
          title: 'Inkluze - 32 hodinový kurz',
          createPage: par => React.createElement(Kurzy),
        },

        ZSCtenarska16: {
          id: 'ZSCtenarska16',
          title: 'Čtenářská gramotnost - 16 hodinový kurz',
          createPage: par => React.createElement(Kurzy),
        },
        ZSCtenarska32: {
          id: 'ZSCtenarska32',
          title: 'Čtenářská gramotnost - 32 hodinový kurz',
          createPage: par => React.createElement(Kurzy),
        },
        ZSMatematicka: {
          id: 'ZSMatematicka',
          title: 'Matematická gramotnost - 16 hodinový kurz',
          createPage: par => React.createElement(Kurzy),
        },
        ZSMentoring32: {
          id: 'ZSMentoring32',
          title: 'Mentoring - 32 hodinový kurz',
          createPage: par => React.createElement(Kurzy),
        },
        ZSMentoring56: {
          id: 'ZSMentoring56',
          title: 'Mentoring - 56 hodinový kurz',
          createPage: par => React.createElement(Kurzy),
        },
        ZSMentoring80: {
          id: 'ZSMentoring80',
          title: 'Mentoring - 80 hodinový kurz',
          createPage: par => React.createElement(Kurzy),
        },

        MSInkluze16: {
          id: 'MSInkluze16',
          title: 'Inkluze - 16 hodinový kurz pro MŠ',
          createPage: par => React.createElement(Kurzy),
        },
        MSCtenarska: {
          id: 'MSCtenarska',
          title: 'Čtenářská pregramotnost - 16 hodinový kurz',
          createPage: par => React.createElement(Kurzy),
        },
        MSMatematicka: {
          id: 'MSMatematicka',
          title: 'Matematická pregramotnost - 16 hodinový kurz',
          createPage: par => React.createElement(Kurzy),
        },
      },
      lektori: {
        id: 'lektori',
        createPage: par => <Lektori />
      },
      onas: {
        id: 'onas',
        createPage: par => <Onas />
      },
    }
    site.tabs = tabs = {
      home: {
        title: 'DVPP',
        rootNode: root,
      },
      kurzy: {
        title: 'Kurzy podle šablon z Výzvy 02_16_022 / 023',
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
      onas: {
        title: 'O nás',
        rootNode: root.onas,
      },
      //slovnicek: {
      //  title: 'Slovníček pojmů',
      //  rootNode: root.slovnicek,
      //},
    }
  }
}