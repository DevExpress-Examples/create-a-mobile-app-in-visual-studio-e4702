
$(function() {
    var navigationType = Application1.config.navigationType,
        startupView = "categories";

    DevExpress.devices.current("desktop");

    Application1.app = new DevExpress.framework.html.HtmlApplication({
        namespace: Application1,
        navigationType: navigationType,
        navigation: Application1.config.navigation,
        commandMapping: {
            "ios-header-toolbar": {
                commands: [
                    { id: "search", location: 'right', showText: false }
                ]
            },
            "android-footer-toolbar": {
                commands: [
                    { id: "search", location: 'center', showText: false }
                ]
            },
            "tizen-footer-toolbar": {
                commands: [
                      { id: "search", location: 'center', showText: false }
                ]
            },
            "generic-header-toolbar": {
                commands: [
                    { id: "search", location: 'right', showText: false }
                ]
            },
            "win8-phone-appbar": {
                commands: [
                    { id: "search", location: 'center', showText: true }
                ]
            },
        }
    });

    $(window).unload(function() {
        Application1.app.saveState();
    });

    Application1.app.router.register(":view/:id", { view: startupView, id: undefined });
    Application1.app.navigate();
});
