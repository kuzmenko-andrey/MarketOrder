var OrderViewModel = /** @class */ (function () {
    function OrderViewModel(name, price) {
        this.Name = ko.observable(name);
        this.Price = ko.observable(price);
        this.Count = ko.observable(1);
        this.Total = ko.computed({
            owner: this,
            read: function () {
                var total = +this.Price() * +this.Count();
                return +total.toFixed(2);
            }
        });
    }
    return OrderViewModel;
}());
//# sourceMappingURL=order-model.js.map