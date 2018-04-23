window.Application1 = window.Application1 || {};

$(function() {
    Application1.app = new DevExpress.framework.html.HtmlApplication({
        namespace: Application1,
        defaultLayout: Application1.config.defaultLayout,
        navigation: Application1.config.navigation
    });
    Application1.app.router.register(":view/:id", { view: "home", id: undefined });

    Application1.app.navigate();

});
