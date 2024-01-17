OC.L10N.register(
    "updatenotification",
    {
    "{version} is available. Get more information on how to update." : "Új verzió érhető el: {version}. További információk a frissítéshez.",
    "Channel updated" : "Csatorna frissítve",
    "Web updater is disabled" : "Webes frissítő letiltva",
    "Update notifications" : "Frissítési értesítések",
    "The update server could not be reached since %d days to check for new updates." : "A frissítési kiszolgáló  %d napja nem érhető el a frissítések kereséséhez.",
    "Please check the Nextcloud and server log files for errors." : "Ellenőrizze, hogy vannak-e hibák a Nextcloud és a rendszer naplófájljaiban.",
    "Update to %1$s is available." : "%1$s frissítés érhető el.",
    "Update to {serverAndVersion} is available." : "A {serverAndVersion} frissítése elérhető.",
    "Update for {app} to version %s is available." : "A {app} frissíthető erre a verzióra: %s.",
    "Update notification" : "Frissítési értesítés",
    "Displays update notifications for Nextcloud and provides the SSO for the updater." : "Megjeleníti a Nextcloud frissítéseiről szóló értesítéseket és SSO hozzáférést nyújt a frissítésekhez.",
    "Update" : "Frissítés",
    "The version you are running is not maintained anymore. Please make sure to update to a supported version as soon as possible." : "A futtatott verziót már nem tartják karban. Frissítsen támogatott verzióra, amint lehetséges.",
    "Apps missing compatible version" : "Az alkalmazásoknak nincs kompatibilis verziója",
    "View in store" : "Megtekintés a tárban",
    "Apps with compatible version" : "Alkalmazások kompatibilis verzióval",
    "Please note that the web updater is not recommended with more than 100 users! Please use the command line updater instead!" : "Vegye figyelembe, hogy a webes frissítő több mint 100 felhasználóval nem ajánlott. Használja helyette a parancssoros frissítőt.",
    "Open updater" : "Frissítő megnyitása",
    "Download now" : "Letöltés most",
    "Web updater is disabled. Please use the command line updater or the appropriate update mechanism for your installation method (e.g. Docker pull) to update." : "A webes frissítő le van tiltva. Használja a parancssoros frissítőt, vagy a telepítési módnak megfelelő frissítési mechanizmust (például Docker pull).",
    "What's new?" : "Újdonságok",
    "View changelog" : "Változásnapló megjelenítése",
    "The update check is not yet finished. Please refresh the page." : "A frissítéskeresés még nem ért véget. Frissítse az oldalt.",
    "Your version is up to date." : "A verziója naprakész.",
    "A non-default update server is in use to be checked for updates:" : "Egy nem alapértelmezett frissítési kiszolgáló van használatban a frissítések kereséséhez:",
    "Update channel" : "Frissítési csatorna",
    "Changing the update channel also affects the apps management page. E.g. after switching to the beta channel, beta app updates will be offered to you in the apps management page." : "A frissítési csatorna megváltoztatása az alkalmazáskezelő oldalra is hatással van. Például a béta csatornára történő váltáskor a béta frissítések lesznek elérhetők az alkalmazásokhoz is.",
    "Current update channel:" : "Jelenlegi frissítési csatorna:",
    "You can always update to a newer version. But you can never downgrade to a more stable version." : "Bármikor frissíthet egy újabb verzióra, viszont sosem léphet vissza egy stabilabb verzióra.",
    "Notify members of the following groups about available updates:" : "A következő csoport tagjainak értesítése az elérhető frissítésekről:",
    "No groups" : "Nincsenek csoportok",
    "Only notifications for app updates are available." : "Csak az alkalmazás frissítések értesítései érhetők el.",
    "The selected update channel makes dedicated notifications for the server obsolete." : "A kiválasztott frissítési csatorna okafogyottá teszi a kiszolgáló dedikált értesítéseit.",
    "The selected update channel does not support updates of the server." : "A kiválasztott frissítési csatorna nem támogatja a kiszolgáló frissítéseit.",
    "A new version is available: <strong>{newVersionString}</strong>" : "Új verzió érhető el: <strong>{newVersionString}</strong>",
    "Note that after a new release the update only shows up after the first minor release or later. We roll out new versions spread out over time to our users and sometimes skip a version when issues are found. Learn more about updates and release channels at {link}" : "Vegye figyelembe, hogy egy új verzió kiadása után, a frissítés csak a következő alverzió megjelenése, vagy egy későbbi időpontban jelenik meg. Fokozatosan juttatjuk el az új verziókat a felhasználókhoz, és néha kihagyunk egy verziót, ha problémák merülnek fel. Tudjon meg többet a frissítésekről és a kiadási csatornákról a következő oldalon: {link}",
    "Checking apps for compatible versions" : "Alkalmazások ellenőrzése kompatibilis verziók után",
    "Please make sure your config.php does not set <samp>appstoreenabled</samp> to false." : "Ellenőrizze, hogy a config.php fájl nem állítja-e be <samp>appstoreenabled</samp> értékét false-ra.",
    "Could not connect to the App Store or no updates have been returned at all. Search manually for updates or make sure your server has access to the internet and can connect to the App Store." : "Nem lehet csatlakozni az alkalmazástárhoz, vagy az egyáltalán nem adott vissza frissítéseket. Keressen kézzel frissítéseket, vagy győződjön meg arról, hogy a kiszolgálója hozzáfér-e az internethez és eléri-e az alkalmazástárat.",
    "<strong>All</strong> apps have a compatible version for this Nextcloud version available." : "<strong>Minden</strong> alkalmazás rendelkezik ezzel a Nextcloud verzióval kompatibilis verzióval.",
    "Enterprise" : "Vállalati",
    "For enterprise use. Provides always the latest patch level, but will not update to the next major release immediately. That update happens once Nextcloud GmbH has done additional hardening and testing for large-scale and mission-critical deployments. This channel is only available to customers and provides the Nextcloud Enterprise package." : "Vállalati felhasználásra. Mindig a legfrissebb foltozási szint, de nem fog azonnal a legújabb főverzióra frissíteni. A frissítés csak azután fog megtörténni, amikor a Nextcloud GmbH elvégezte a szükséges biztonsági megerősítéseket, illetve a nagy méretű és kritikus fontosságú rendszereket érintő teszteket. Ez a csatorna csak ügyfelek számára érhető el, és a Nextcloud Vállalati csomagját biztosítja.",
    "Stable" : "Stabil",
    "The most recent stable version. It is suited for regular use and will always update to the latest major version." : "A legfrissebb stabil verzió. Mindennapos használatra ajánlott, mindig a legújabb főverzióra frissít.",
    "Beta" : "Béta",
    "A pre-release version only for testing new features, not for production environments." : "Az előzetes verzió kizárólag az új funkciók tesztelésére szolgál, nem éles környezetekbe való.",
    "_<strong>%n</strong> app has no compatible version for this Nextcloud version available._::_<strong>%n</strong> apps have no compatible version for this Nextcloud version available._" : ["<strong>%n</strong> alkalmazásnak nincs elérhető kompatibilis verziója ehhez a Nextcloud verzióhoz.","<strong>%n</strong> alkalmazásnak nincs elérhető kompatibilis verziója ehhez a Nextcloud verzióhoz."],
    "Please use the command line updater to update." : "Az frissítéshez kérjük használja a parancssoros frissítéskezelőt.",
    "You can change the update channel below which also affects the apps management page. E.g. after switching to the beta channel, beta app updates will be offered to you in the apps management page." : "Alább módosíthatja a frissítési csatornát, amely érinti az alkalmazáskezelés oldalt is. Például ha a béta csatornára vált, akkor a béta alkalmazásfrissítések is fel lesznek kínálva az alkalmazáskezelés oldalon.",
    "Update channel:" : "Frissítési csatorna:",
    "Checked on {lastCheckedDate}" : "Ellenőrizve ekkor: {lastCheckedDate}"
},
"nplurals=2; plural=(n != 1);");
