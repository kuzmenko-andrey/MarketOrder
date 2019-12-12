///<reference path="product-model.ts"/>
var ProductsModel = /** @class */ (function () {
    function ProductsModel(product) {
        this.Item = ko.observable(product);
        this.Price = ko.observable(0);
        this.Discount = ko.observable(0);
        this.Total = ko.computed({
            owner: this,
            read: function () {
                var total = 0.0;
                if (typeof (this.Item) != 'undefined' && this.Item() !== undefined) {
                    var discount = +this.Discount();
                    if (isNaN(discount)) {
                        discount = 0.0;
                    }
                    this.Price(this.Item().Price);
                    total = +this.Price() - discount;
                }
                return +total.toFixed(2);
            }
        });
    }
    return ProductsModel;
}());
//# sourceMappingURL=products-model.js.map