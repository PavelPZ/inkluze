namespace inkluze {
  export interface ISiteRoot extends site.INode {
    pravidla: IPravidla;
    q_and_a: site.INode;
    dalsi: site.INode;
    lektori: site.INode;
    kurzy: ISiteKurzy;
    kurzyss: ISiteKurzySS;
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

  export interface ISiteKurzySS extends site.INode {
    SSInkluze8: site.INode;
    SSInkluze16: site.INode;
    SSInkluze24: site.INode;
    SSMentoring80: site.INode;
    SSCtenarska8: site.INode;
    SSCtenarska16: site.INode;
    SSCtenarska24: site.INode;
    SSMatematicka8: site.INode;
    SSMatematicka16: site.INode;
    SSMatematicka24: site.INode;
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
    kurzyss: site.ITab;
    lektori: site.ITab;
    onas: site.ITab;
    //slovnicek: site.ITab;
  }

  export var tabs: ITabs;

  export function bootApp() {
    site.root = root = {
      id: 'home',
      title: 'Akreditované kurzy podle šablon z Výzvy 02_16_022/023/034/042 od zkušených lektorů',
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
      kurzyss: {
        id: 'kurzyss',
        createPage: par => React.createElement(KurzySS),
        SSInkluze8: {
          id: 'SSInkluze8',
          title: 'Inkluze - 8 hodinový kurz',
          createPage: par => React.createElement(KurzySS),
        },
        SSInkluze16: {
          id: 'SSInkluze16',
          title: 'Inkluze - 16 hodinový kurz',
          createPage: par => React.createElement(KurzySS),
        },
        SSInkluze24: {
          id: 'SSInkluze24',
          title: 'Inkluze - 24 hodinový kurz',
          createPage: par => React.createElement(KurzySS),
        },
        SSMentoring80: {
          id: 'SSMentoring80',
          title: 'Mentoring - 80 hodinový kurz pro SŠ',
          createPage: par => React.createElement(KurzySS),
        },
        SSCtenarska8: {
          id: 'SSCtenarska8',
          title: 'Čtenářská gramotnost - 8 hodinový kurz',
          createPage: par => React.createElement(KurzySS),
        },
        SSCtenarska16: {
          id: 'SSCtenarska16',
          title: 'Čtenářská gramotnost - 16 hodinový kurz',
          createPage: par => React.createElement(KurzySS),
        },
        SSCtenarska24: {
          id: 'SSCtenarska24',
          title: 'Čtenářská gramotnost - 24 hodinový kurz',
          createPage: par => React.createElement(KurzySS),
        },
        SSMatematicka8: {
          id: 'SSMatematicka8',
          title: 'Matematická gramotnost - 8 hodinový kurz',
          createPage: par => React.createElement(KurzySS),
        },
        SSMatematicka16: {
          id: 'SSMatematicka16',
          title: 'Matematická gramotnost - 16 hodinový kurz',
          createPage: par => React.createElement(KurzySS),
        },
        SSMatematicka24: {
          id: 'SSMatematicka24',
          title: 'Matematická gramotnost - 24 hodinový kurz',
          createPage: par => React.createElement(KurzySS),
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
        title: 'Kurzy podle šablon - ZŠ a MŠ',
        rootNode: root.kurzy,
      },
      kurzyss: {
        title: 'Kurzy podle šablon - SŠ a VOŠ',
        rootNode: root.kurzyss,
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