Application1.categories = function (params) {

    var viewModel = {
        dataSource: new DevExpress.data.DataSource({
            store: Application1.db.Categories,
            map: function(item) {
                return new Application1.CategoryViewModel(item);
            }
        })
    };

    return viewModel;
};