//import { BaseVM } from "./BaseViewModel";
var MarketOrder;
(function (MarketOrder) {
    var vmm = /** @class */ (function () {
        function vmm() {
            this.Product = ko.observable();
            this.Products = ko.observableArray();
            this.Orders = ko.observableArray();
            this.Shipments = ko.observableArray();
        }
        return vmm;
    }());
    MarketOrder.vmm = vmm;
    /*function Get(url: string, model: any): JQueryXHR {
        return $.get(url, model);
    }*/
    /*export function init() {
        $.get(getProductsUrl, function (response) {
            vm.Products.push.apply(vm.Products, response.products);
            vm.Product(new ProductsModel(vm.Products()[0]));
        });
    };*/
    function init(response) {
        vm = new vmm();
        vm.Products.push.apply(this.vm.Products, response.products);
        vm.Product(new ProductsModel(this.vm.Products()[0]));
    }
    MarketOrder.init = init;
    ;
    /*export function addOrder() {
        vm.Orders.push(new OrderModel(
            vm.Product().Item().Name,
            vm.Product().Total()));
    }*/
    /*export function removeOrder(order: OrderModel) {
        vm.Orders.remove(order);
    }*/
    /*export function createShipment() {
        vm.Shipments.push(new ShipmentModel(vm.Orders()));
    }*/
})(MarketOrder || (MarketOrder = {}));
//# sourceMappingURL=MarketOrder.js.map