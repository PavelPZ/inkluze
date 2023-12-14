namespace inkluze {
  export interface ISiteRoot extends site.INode {
    akreditace: site.INode;
    //dalsi: site.INode;
    okurzy: site.INode;
    kurzyss: ISiteKurzySS;
    kurzyii: ISiteKurzyII;
    onas: site.INode;
    //slovnicek: site.INode;
  }

  export interface ISiteKurzySS extends site.INode {
    SSPedagogickaDiagnostika: site.INode;
    SSInovace: site.INode;
    SSSpoluprace: site.INode;
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
    SSInovativniFormy: site.INode;
    SSFormativniHodnoceni: site.INode;
    SSIndividualizace: site.INode;
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
    ZSSpoluprace: site.INode;
    ZSInkluze: site.INode;
    ZSInovativniFormy: site.INode;
    ZSPodpora: site.INode;
    ZSRozvojPodnikavosti: site.INode;
    ZSMatematickaGramotnost: site.INode;
    ZSGenderova: site.INode;
    ZSCtenarskaGramotnost: site.INode;
    ZSFormativniHodnoceni: site.INode;
    ZSIndividualizace: site.INode;
    ZSKarierovePoradenstvi: site.INode;
  }

  export var root: ISiteRoot;

  export interface ITabs extends site.ITabs {
    home: site.ITab;
    kurzyss: site.ITab;
    kurzyii: site.ITab;
    okurzy: site.ITab;
    akreditace: site.ITab;
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
      akreditace: {
        id: 'akreditace',
        createPage: par => <Akreditace />,
      },
      //dalsi: {
      //  id: 'dalsi',
      //  createPage: par => <Ostatni />,
      //},
      //slovnicek: {
      //  id: 'slovnicek',
      //  createPage: par => <Slovnicek/>,
      //},
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
        SSSpoluprace: {
          id: 'SSSpoluprace',
          title: 'Spolupráce s rodiči a zákonnými zástupci dětí a žáků',
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
        SSInovativniFormy: {
          id: 'SSInovativniFormy',
          title: 'Alternativní/inovativní formy výuky, aktivizační metody ve výuce',
          createPage: par => React.createElement(KurzySS),
        },
        SSFormativniHodnoceni: {
          id: 'SSFormativniHodnoceni',
          title: 'Formativní hodnocení',
          createPage: par => React.createElement(KurzySS),
        },
        SSIndividualizace: {
          id: 'SSIndividualizace',
          title: 'Individualizace vzdělávání a vedení portfolia dítěte/žáka',
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
        ZSInovativniFormy: {
          id: 'ZSInovativniFormy',
          title: 'Alternativní/inovativní formy výuky, aktivizační metody ve výuce',
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
        ZSGenderova: {
          id: 'ZSGenderova',
          title: 'Genderová tematika v obsahu vzdělávání',
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
        ZSIndividualizace: {
          id: 'ZSIndividualizace',
          title: 'Individualizace vzdělávání a vedení portfolia dítěte/žáka',
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
        ZSSpoluprace: {
          id: 'ZSSpoluprace',
          title: 'Spolupráce s rodiči a zákonnými zástupci dětí a žáků',
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
      akreditace: {
        title: 'Akreditace',
        rootNode: root.akreditace,
      },
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