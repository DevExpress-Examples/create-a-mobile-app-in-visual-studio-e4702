
(function() {
    Application1.ProductViewModel = function(data) {
            this.ProductID = ko.observable();
            this.ProductName = ko.observable();
            this.SupplierID = ko.observable();
            this.CategoryID = ko.observable();
            this.QuantityPerUnit = ko.observable();
            this.UnitPrice = ko.observable();
            this.UnitsInStock = ko.observable();
            this.UnitsOnOrder = ko.observable();
            this.ReorderLevel = ko.observable();
            this.Discontinued = ko.observable();
            if(data)
                this.fromJS(data);
    };

    $.extend(Application1.ProductViewModel.prototype, {
        toJS: function() {
            return {
                ProductID: this.ProductID(),
                ProductName: this.ProductName(),
                SupplierID: this.SupplierID(),
                CategoryID: this.CategoryID(),
                QuantityPerUnit: this.QuantityPerUnit(),
                UnitPrice: String(this.UnitPrice() || 0),
                UnitsInStock: this.UnitsInStock(),
                UnitsOnOrder: this.UnitsOnOrder(),
                ReorderLevel: this.ReorderLevel(),
                Discontinued: this.Discontinued(),
            };
        },

        fromJS: function(data) {
            if(data) {
                this.ProductID(data.ProductID);
                this.ProductName(data.ProductName);
                this.SupplierID(data.SupplierID);
                this.CategoryID(data.CategoryID);
                this.QuantityPerUnit(data.QuantityPerUnit);
                this.UnitPrice(Number(data.UnitPrice));
                this.UnitsInStock(data.UnitsInStock);
                this.UnitsOnOrder(data.UnitsOnOrder);
                this.ReorderLevel(data.ReorderLevel);
                this.Discontinued(data.Discontinued);
            }
        }
    });
})();