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
        this.viewmodel = new BasicViewModel();
    }
    MarketOrder.prototype.vm = function () {
        return this.viewmodel;
    };
    MarketOrder.prototype.init = function (response) {
        this.viewmodel.Products.push.apply(this.viewmodel.Products, response.products);
        this.viewmodel.Product(new ProductsModel(this.viewmodel.Products()[0]));
    };
    ;
    MarketOrder.prototype.addOrder = function () {
        this.viewmodel.Orders.push(new OrderModel(this.viewmodel.Product().Item().Name, this.viewmodel.Product().Total()));
    };
    ;
    MarketOrder.prototype.removeOrder = function (order) {
        this.viewmodel.Orders.remove(order);
    };
    ;
    MarketOrder.prototype.createShipment = function () {
        this.viewmodel.Shipments.push(new ShipmentModel(this.viewmodel.Orders()));
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