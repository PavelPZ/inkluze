namespace inkluze {
  export interface ISiteRoot extends site.INode {
    q_and_a: site.INode;
    dalsi: site.INode;
    lektori: site.INode;
    kurzy: ISiteKurzy;
    kurzyss: ISiteKurzySS;
    kurzyii: ISiteKurzyII;
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
    ZSMatematicka16: site.INode;
    ZSMatematicka32: site.INode;
    ZSMentoring32: site.INode;
    ZSMentoring56: site.INode;
    ZSMentoring80: site.INode;
    MSInkluze16: site.INode;
    MSCtenarska: site.INode;
    MSMatematicka: site.INode;
    MSRozvoj16: site.INode;
  }

  export interface ISiteKurzySS extends site.INode {
    SSRozvoj8: site.INode;
    SSRozvoj16: site.INode;
    SSRozvoj24: site.INode;
    SSICT8: site.INode;
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

  export interface ISiteKurzyII extends site.INode {
    IIMSRozvoj16: site.INode;
    IIMSMatematicka16: site.INode;
    IIMSCtenarska16: site.INode;
    IIMSInkluze16: site.INode;
    IIMSPripravujeme: site.INode;
    IIZSInkluze8: site.INode;
    IIZSInkluze1632: site.INode;
    IIZUSInkluze8: site.INode;
    IIZUSRozvoj8: site.INode;
    IIZUSICT8: site.INode;
    IIZSICT8: site.INode;
    IIZSRozvoj1624: site.INode;
    IIZSRozvoj8: site.INode;
    IIZSCtenarska1632: site.INode;
    IIZSCtenarska8: site.INode;
    IIZSMatematicka8: site.INode;
    IIZSMatematicka1632: site.INode;
  }

  export var root: ISiteRoot;

  export interface ITabs extends site.ITabs {
    home: site.ITab;
    kurzy: site.ITab;
    kurzyss: site.ITab;
    kurzyii: site.ITab;
    lektori: site.ITab;
    q_and_a: site.ITab;
    dalsi: site.ITab;
    onas: site.ITab;
    //slovnicek: site.ITab;
  }

  export var tabs: ITabs;

  export function bootApp() {
    site.root = root = {
      id: 'home',
      title: 'DVPP kurzy pro Výzvy 02_16_022/ 023, 02_16_035/ 042 a 02_18_063/ 064',
      brTitle: 'DVPP',
      largeLogo: true,
      createPage: routePar => <Home />, //sitemapRouter.createElement<IHomePar>(Home, routePar, { subTitle: 'SubTitle Default' }),
      noTitle: true,
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
        ZSMatematicka16: {
          id: 'ZSMatematicka16',
          title: 'Matematická gramotnost - 16 hodinový kurz',
          createPage: par => React.createElement(Kurzy),
        },
        ZSMatematicka32: {
          id: 'ZSMatematicka32',
          title: 'Matematická gramotnost - 32 hodinový kurz',
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
        MSRozvoj16: {
          id: 'MSRozvoj16',
          title: 'Osobnostně sociální rozvoj - 16 hodinový kurz',
          createPage: par => React.createElement(Kurzy),
        },
      },
      kurzyss: {
        id: 'kurzyss',
        createPage: par => React.createElement(KurzySS),
        SSRozvoj8: {
          id: 'SSRozvoj8',
          title: 'Osobnostně sociální rozvoj - 8 hod',
          createPage: par => React.createElement(KurzySS),
        },
        SSRozvoj16: {
          id: 'SSRozvoj16',
          title: 'Osobnostně sociální rozvoj - 16 hod',
          createPage: par => React.createElement(KurzySS),
        },
        SSRozvoj24: {
          id: 'SSRozvoj24',
          title: 'Osobnostně sociální rozvoj - 24 hod',
          createPage: par => React.createElement(KurzySS),
        },
        SSICT8: {
          id: 'SSICT8',
          title: 'Využití ICT ve výuce - 8 hod',
          createPage: par => React.createElement(KurzySS),
        },
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
      kurzyii: {
        id: 'kurzyii',
        createPage: par => React.createElement(KurzyII),
        IIMSRozvoj16: {
          id: 'IIMSRozvoj16',
          title: 'Osobnostně sociální rozvoj - 8/16 hod',
          createPage: par => React.createElement(KurzyII),
        },
        IIMSMatematicka16: {
          id: 'IIMSMatematicka16',
          title: 'Matematická pregramotnost - 8/16 hod',
          createPage: par => React.createElement(KurzyII),
        },
        IIMSCtenarska16: {
          id: 'IIMSCtenarska16',
          title: 'Čtenářská pregramotnost - 8/16 hod',
          createPage: par => React.createElement(KurzyII),
        },
        IIMSInkluze16: {
          id: 'IIMSInkluze16',
          title: 'Inkluze - 8/16 hod',
          createPage: par => React.createElement(KurzyII),
        },
        IIMSPripravujeme: {
          id: 'IIMSPripravujeme',
          title: 'ICT - 8 hod',
          createPage: par => React.createElement(KurzyII),
        },
        IIZSRozvoj8: {
          id: 'IIZSRozvoj8',
          title: 'Osobnostně sociální rozvoj - 8 hod',
          createPage: par => React.createElement(KurzyII),
        },
        IIZSRozvoj1624: {
          id: 'IIZSRozvoj1624',
          title: 'Osobnostně sociální rozvoj - 16/24 hod',
          createPage: par => React.createElement(KurzyII),
        },
        IIZSICT8: {
          id: 'IIZSICT8',
          title: 'Kurz ICT - 8 hod',
          createPage: par => React.createElement(KurzyII),
        },
        IIZSMatematicka8: {
          id: 'IIZSMatematicka8',
          title: 'Matematická gramotnost - 8 hod',
          createPage: par => React.createElement(KurzyII),
        },
        IIZSMatematicka1632: {
          id: 'IIZSMatematicka1632',
          title: 'Matematická gramotnost - 16/32 hod',
          createPage: par => React.createElement(KurzyII),
        },
        IIZSCtenarska8: {
          id: 'IIZSCtenarska8',
          title: 'Čtenářská gramotnost - 8 hod',
          createPage: par => React.createElement(KurzyII),
        },
        IIZSCtenarska1632: {
          id: 'IIZSCtenarska1632',
          title: 'Čtenářská gramotnost - 16/32 hod',
          createPage: par => React.createElement(KurzyII),
        },
        IIZSInkluze8: {
          id: 'IIZSInkluze8',
          title: 'Inkluze - 8 hod',
          createPage: par => React.createElement(KurzyII),
        },
        IIZSInkluze1632: {
          id: 'IIZSInkluze1632',
          title: 'Inkluze - 16/32 hod',
          createPage: par => React.createElement(KurzyII),
        },
        IIZUSInkluze8: {
          id: 'IIZUSInkluze8',
          title: 'Inkluze - 8 hod',
          createPage: par => React.createElement(KurzyII),
        },
        IIZUSRozvoj8: {
          id: 'IIZUSRozvoj8',
          title: 'Osobnostně sociální rozvoj - 8 hod',
          createPage: par => React.createElement(KurzyII),
        },
        IIZUSICT8: {
          id: 'IIZUSICT8',
          title: 'Kurz ICT - 8 hod',
          createPage: par => React.createElement(KurzyII),
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
    };
    site.tabs = tabs = {
      home: {
        title: 'DVPP',
        rootNode: root,
      },
      kurzy: {
        title: 'Šablony I – ZŠ a MŠ',
        rootNode: root.kurzy,
      },
      kurzyss: {
        title: 'Šablony I – SŠ a VOŠ',
        rootNode: root.kurzyss,
      },
      kurzyii: {
        title: 'Šablony II – ZŠ, MŠ, ZUŠ, ŠD, …',
        rootNode: root.kurzyii,
      },
      lektori: {
        title: 'Naši lektoři',
        rootNode: root.lektori,
      },
      q_and_a: {
        title: 'Dotazy a odpovědi',
        rootNode: root.q_and_a,
      },
      dalsi: {
        title: 'Služby',
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
    } as ITabs
  }
}