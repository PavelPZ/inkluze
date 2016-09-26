const qas = [
  inkluze.createQA(
    <span>Provozujeme zároveň ZŠ a MŠ, kolik žádostí o dotaci máme podat?</span>,
    <div>
      <p>Pokud jsou ZŠ a MŠ 2 různé právnické subjekty (ZŠ a MŠ mají různé IČO), podáváte 2 žádosti.</p>
      <p>Pokud se jedná o jeden právnický subjekt (ZŠ a MŠ mají stejné IČO), podáváte jen jednu žádost.</p>
    </div>),
  inkluze.createQA(
    <span>
      Naše škola neodevzdala vyplněný dotazník MAP, což je nutnou podmínkou pro podání žádosti o dotaci.
      Máme ještě nějakou šanci o dotaci požádat?</span>,
    <div>
      Školy, které dotazník nevyplnily, mohou požádat o dodatečné vyplnění dotazníku emailem na  {lib.navigateExt('mailto:vyzkum-opvvv@msmt.cz', 'vyzkum-opvvv@msmt.cz') }.<br/>
      Nově zřízené školy mohou o vyplnění dotazníku zažádat na stejné emailové adrese nejdříve však v prosinci roku 2016.
    </div>),
]

const QAForm = inkluze.QAForm;

namespace inkluze {
  export const Q_and_a: React.StatelessComponent<{}> = (props: {}, ctx: sitemapRouter.IContext) => {
    return <div>
      <Page>
        <Block key={0}>
          <QAForm />
          <h2>Zodpovězené dotazy: </h2>
        </Block>
        {qas}
      </Page>
    </div>;
  };

  Q_and_a.contextTypes = sitemapRouter.childContextTypes;
}