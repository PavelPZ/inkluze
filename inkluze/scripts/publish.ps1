# Publish inkluze web to IIS folder (e.g. over VPN).
# Usage:
#   cd inkluze
#   .\scripts\publish.ps1
#   .\scripts\publish.ps1 -Target "\\192.168.0.111\Data\disk_q\inkluze"
#   .\scripts\publish.ps1 -IncludeAppData -IncludeWebConfig   # first deploy / full sync

param(
    [string]$Target = "\\192.168.0.111\Data\disk_q\inkluze",
    [switch]$IncludeAppData,
    [switch]$IncludeWebConfig,
    [switch]$SkipBuild
)

$ErrorActionPreference = "Stop"
$Project = Split-Path $PSScriptRoot -Parent
Set-Location $Project

if (-not (Test-Path $Target)) {
    Write-Error "Cílová cesta není dostupná: $Target`nPřipojte VPN a ověřte UNC cestu."
}

if (-not $SkipBuild) {
    Write-Host ">> npm run build"
    npm run build
    if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

    Write-Host ">> MSBuild Release"
    $MSBuild = & "${env:ProgramFiles(x86)}\Microsoft Visual Studio\Installer\vswhere.exe" `
        -latest -products * -requires Microsoft.Component.MSBuild `
        -find "MSBuild\**\Bin\MSBuild.exe" | Select-Object -First 1
    if (-not $MSBuild) { Write-Error "MSBuild nenalezen (nainstalujte Visual Studio Build Tools)." }
    & $MSBuild (Join-Path $Project "inkluze.csproj") /t:Build /p:Configuration=Release /v:minimal
    if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
}

function Sync-Robocopy($Source, $Dest, [string]$Label) {
    if (-not (Test-Path $Source)) {
        Write-Warning "Přeskočeno (neexistuje): $Source"
        return
    }
    if (-not (Test-Path $Dest)) {
        New-Item -ItemType Directory -Path $Dest -Force | Out-Null
    }
    & robocopy $Source $Dest /E /XO /R:2 /W:2 /NFL /NDL /NJH /NJS /NC /NS /BYTES /TS
    $code = $LASTEXITCODE
    if ($code -ge 8) {
        Write-Error "robocopy $Label selhal (exit $code)"
    }
    $summary = switch ($code) {
        0 { "bez změny (server už má stejné nebo novější soubory)" }
        1 { "soubory zkopírovány" }
        2 { "extra soubory v cíli" }
        3 { "zkopírováno + extra v cíli" }
        default { "exit code $code" }
    }
    Write-Host "   $Label : $summary"
}

# Cache-bust bundled JS so browsers pick up new apps/inkluze.js after publish.
$CacheStamp = Get-Date -Format "yyyyMMddHHmm"
$IndexPath = Join-Path $Project "index.html"
if (Test-Path $IndexPath) {
    $indexText = Get-Content $IndexPath -Raw -Encoding UTF8
    $indexText = [regex]::Replace($indexText, '\?v=\d+', "?v=$CacheStamp")
    [System.IO.File]::WriteAllText($IndexPath, $indexText, (New-Object System.Text.UTF8Encoding $false))
    Write-Host ">> index.html cache bust ?v=$CacheStamp"
}

Write-Host ">> Kopírování do $Target"

Sync-Robocopy (Join-Path $Project "bin") (Join-Path $Target "bin") "bin"
Sync-Robocopy (Join-Path $Project "apps") (Join-Path $Target "apps") "apps"
Sync-Robocopy (Join-Path $Project "externals") (Join-Path $Target "externals") "externals"
Sync-Robocopy (Join-Path $Project "libs") (Join-Path $Target "libs") "libs"

foreach ($file in @("index.html", "sitemap.xml", "favicon.ico")) {
    $src = Join-Path $Project $file
    if (Test-Path $src) {
        Copy-Item $src (Join-Path $Target $file) -Force
        Write-Host "   $file : zkopírován"
    }
}

# Osnovy (katalog) syncujeme vždy; termíny kurzy.json jen s -IncludeAppData.
$KatalogSrc = Join-Path $Project "App_Data\katalog-kurzu.json"
$KatalogDstDir = Join-Path $Target "App_Data"
if (Test-Path $KatalogSrc) {
    if (-not (Test-Path $KatalogDstDir)) {
        New-Item -ItemType Directory -Path $KatalogDstDir -Force | Out-Null
    }
    Copy-Item $KatalogSrc (Join-Path $KatalogDstDir "katalog-kurzu.json") -Force
    Write-Host "   katalog-kurzu.json : zkopírován"
}

if ($IncludeWebConfig) {
    Copy-Item (Join-Path $Project "web.config") (Join-Path $Target "web.config") -Force
    Write-Host "   web.config přepsán (Release transform aplikujte přes MSBuild WebPublish, nebo upravte heslo ručně na serveru)."
} else {
    Write-Host "   web.config ponechán na serveru (použijte -IncludeWebConfig pro přepsání)."
}

if ($IncludeAppData) {
    Sync-Robocopy (Join-Path $Project "App_Data") (Join-Path $Target "App_Data") "App_Data"
} else {
    Write-Host "   App_Data/kurzy.json (termíny) ponechán na serveru (použijte -IncludeAppData pro přepsání)."
}

Write-Host ""
Write-Host "Hotovo. Ověřte: https://dvpp.langmaster.cz/index.html?home"
