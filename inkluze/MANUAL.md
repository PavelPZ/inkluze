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

## Nasazení na server

Zkopírovat obsah složky `inkluze/` na IIS (včetně `apps/inkluze.js`, `libs/lib.js`, `App_Data/`, `web.config`).  
Na produkci změnit admin heslo v `web.config`.
