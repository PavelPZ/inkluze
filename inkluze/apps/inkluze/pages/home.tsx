var Home: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => <div>
  <Page isSmall={false}>
    <Block>
      <p>{popups.zadavatel}</p>
      <p>{popups.rozpocet}</p>
    </Block>
    <Block gray>
      <p>
        {sitemapRouter.navigateTag(inkluze.root.pravidla.dump_popups) }
      </p>
    </Block>
  </Page>
</div>;

Home.contextTypes = sitemapRouter.childContextTypes;

