///<reference path="order-model.ts"/>

class ShipmentModel {

    constructor(orders: OrderModel[]) {
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

    public Items: KnockoutObservableArray<OrderModel>;
    public Total: KnockoutComputed<number>;
}