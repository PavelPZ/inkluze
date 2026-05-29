/// <reference path="controls.tsx"/>
/// <reference path="page.tsx"/>

/// <reference path="../pages/popups.tsx"/>
/// <reference path="../pages/blank.tsx"/>
/// <reference path="../pages/home.tsx"/>
/// <reference path="../pages/akreditace.tsx"/>
/// <reference path="../pages/q_and_as.tsx"/>
/// <reference path="../pages/kurzy/controls.tsx"/>
/// <reference path="../pages/kurzy/kurzyss.tsx"/>
/// <reference path="../pages/kurzy/kurzyii.tsx"/>
/// <reference path="../pages/kurzy-shared.tsx"/>
/// <reference path="../pages/okurzy.tsx"/>
/// <reference path="../pages/prehled-kurzy.tsx"/>
/// <reference path="../pages/admin-kurzy.tsx"/>
/// <reference path="../pages/onas.tsx"/>

/// <reference path="sitemap.tsx"/>

sitemapRouter.bootApp(document.getElementById('content'), inkluze.bootApp);
inkluze.installPageMetaUpdater();
