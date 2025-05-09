﻿var Page: React.StatelessComponent<lib.IComponentProps> = (props: lib.IComponentProps, ctx: sitemapRouter.IContext) => {
  //breadcrumb
  var bcItems = site.nodeParents(ctx.site, true);
  var noBreadcrumb = true; //bcItems.length == 0;
  var bc = noBreadcrumb ? null : <div className="container">
    <ol className="breadcrumb">
      {bcItems.map(b => <li key={b.path}><a href="#" onClick={ev => sitemapRouter.doNavigate(b, ev)}>Home</a></li>)}
      <li className="active">ctx.site.brTitle ? ctx.site.brTitle : ctx.site.title</li>
    </ol>
    {/*
    <Breadcrumb>
      {bcItems.map(b => <Breadcrumb.Item href="#" key={b.path}>{b.brTitle ? b.brTitle : b.title}</Breadcrumb.Item>)  
      <Breadcrumb.Item href="#" active key={ctx.site.path}>{ctx.site.brTitle ? ctx.site.brTitle : ctx.site.title}</Breadcrumb.Item>
    </Breadcrumb> */}
    {/*{sitemapRouter.navigateUrl(b) }*/}
  </div>;
  //all nodes
  let nodes: Array<site.INode> = [];
  for (var p in site.nodes) nodes.push(site.nodes[p]);
  let idx = nodes.length >> 1;
  function nodeList(nds: Array<site.INode>): Array<JSX.Element> {
    var res: Array<JSX.Element> = [];
    nds.forEach(n => {
      res.push(sitemapRouter.doNavigateTag(n)); res.push(<br key={'br-' + n.path} />);
    });
    return res;
  }
  var left = nodeList(nodes.slice(0, idx));
  var right = nodeList(nodes.slice(idx));
  //tabs
  //markup
  return <div>
    {/*
    <Navbar inverse={true} className="topbar" style={noBreadcrumb ? null : { marginBottom: 0 }} >
      <Navbar.Header>
        <Navbar.Brand>
          <a href={router.navigateUrl(null) } className={classNames('lm-logo', 'lm-logo-black' + (ctx.site.largeLogo ? '' : '-small')) }></a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <li><h4 style={{ fontWeight: 'bold' }} className="navbar-text">{site.root.title}</h4></li>
      </Nav>
      <Nav pullRight>
        <li><h4 className="navbar-text" style={{ margin: 5 }}><span style={{ color: 'white' }}>tel.244 460 807</span><br/><a href={'mailto:' + infoEmail} className="navbar-link" style={{ color: '#9cdeff' }}>{infoEmail}</a></h4></li>
      </Nav>
    </Navbar>
    */}
    <nav className="topbar navbar navbar-inverse">
      <div className="container">
        <div className="navbar-header">
          <a href="http://localhost:49803/index.html" className={classNames('navbar-brand', 'lm-logo', 'lm-logo-black' + (ctx.site.largeLogo ? '' : '-small'))}></a>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <h4 className="navbar-text" style={{ fontWeight: "bold" }}>{site.root.title}</h4>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <h4 className="navbar-text" style={{ margin: 5 }}>
              <span style={{ color: 'white' }}>tel.244 460 807</span><br />
              <a href="mailto:projekt@langmaster.cz" className="navbar-link" style={{ color: '#9cdeff' }}>{infoEmail}</a>
            </h4>
          </li>
        </ul>
      </div>

    </nav>
    {bc}
    <div className="container">
      <Nav bsStyle="tabs" activeKey={ctx.site.tab.idx}>
        {site.tabs.$childs.map(t => <NavItem eventKey={t.idx} href="#" onClick={ev => sitemapRouter.doNavigate(t.rootNode, ev)} key={t.idx}>{t.title}</NavItem>)}
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
            <b>Přehled stránek: </b><br />
            {left}
          </Col>
          <Col md={4}>
            {right}
          </Col>
          <Col md={4}>
            <b>Kontakt: </b><br />
            LANGMaster.com, s.r.o.<br />
            Branická 659/107<br />
            147 00 Praha 4<br />
            <a href={'mailto:' + infoEmail}>{infoEmail}</a><br />
            +420 244 460 807<br />
          </Col>
        </Row>
      </Grid>
      <p className="text-center">Copyright 2025 LANGMaster.com, s.r.o.</p>
    </Block>
  </div>
}

Page.contextTypes = sitemapRouter.childContextTypes;

