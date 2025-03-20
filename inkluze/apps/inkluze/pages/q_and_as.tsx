const qas = [
  inkluze.createQA(
    <span>Akreditace 8 hodinových kurzů DVPP byly od března 2025 zrušeny</span>,
    <div style={{ marginTop: 10 }}>
      
    </div>),
]

const QAForm = inkluze.QAForm;

namespace inkluze {
  export const Akreditace: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => {
    return <div>
      <Page>
        <Block key={0}>
          <QAForm />
          <h2>Stav akreditací: </h2>
        </Block>
        {qas}
      </Page>
    </div>;
  };

  Akreditace.contextTypes = sitemapRouter.childContextTypes;
}