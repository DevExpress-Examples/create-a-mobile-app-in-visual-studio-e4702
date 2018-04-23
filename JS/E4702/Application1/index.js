window.Application1 = window.Application1 || {};

$(function() {
    Application1.app = new DevExpress.framework.html.HtmlApplication({
        namespace: Application1,
        navigationType: 'navbar',
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
    Application1.app.router.register(":view/:id", { view: "home", id: undefined });

    Application1.app.navigate();

});
