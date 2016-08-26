interface IPagePar extends lib.IComponentProps { isSmall?: boolean; }
var Page: React.StatelessComponent<IPagePar> = (props: IPagePar, ctx: sitemapRouter.IContext) => {
  //breadcrumb
  var bcItems = site.nodeParents(ctx.site, true);
  var noBreadcrumb = bcItems.length == 0;
  var bc = noBreadcrumb ? null : <div className="container">
    <Breadcrumb>
      {bcItems.map(b => <Breadcrumb.Item href={sitemapRouter.navigateUrl(b) } key={b.path}>{b.brTitle ? b.brTitle : b.title}</Breadcrumb.Item>) } 
      <Breadcrumb.Item href="#" active key={ctx.site.path}>{ctx.site.brTitle ? ctx.site.brTitle : ctx.site.title}</Breadcrumb.Item>
    </Breadcrumb>
  </div>;
  //tabs
  //markup
  return <div>
    <Navbar inverse={true} className="topbar" style={noBreadcrumb ? null : { marginBottom: 0 }} >
      <Navbar.Header>
        <Navbar.Brand>
          <a href={router.navigateUrl(null) } className={classNames('lm-logo', 'lm-logo-black' + (props.isSmall ? '-small' : '')) }></a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <h4 style={{ fontWeight: 'bold' }} className="navbar-text">{site.root.title}</h4>
      </Nav>
      <Nav pullRight>
        <h4 className="navbar-text" style={{ margin: 5 }}><span style={{ color: 'white' }}>tel.244 460 807</span><br/><a href="mailto:info@langmaster.cz" className="navbar-link" style={{ color: '#9cdeff' }}>info @langmaster.cz</a></h4>
      </Nav>
    </Navbar>
    {bc}
    <div className="container">
      <Nav bsStyle="tabs" activeKey={ctx.site.tab.idx}>
        {site.tabs.$childs.map(t => <NavItem eventKey={t.idx} href={sitemapRouter.navigateUrl(t.rootNode) } key={t.idx}>{t.title}</NavItem>) }
      </Nav>
    </div>
    {ctx.site.noTitle ? null :
      <div>
        <Block blue>
          <h1>{ctx.site.title}</h1>
        </Block>
      </div>
    }
    {props.children}
  </div>
}

Page.contextTypes = sitemapRouter.childContextTypes;

