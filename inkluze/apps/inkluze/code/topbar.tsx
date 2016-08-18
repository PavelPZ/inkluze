interface ITopBarPar { isSmall?: boolean; }
var TopBar: React.StatelessComponent<ITopBarPar> = (props: ITopBarPar, ctx: sitemapRouter.IContext) => <Navbar inverse={true} className="topbar">
  <Navbar.Header>
    <Navbar.Brand>
      <a href={router.navigateUrl(null)} className={classNames('lm-logo', 'lm-logo-black' + (props.isSmall ? '-small' : '')) }></a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <p style={{ margin: 5, fontWeight: 'bold' }} className="navbar-text">{ctx.site.title}<br/>popis</p>
  </Nav>
  <Nav pullRight>
    <h4 className="navbar-text" style={{ margin: 5 }}><span style={{ color: 'white' }}>tel.244 460 807</span><br/><a href="mailto:info@langmaster.cz" className="navbar-link" style={{ color: '#9cdeff' }}>info@langmaster.cz</a></h4>
  </Nav>
  </Navbar>;

TopBar.contextTypes = sitemapRouter.childContextTypes; 