var MarketOrder = MarketOrder || {};

(function () {
    var self = this;

    self.vm = {
        Product: ko.observable({}),
        Products: ko.observableArray([]),
        Orders: ko.observableArray([]),
        Shipments: ko.observableArray([])
    };

    self.getProductsUrl = '';
    self.init = function () {
        $.get(self.getProductsUrl, function (response) {
            self.vm.Products.push.apply(self.vm.Products, response.products);
            self.vm.Product(new ProductsModel(self.vm.Products()[0]));
        });
    };

    self.addOrder = function () {
        self.vm.Orders.push(new OrderModel(
            self.vm.Product().Item().Name,
            self.vm.Product().Total()));
    };

    self.removeOrder = function (order) {
        self.vm.Orders.remove(order);
    };

    self.createShipment = function () {
        self.vm.Shipments.push(new ShipmentModel(self.vm.Orders()));
    };
}).apply(MarketOrder);