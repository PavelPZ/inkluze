const qas = [
  createQA(
    'Pokud mám pod jedním IČO dva subjekty (např. MŠ a ZŠ), mám vytvořit jednu žádost o dotace nebo dvě?',
    'Žádost se podává za organizaci. Ta je určená IČ, takže ve Vašem případě podáte pouze jednu žádost.'),
  createQA(
    <span>
      Naše škola neodevzdala dotazník MAP. 
      Můžeme žádat o dotaci v rámci výzvy?'</span>,
    <div>
      Vyplnění dotazníku MAP je nezbytnou podmínkou pro účast ve výzvě.
      O dodatečné vyplnění dotazníku požádejte emailem na {lib.navigateExt('mailto:vyzkum-opvvv@msmt.cz', 'vyzkum-opvvv@msmt.cz') }.<br/>
      Poznámka: Nově zřízené školy mohou o vyplnění dotazníku zažádat na stejné emailové adrese nejdříve v prosinci roku 2016.
    </div>),
]


