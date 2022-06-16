namespace inkluze {
  export interface ISiteRoot extends site.INode {
    //q_and_a: site.INode;
    //dalsi: site.INode;
    okurzy: site.INode;
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
    MSInkluze816: site.INode;
    MSCtenarska: site.INode;
    MSMatematicka: site.INode;
    MSRozvoj16: site.INode;
  }

  export interface ISiteKurzySS extends site.INode {
    SSPedagogickaDiagnostika: site.INode;
    SSInovace: site.INode;
    SSCtenarskaGramotnost: site.INode;
    SSMatematickaGramotnost: site.INode;
    SSPodporaUcitelu: site.INode;
    SSMedGramotnost: site.INode;
    SSNoveTechnologie: site.INode;
    SSRozvojPodnikavosti: site.INode;
    SSKarierovePoradenstvi: site.INode;
    SSWellBeing: site.INode;
    SSVyukaCestiny: site.INode;
    SSInkluzeCizinci: site.INode;
    SSOstatniInkluze: site.INode;
    SSFormativniHodnoceni: site.INode;
    SSGenderovaTematika: site.INode;
  }

  export interface ISiteKurzyII extends site.INode {
    ZSInkluzeCizinci: site.INode;
    ZSVyukaCestiny: site.INode;
    ZSMedialniGramotnost: site.INode;
    ZSNoveTechnologie: site.INode;
    ZSWellBeing: site.INode;
    ZSDiagnostika: site.INode;
    ZSInovace: site.INode;
    ZSInkluze: site.INode;
    ZSPodpora: site.INode;
    ZSRozvojPodnikavosti: site.INode;
    ZSMatematickaGramotnost: site.INode;
    ZSCtenarskaGramotnost: site.INode;
    ZSFormativniHodnoceni: site.INode;
    ZSKarierovePoradenstvi: site.INode;
  }

  export var root: ISiteRoot;

  export interface ITabs extends site.ITabs {
    home: site.ITab;
    kurzyss: site.ITab;
    kurzyii: site.ITab;
    okurzy: site.ITab;
    //q_and_a: site.ITab;
    //dalsi: site.ITab;
    onas: site.ITab;
    //slovnicek: site.ITab;
  }

  export var tabs: ITabs;

  export function bootApp() {
    site.root = root = {
      id: 'home',
      title: 'DVPP kurzy pro Výzvy 02_22_002 a 02_22_003',
      brTitle: 'DVPP',
      largeLogo: true,
      createPage: routePar => <Home />, //sitemapRouter.createElement<IHomePar>(Home, routePar, { subTitle: 'SubTitle Default' }),
      noTitle: true,
      //q_and_a: {
      //  id: 'q_and_a',
      //  createPage: par => <Q_and_a />,
      //},
      //dalsi: {
      //  id: 'dalsi',
      //  createPage: par => <Ostatni />,
      //},
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

        MSInkluze816: {
          id: 'MSInkluze816',
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
        SSPedagogickaDiagnostika: {
          id: 'SSPedagogickaDiagnostika',
          title: 'Pedagogická diagnostika',
          createPage: par => React.createElement(KurzySS),
        },
        SSInovace: {
          id: 'SSInovace',
          title: 'Inovace ŠVP/koncepce rozvoje školy/školského zařízení',
          createPage: par => React.createElement(KurzySS),
        },
        SSCtenarskaGramotnost: {
          id: 'SSCtenarskaGramotnost',
          title: 'Čtenářská gramotnost',
          createPage: par => React.createElement(KurzySS),
        },
        SSMatematickaGramotnost: {
          id: 'SSMatematickaGramotnost',
          title: 'Matematická gramotnost',
          createPage: par => React.createElement(KurzySS),
        },
        SSPodporaUcitelu: {
          id: 'SSPodporaUcitelu',
          title: 'Podpora uvádějících/provázejících učitelů',
          createPage: par => React.createElement(KurzySS),
        },
        SSMedGramotnost: {
          id: 'SSMedGramotnost',
          title: 'Mediální gramotnost, prevence kyberšikany, chování na sociálních sítích',
          createPage: par => React.createElement(KurzySS),
        },
        SSNoveTechnologie: {
          id: 'SSNoveTechnologie',
          title: 'Vzděláváni s využitím nových technologií',
          createPage: par => React.createElement(KurzySS),
        },
        SSRozvojPodnikavosti: {
          id: 'SSRozvojPodnikavosti',
          title: 'Rozvoj podnikavosti a kreativity',
          createPage: par => React.createElement(KurzySS),
        },
        SSKarierovePoradenstvi: {
          id: 'SSKarierovePoradenstvi',
          title: 'Kariérové poradenství včetně identifikace a rozvoje nadání',
          createPage: par => React.createElement(KurzySS),
        },
        SSWellBeing: {
          id: 'SSWellBeing',
          title: 'Well-being a psychohygiena',
          createPage: par => React.createElement(KurzySS),
        },
        SSVyukaCestiny: {
          id: 'SSVyukaCestiny',
          title: 'Výuka češtiny jako druhého jazyka',
          createPage: par => React.createElement(KurzySS),
        },
        SSInkluzeCizinci: {
          id: 'SSInkluzeCizinci',
          title: 'Inkluze zaměřená na cizince (ukrajince)',
          createPage: par => React.createElement(KurzySS),
        },
        SSOstatniInkluze: {
          id: 'SSOstatniInkluze',
          title: 'Ostatní Inkluze',
          createPage: par => React.createElement(KurzySS),
        },
        SSFormativniHodnoceni: {
          id: 'SSFormativniHodnoceni',
          title: 'Formativní hodnocení',
          createPage: par => React.createElement(KurzySS),
        },
        SSGenderovaTematika: {
          id: 'SSGenderovaTematika',
          title: 'Genderová tematika v obsahu vzdělávání',
          createPage: par => React.createElement(KurzySS),
        },
      },
      kurzyii: {
        id: 'kurzyii',
        createPage: par => React.createElement(KurzyII),
        ZSInkluzeCizinci: {
          id: 'ZSInkluzeCizinci',
          title: 'Inkluze zaměřená na cizince (ukrajince)',
          createPage: par => React.createElement(KurzyII),
        },
        ZSVyukaCestiny: {
          id: 'ZSVyukaCestiny',
          title: 'Výuka češtiny jako druhého jazyka',
          createPage: par => React.createElement(KurzyII),
        },
        ZSMedialniGramotnost: {
          id: 'ZSMedialniGramotnost',
          title: 'Mediální gramotnost, prevence kyberšikany, chování na sociálních sítích',
          createPage: par => React.createElement(KurzyII),
        },
        ZSNoveTechnologie: {
          id: 'ZSNoveTechnologie',
          title: 'Vzděláváni s využitím nových technologií',
          createPage: par => React.createElement(KurzyII),
        },
        ZSWellBeing: {
          id: 'ZSWellBeing',
          title: 'Well-being a psychohygiena',
          createPage: par => React.createElement(KurzyII),
        },
        ZSCtenarskaGramotnost: {
          id: 'ZSCtenarskaGramotnost',
          title: 'Čtenářská gramotnost',
          createPage: par => React.createElement(KurzyII),
        },
        ZSMatematickaGramotnost: {
          id: 'ZSMatematickaGramotnost',
          title: 'Matematická gramotnost',
          createPage: par => React.createElement(KurzyII),
        },
        ZSRozvojPodnikavosti: {
          id: 'ZSRozvojPodnikavosti',
          title: 'Rozvoj podnikavosti a kreativity',
          createPage: par => React.createElement(KurzyII),
        },
        ZSKarierovePoradenstvi: {
          id: 'ZSKarierovePoradenstvi',
          title: 'Kariérové poradenství včetně identifikace a rozvoje nadání',
          createPage: par => React.createElement(KurzyII),
        },
        ZSFormativniHodnoceni: {
          id: 'ZSFormativniHodnoceni',
          title: 'Formativní hodnocení',
          createPage: par => React.createElement(KurzyII),
        },
        ZSDiagnostika: {
          id: 'ZSDiagnostika',
          title: 'Pedagogická diagnostika',
          createPage: par => React.createElement(KurzyII),
        },
        ZSInovace: {
          id: 'ZSInovace',
          title: 'Inovace ŠVP/koncepce rozvoje školy/školského zařízení',
          createPage: par => React.createElement(KurzyII),
        },
        ZSInkluze: {
          id: 'ZSInkluze',
          title: 'Ostatní Inkluze',
          createPage: par => React.createElement(KurzyII),
        },
        ZSPodpora: {
          id: 'ZSPodpora',
          title: 'Podpora uvádějících/provázejících učitelů',
          createPage: par => React.createElement(KurzyII),
        },
      },
      okurzy: {
        id: 'okurzy',
        createPage: par => <Okurzy />
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
      okurzy: {
        title: 'Termíny kurzů',
        rootNode: root.okurzy,
      },
      kurzyss: {
        title: 'Šablony pro SŠ a VOŠ I - OP JAK',
        rootNode: root.kurzyss,
      },
      kurzyii: {
        title: 'Šablony pro ZŠ a MŠ I - OP JAK',
        rootNode: root.kurzyii,
      },
      //q_and_a: {
      //  title: 'Dotazy a odpovědi',
      //  rootNode: root.q_and_a,
      //},
      //dalsi: {
      //  title: 'Služby',
      //  rootNode: root.dalsi,
      //},
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