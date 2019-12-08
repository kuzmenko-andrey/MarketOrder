var AppViewModel = AppViewModel || {};

(function () {
    var self = this;

    self.ProductVM = function (model) {
        var inner = this;

        inner.item = ko.observable(model);
        inner.price = ko.observable();
        inner.discount = ko.observable(0);
        inner.total = ko.computed(function () {
            var total = 0.0;
            if (typeof (inner.item) != 'undefined' && inner.item() !== undefined) {

                var discount = +inner.discount();
                if (isNaN(discount)) {
                    discount = 0.0;
                }

                inner.price(inner.item().Price);
                total = +inner.price() - discount;
            }
            return total.toFixed(2);
        });
    };

    self.OrderVM = function (name, price) {
        var inner = this;

        inner.name = ko.observable(name);
        inner.price = ko.observable(price);
        inner.count = ko.observable(1);
        inner.total = ko.computed(function () {
            var total = +inner.price() * +inner.count();
            return total.toFixed(2);
        });
    };

    self.ShipmentVM = function (orders) {
        var inner = this;

        inner.items = ko.observableArray([]);
        inner.total = ko.computed(function () {
            var total = 0;
            for (var i = 0; i < inner.items().length; i++) {
                total += +inner.items()[i].total();
            }
            return total;
        });

        inner.items.push.apply(inner.items, orders);
    };

    self.vm = {
        Product: ko.observable({}),
        Products: ko.observableArray([]),
        Orders: ko.observableArray([]),
        Shipments: ko.observableArray([])
    };

    self.getProductsUrl = '/Product/List';
    self.init = function () {
        $.get(self.getProductsUrl, function (response) {
            self.vm.Products.push.apply(self.vm.Products, response.products);
            self.vm.Product(new self.ProductVM(self.vm.Products[0]));
        });
    };

    self.addOrder = function () {
        self.vm.Orders.push(new self.OrderVM(
            self.vm.Product().item().Name,
            self.vm.Product().total()));
    };

    self.removeOrder = function (order) {
        self.vm.Orders.remove(order);
    };

    self.createShipment = function () {
        self.vm.Shipments.push(new self.ShipmentVM(self.vm.Orders()));
    };
}).apply(AppViewModel);

$(document).ready(function () {
    AppViewModel.init();

    ko.applyBindings(AppViewModel.vm);
});