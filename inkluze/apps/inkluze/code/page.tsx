var Page: React.StatelessComponent<lib.IComponentProps> = (props: lib.IComponentProps, ctx: sitemapRouter.IContext) => {
  //breadcrumb
  var bcItems = site.nodeParents(ctx.site, true);
  var noBreadcrumb = true; //bcItems.length == 0;
  var bc = noBreadcrumb ? null : <div className="container">
    <Breadcrumb>
      {bcItems.map(b => <Breadcrumb.Item href={sitemapRouter.navigateUrl(b) } key={b.path}>{b.brTitle ? b.brTitle : b.title}</Breadcrumb.Item>) }
      <Breadcrumb.Item href="#" active key={ctx.site.path}>{ctx.site.brTitle ? ctx.site.brTitle : ctx.site.title}</Breadcrumb.Item>
    </Breadcrumb>
  </div>;
  //all nodes
  let nodes: Array<site.INode> = [];
  for (var p in site.nodes) nodes.push(site.nodes[p]);
  let idx = nodes.length >> 1;
  function nodeList(nds: Array<site.INode>): Array<JSX.Element> {
    var res: Array<JSX.Element> = [];
    nds.forEach(n => {
      res.push(sitemapRouter.navigateTag(n)); res.push(<br/>);
    });
    return res;
  }
  var left = nodeList(nodes.slice(0, idx));
  var right = nodeList(nodes.slice(idx));
  //tabs
  //markup
  return <div>
    <Navbar inverse={true} className="topbar" style={noBreadcrumb ? null : { marginBottom: 0 }} >
      <Navbar.Header>
        <Navbar.Brand>
          <a href={router.navigateUrl(null) } className={classNames('lm-logo', 'lm-logo-black' + (ctx.site.largeLogo ? '' : '-small')) }></a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <h4 style={{ fontWeight: 'bold' }} className="navbar-text">{site.root.title}</h4>
      </Nav>
      <Nav pullRight>
        <h4 className="navbar-text" style={{ margin: 5 }}><span style={{ color: 'white' }}>tel.244 460 807</span><br/><a href={'mailto:' + infoEmail} className="navbar-link" style={{ color: '#9cdeff' }}>{infoEmail}</a></h4>
      </Nav>
    </Navbar>
    {/*<div className="container alert alert-danger text-center">
      <h4>
        Pracovní verze webu.
        Tento web bude spouštěn 5. 9. 2016.
      </h4>
    </div>*/}
    {bc}
    <div className="container">
      <Nav bsStyle="tabs" activeKey={ctx.site.tab.idx}>
        {site.tabs.$childs.map(t => <NavItem eventKey={t.idx} href={sitemapRouter.navigateUrl(t.rootNode) } key={t.idx}>{t.title}</NavItem>) }
      </Nav>
    </div>
    {ctx.site.noTitle ? null :
      <div>
        <Block blue>
          <h1 style={{ marginBottom: '0' }}>{ctx.site.title}</h1>
        </Block>
      </div>
    }
    {props.children}
    <Block darkGray={true} style={{ marginTop: '20px' }}>
      <Grid>
        <Row>
          <Col md={4}>
            <b>Přehled stránek: </b><br/>
            {left}
          </Col>
          <Col md={4}>
            {right}
          </Col>
          <Col md={4}>
            <b>Kontakt: </b><br/>
            LANGMaster.com, s.r.o.<br/>
            Branická 659/107<br/>
            147 00 Praha 4<br/>
            <a href={'mailto:' + infoEmail}>{infoEmail}</a><br/>
            +420 244 460 807<br/>
          </Col>
        </Row>
      </Grid>
      <p className="text-center">Copyright 2016 LANGMaster.com, s.r.o.</p>
    </Block>
  </div>
}

Page.contextTypes = sitemapRouter.childContextTypes;

