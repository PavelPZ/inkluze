interface ISiteRoot extends site.INode {
  vyzva: ISiteVyzva;
}

interface ISiteVyzva extends site.INode {
}

var siteRoot: ISiteRoot = {
  title: 'Hlavní',
  id: 'home',
  largeLogo: true,
  tabIdx: 0,
  createPage: routePar => sitemapRouter.createElement<IHomePar>(Home, routePar, { subTitle: 'SubTitle Default' }), // createHome({ subTitle:'SubTitle Default' }),
  vyzva: {
    title: 'Výzva',
    id: 'vyzva',
    tabIdx: 0,
    createPage: null,
  }
}

site.root = siteRoot;