# inkluze – stručný manuál

Web DVPP LANGMaster (React + ASP.NET, data v `App_Data/kurzy.json`).

## Požadavky

- Node.js 18+
- IIS Express (součást Visual Studio nebo samostatná instalace)

## Build (po změně `.tsx`)

```powershell
cd inkluze
npm install          # jen poprvé
npm run build        # zkompiluje ../Lib → libs/lib.js a apps/inkluze.js
```

IIS Express **restartovat nemusíte** – po buildu stačí v prohlížeči **Ctrl+F5**.

Ve VS Code: úloha **„build inkluze (tsc)"** dělá totéž.

> Pro úpravy TS/TSX nepoužívejte PowerShell `Set-Content` na velké soubory (riziko rozbití diakritiky). Po buildu vždy `npm run build`.

## Spuštění IIS Express

```powershell
& "C:\Program Files\IIS Express\iisexpress.exe" /path:"<repo>\inkluze" /port:8080
```

(Příklad: `/path:"C:\Users\PetrJanecek\source\repos\inkluze\inkluze"`)

Ve VS Code: úloha **„run inkluze iisexpress"** (nebo **„build + run inkluze"**).

Zastavení:

```powershell
Get-Process iisexpress -ErrorAction SilentlyContinue | Stop-Process -Force
```

Ve VS Code: úloha **„stop iisexpress"**.

## Adresy

| Stránka | URL |
|---------|-----|
| Úvod | http://localhost:8080/index.html?home |
| Termíny kurzů | http://localhost:8080/index.html?home\|okurzy |
| Katalog kurzů | http://localhost:8080/index.html?home\|prehledkurzu |
| Šablony SŠ / ZŠ | http://localhost:8080/index.html?home\|kurzyss |
| | http://localhost:8080/index.html?home\|kurzyii |

Produkce: https://dvpp.langmaster.cz/ (stejná struktura URL).

## Administrace termínů

**URL:** http://localhost:8080/index.html?home\|adminkurzy  
(Odkaz není v menu – jen přímá adresa.)

**Heslo:** viz `web.config` → `KurzyAdminPassword` (výchozí: `kurzy-admin`).

Po přihlášení lze upravovat šablony kurzů a termíny. Na webu se zobrazí jen termíny s přepínačem **Publikováno**.

Data se ukládají do `App_Data/kurzy.json`.

## Užitečné skripty (`scripts/`)

| Skript | Účel |
|--------|------|
| `generate-sitemap.py` | Obnoví `sitemap.xml` |
| `import-kurzy-seznam.py` | Import kurzů ze starého `kurzy-seznam.tsx` |
| `check-encoding.py` | Kontrola kódování UTF-8 |
| `fix-controls-encoding.py` | Oprava kódování + BS3 atributy v `controls.tsx` |

Spuštění: `py scripts\generate-sitemap.py` (z adresáře `inkluze`).

## Nasazení na server (dvpp.langmaster.cz)

**Cílová složka IIS (VPN):** `\\192.168.0.111\Data\disk_q\inkluze\`

### Rutinní publish (doporučeno)

1. Připojte **VPN** (UNC cesta musí být dostupná).
2. V PowerShellu:

```powershell
cd inkluze
.\scripts\publish.ps1
```

Skript:
- spustí `npm run build` (JS)
- zkompiluje **Release** (`bin\inkluze.dll`)
- zkopíruje runtime soubory na server

**Výchozí chování:** nepřepisuje `web.config` ani `App_Data\kurzy.json` na serveru (aby se neztratilo produkční heslo admina a data termínů).

### Úplný publish (první nasazení)

```powershell
.\scripts\publish.ps1 -IncludeWebConfig -IncludeAppData
```

Před prvním nasazením na produkci v `web.config` nastavte silné `KurzyAdminPassword`.

### Ruční postup (bez skriptu)

```powershell
cd inkluze
npm run build
# MSBuild Release – viz úloha „build inkluze" ve VS Code, Configuration=Release
```

Poté zkopírovat na `\\192.168.0.111\Data\disk_q\inkluze\`:

| Složka / soubor | Poznámka |
|-----------------|----------|
| `bin\` | `inkluze.dll`, `Newtonsoft.Json.dll` |
| `apps\inkluze.js`, `apps\inkluze\css\` | frontend |
| `libs\lib.js`, `libs\service-*\` | router + API |
| `externals\` | React, Bootstrap CSS, … |
| `index.html`, `sitemap.xml`, `favicon.ico` | |
| `App_Data\kurzy.json` | jen pokud chcete přepsat data ze dev |
| `web.config` | jen s vědomím přepsání produkčního hesla |

**Nekopírovat:** `node_modules`, `obj`, `.tsx` zdrojáky, `scripts\`.

### Po nasazení

- Otevřete https://dvpp.langmaster.cz/index.html?home (Ctrl+F5)
- Admin: https://dvpp.langmaster.cz/index.html?home\|adminkurzy
