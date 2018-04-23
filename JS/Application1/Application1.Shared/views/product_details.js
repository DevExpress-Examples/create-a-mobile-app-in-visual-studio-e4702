Application1.product_details = function (params) {

    var viewModel = {
        product: new Application1.ProductViewModel(),
        viewShown: function () {
            Application1.db.Products.byKey(params.id).done(function(data) {
                viewModel.product.fromJS(data);
            });
        }

    };

    return viewModel;
};