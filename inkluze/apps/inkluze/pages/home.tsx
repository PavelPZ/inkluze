//interface IHomePar { subTitle: string; }

var Home: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => <div>
  <Page isSmall={false}>
    <Block>
      <p>text Text Text</p>
    </Block>
    <Block gray>
      <p>
        {sitemapRouter.navigateTag(inkluze.root.pravidla) }
      </p>
    </Block>
  </Page>
</div>;

Home.contextTypes = sitemapRouter.childContextTypes; 
