var BlankPage: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => {
  var childIdx = 0;
  return <div>
    <Page>
      <Block>
        {!ctx.site.childs ? null : ctx.site.childs.map(ch => <p key={childIdx++}><a href="#" onClick={ev => sitemapRouter.doNavigate(ch, ev) }>{ch.title}</a></p>)}
      </Block>
    </Page>
  </div>;
};

BlankPage.contextTypes = sitemapRouter.childContextTypes; 

site.getBlankPage = p => <BlankPage/>; 