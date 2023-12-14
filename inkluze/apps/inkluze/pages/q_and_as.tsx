const qas = [
  inkluze.createQA(
    <span>14.2.2024 Tandemová výuka</span>,
    <div style={{ marginTop: 10 }}>
      <p>
        Tento kurz není akreditován, což není překážkou financování ze Šablon JAK.
      </p>
      <p>
V případě jakýchkoli pochybností si tuto informaci můžete ověřit na konzultační lince pro Šablony JAK: dotazyzp@msmt.cz, tel. 234 814 777
      </p>
      <p>
Kurz byl podán k akreditaci v květnu 2023. Kurz již nebyl zakreditován protože z rozhodnutí MŠMT byly od září 2023 všechny DVPP akreditace zastaveny.:Budou se akreditovat MŠMT výhradně specializační a kvalifikační studia,tj. jen ty které vedou ke specializaci či kvalifikaci.
        Více viz: -(aktualizováno) Změny v akreditacích vzdělávacích programů v systému dalšího vzdělávání pedagogických pracovníků účinné od 1. září 2023, MŠMT ČR (msmt.cz)
        V bodě 1a) zrušení akreditací - třetí odstavec se píše:
        Zároveň již není akreditace vzdělávacích programů prohlubujícího vzdělávání podmínkou pro čerpání finančních prostředků z dotačních programů, zejména z tzv. šablon Operačního programu Jan Amos Komenský nebo výzev v rámci Národního plánu obnovy.
        </p>
      <p>
Tento kurz splňuje svou kvalitou kriteria pro akreditovaný kurz. Paní lektorka Forýtková pro nás lektoruje spoustu dalších kurzů, které ji byly bez problémů zakreditovány. Nicméně i jejich akreditace postupně vyprší, stejně tak jako akreditaci všech našich dalších akreditovaných kurzů a i všech kurzů, které nabízejí jiné vzdělavací instituce. Od března 2025 už nebudou akreditované kurzy DVPP vůbec existovat, protože bude všem akreditovaným kurzům ukončena platnost akreditace.

      </p>
    </div>),
  inkluze.createQA(
    <span>Akreditace 2</span>,
    <div style={{ marginTop: 10 }}>
      <p>Vysvětlení.</p>
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