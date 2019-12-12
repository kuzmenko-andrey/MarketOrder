var OrderModel = /** @class */ (function () {
    function OrderModel(name, price) {
        this.Name = ko.observable(name);
        this.Price = ko.observable(price);
        this.Count = ko.observable(1);
        this.Total = ko.computed(function () {
            var total = +this.Price() * +this.Count();
            return +total.toFixed(2);
        });
    }
    return OrderModel;
}());
//# sourceMappingURL=order-model.js.map