var Pravidla: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => <div>
  <Page isSmall={false}>
    <BlockEx title="Princip využití dotace">
      Text s odkazem na {popups.MAP} popup.Text s odkazem na jinou stránku: {sitemapRouter.navigateTag(inkluze.root.kurzy) }.Text s odkazem <a href='http://www.langmaster.cz'>jinam</a>.
    </BlockEx>
    <BlockEx title="Kdo je oprávněný žadatel o dotaci?" gray>
      XXXX
    </BlockEx>
    <BlockEx title="Jaká je výše dotace?">
      XXXX
    </BlockEx>
    <BlockEx title="XXXX">
      XXXX
    </BlockEx>
    <BlockEx title="XXXX" gray>
      XXXX
    </BlockEx>
  </Page>
</div >;

Pravidla.contextTypes = sitemapRouter.childContextTypes;

