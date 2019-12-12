///<reference path="order-model.ts"/>
var ShipmentModel = /** @class */ (function () {
    function ShipmentModel(orders) {
        this.Items = ko.observableArray();
        this.Total = ko.computed(function () {
            var total = 0;
            for (var i = 0; i < this.Items().length; i++) {
                total += +this.Items()[i].total();
            }
            return total;
        });
        //inner.items.push.apply(inner.items, orders);
    }
    return ShipmentModel;
}());
//# sourceMappingURL=shipment-model.js.map