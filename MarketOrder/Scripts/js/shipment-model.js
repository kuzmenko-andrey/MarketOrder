///<reference path="order-model.ts"/>
var ShipmentModel = /** @class */ (function () {
    function ShipmentModel(orders) {
        this.Items = ko.observableArray();
        this.Total = ko.computed({
            owner: this,
            read: function () {
                var total = 0;
                for (var i = 0; i < this.Items().length; i++) {
                    total += +this.Items()[i].Total();
                }
                return total;
            }
        });
        this.Items.push.apply(this.Items, orders);
    }
    return ShipmentModel;
}());
//# sourceMappingURL=shipment-model.js.map