"use strict";
// ///<reference path="BaseViewModel.ts"/>
// ///<reference path="order-model.ts"/>
// ///<reference path="product-model.ts"/>
// ///<reference path="products-model.ts"/>
// ///<reference path="shipment-model.ts"/>
//import { BasicViewModel } from "./BaseViewModel";
//import { JQueryXHR } from "./jquery";
Object.defineProperty(exports, "__esModule", { value: true });
var MarketOrder = /** @class */ (function () {
    function MarketOrder() {
        this.vm = new BasicViewModel();
    }
    MarketOrder.prototype.init = function (response) {
        this.vm.Products.push.apply(this.vm.Products, response);
        this.vm.Product(new ProductsModel(this.vm.Products()[0]));
    };
    ;
    MarketOrder.prototype.addOrder = function () {
        this.vm.Orders.push(new OrderModel(this.vm.Product().Item().Name, this.vm.Product().Total()));
    };
    ;
    MarketOrder.prototype.removeOrder = function (order) {
        this.vm.Orders.remove(order);
    };
    ;
    MarketOrder.prototype.createShipment = function () {
        this.vm.Shipments.push(new ShipmentModel(this.vm.Orders()));
        this.vm.Orders([]);
    };
    ;
    return MarketOrder;
}());
exports.MarketOrder = MarketOrder;
//export declare var getProductsUrl: string;
/*function Get(url: string, model: any): JQueryXHR {
    return $.get(url, model);
}*/
//# sourceMappingURL=MarketOrder.js.map