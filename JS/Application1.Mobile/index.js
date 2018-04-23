
$(function() {
    var startupView = "categories";

    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });

    if(DevExpress.devices.real().platform === "win8") {
        $("body").css("background-color", "#000");
    }

    document.addEventListener("deviceready", onDeviceReady, false);
    
    function onDeviceReady() {
        navigator.splashscreen.hide();
        if (window.devextremeaddon != null ) {
            window.devextremeaddon.setup();
        }
        document.addEventListener("backbutton", onBackButton, false);
    }

    function onBackButton() {
        DevExpress.processHardwareBackButton();
    }

    function onNavigatingBack(e) {
        if(e.isHardwareButton && !Application1.app.canBack()) {
            e.cancel = true;
            exitApp();
        }
    }

    function exitApp() {
        switch (DevExpress.devices.real().platform) {
            case "tizen":
                tizen.application.getCurrentApplication().exit();
                break;
            case "android":
                navigator.app.exitApp();
                break;
            case "win8":
                window.external.Notify("DevExpress.ExitApp");
                break;
        }
    }

    Application1.app = new DevExpress.framework.html.HtmlApplication({
        namespace: Application1,
        layoutSet: DevExpress.framework.html.layoutSets[Application1.config.layoutSet],
        navigation: Application1.config.navigation,
        commandMapping: Application1.config.commandMapping
    });

    $(window).unload(function() {
        Application1.app.saveState();
    });

    Application1.app.router.register(":view/:id", { view: startupView, id: undefined });
    Application1.app.on("navigatingBack", onNavigatingBack);
    Application1.app.navigate();
});