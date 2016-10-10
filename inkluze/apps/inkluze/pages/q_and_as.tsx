const qas = [
  inkluze.createQA(
    <span>Chtěli bychom si u vás objednat školení co nejdříve, aby byly ještě volné jarní termíny, ale ještě nemáme schválenou žádost o dotaci. Jaký by byl postup, kdybychom objednaný termín kvůli problémům se schválením museli zrušit. Platili bychom nějaké penále?</span>,
    <div style={{ marginTop: 10 }}>
      <p>V případě spolupráce s naší firmou si s tímto nemusíte dělat starosti. Platbu za školení nevyžadujeme předem. V případě zrušení termínu, např. kvůli zamítnutí dotace, nepožadujeme žádnou finanční náhradu.</p>
    </div>),
  inkluze.createQA(
    <span>Máme zájem o 16 hodinové DVPP školení na čtenářskou gramotnost pro 16 pedagogů. Nebylo by náhodou možné, že byste školení uspořádali jen pro naši skupinu pedagogů a přijeli k mám do sborovny v termínu, který si sami určíme (ředitelské volno).</span>,
    <div style={{ marginTop: 10 }}>
      <p>Ano, je to možné. Pokud přihlásíte dostatečný počet pedagogů do kteréhokoliv z našich kurzů, přijedeme do vaší školy a pedagogy proškolíme přímo ve vaší sborovně. Termíny školení přizpůsobíme vašim potřebám.</p>
    </div>),
  inkluze.createQA(
    <span>Vyhovovalo by nám školení pro celou sborovnu. Abychom ale splnili bagatelní podporu, potřebovali bychom pro každého pedagoga šablonu II/2.8 Vzdělávání pedagogického sboru ZŠ zaměřené na inkluzi objednat 3x. Je to možné?</span>,
    <div style={{ marginTop: 10 }}>
      <p>Ano, je to možné. Pravidla výzvy 02_16_022/023 to umožňují, podmínkou ale je, že se musí jednat o 3 různé kurzy. Naše firma nabízí pro šablonu II/2.8 celkem 6 různých akreditovaných kurzů, takže si u nás můžete objednat tři 8-mi hodinová školení, každé z nich zaměřené na jinou část inkluzivní tematiky.
      </p>
    </div>),
  inkluze.createQA(
    <span>Je možné absolvovat školení formou intenzívního kurzu s pobytem, například na chatě</span>,
    <div style={{ marginTop: 10 }}>
      <p>Ano, takové kuzy po dohodě se školou také pořádáme.</p>
    </div>),
  inkluze.createQA(
    <span>Jsou vaše kurzy zaměřené na společné vzdělávání akreditované? Přednášejí je akreditovaní lektoři?</span>,
    <div style={{ marginTop: 10 }}>
      <p>Ano, všechny naše kurzy zaměřené na společné vzdělávání jsou akreditované.
        Všichni naši lektoři mají požadované osvědčení: Lektor implementátor pro společné vzdělávání.</p>
    </div>),
  inkluze.createQA(
    <span>Provozujeme zároveň ZŠ a MŠ, kolik žádostí o dotaci máme podat?</span>,
    <div style={{ marginTop: 10 }}>
      <p>Pokud jsou ZŠ a MŠ 2 různé právnické subjekty (ZŠ a MŠ mají různé IČO), podáváte 2 žádosti.</p>
      <p>Pokud se jedná o jeden právnický subjekt (ZŠ a MŠ mají stejné IČO), podáváte jen jednu žádost.</p>
    </div>),
  inkluze.createQA(
    <span>
      Naše škola neodevzdala vyplněný dotazník MAP, což je nutnou podmínkou pro podání žádosti o dotaci.
      Máme ještě nějakou šanci o dotaci požádat?</span>,
    <div style={{ marginTop: 10 }}>
      Školy, které dotazník nevyplnily, mohou požádat o dodatečné vyplnění dotazníku emailem na  {lib.navigateExt('mailto:vyzkum-opvvv@msmt.cz', 'vyzkum-opvvv@msmt.cz')}.<br />
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