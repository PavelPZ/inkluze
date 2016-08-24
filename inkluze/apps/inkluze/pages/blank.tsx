var BlankPage: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => {
  return <div>
    <Page isSmall={true}>
      <Block gray>
        {!ctx.site.childs ? null : ctx.site.childs.map(ch => <p><a href={sitemapRouter.navigateUrl(ch) }>{ch.title}</a></p>) }
      </Block>
    </Page>
  </div>;
};

BlankPage.contextTypes = sitemapRouter.childContextTypes; 

site.getBlankPage = p => <BlankPage/>;