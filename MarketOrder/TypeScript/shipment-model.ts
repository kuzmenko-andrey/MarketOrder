///<reference path="order-model.ts"/>

class ShipmentModel {

    constructor(orders: OrderModel[]) {
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

    public Items: KnockoutObservableArray<OrderModel>;
    public Total: KnockoutComputed<number>;
}