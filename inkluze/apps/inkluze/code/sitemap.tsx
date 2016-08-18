namespace inkluze {
  export interface ISiteRoot extends site.INode {
    vyzva: ISiteVyzva;
  }

  export interface ISiteVyzva extends site.INode {
  }

  export var root;

  export interface ITabs extends site.ITabs {
    home: site.ITab;
    vyzva: site.ITab;
    kontakt: site.ITab;
  }

  export var tabs: ITabs;

  export function bootApp() {
    site.tabs = tabs = {
      home: {
        title: 'Hlavni',
      },
      vyzva: {
        title: 'Výzva',
      },
      kontakt: {
        title: 'Kontakt',
      },
    }
    site.root = tabs.home.rootNode = root = {
      title: 'Hlavní',
      id: 'home',
      largeLogo: true,
      tab: tabs.home,
      createPage: routePar => sitemapRouter.createElement<IHomePar>(Home, routePar, { subTitle: 'SubTitle Default' }),
      vyzva: tabs.vyzva.rootNode = {
        title: 'Výzva',
        id: 'vyzva',
        tab: tabs.vyzva,
        createPage: null,
      },
      kontakt: tabs.kontakt.rootNode = {
        title: 'Kontakt',
        id: 'kontakt',
        tab: tabs.kontakt,
        createPage: null,
      },
    }
  }
}