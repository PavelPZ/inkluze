interface IHomePar { subTitle: string; }

var Home: React.StatelessComponent<IHomePar> = (props: IHomePar, ctx: sitemapRouter.IContext) => <div>
  <TopBar isSmall={false}/>
  <h1>{ctx.site.title}</h1>
  <h2>{props.subTitle}</h2>
  <p>
    <a href={sitemapRouter.navigateUrl<IHomePar>(ctx.site, { subTitle: 'New SubTitle' }) }>Other home</a>
  </p>
</div>;

Home.contextTypes = sitemapRouter.childContextTypes; 
