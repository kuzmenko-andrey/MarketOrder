// ///<reference path="BaseViewModel.ts"/>
// ///<reference path="order-model.ts"/>
// ///<reference path="product-model.ts"/>
// ///<reference path="products-model.ts"/>
// ///<reference path="shipment-model.ts"/>
//import { BasicViewModel } from "./BaseViewModel";
//import { JQueryXHR } from "./jquery";

export class MarketOrder {
    constructor() {
        this.vm = new BasicViewModel();
    }

    public vm: BasicViewModel;

    /*vm() {
        return this.viewmodel;
    }*/

    public init(response: any) {
        this.vm.Products.push.apply(this.vm.Products, response.products);
        this.vm.Product(new ProductsModel(this.vm.Products()[0]));
    };

    public addOrder() {
        this.vm.Orders.push(new OrderModel(
            this.vm.Product().Item().Name,
            this.vm.Product().Total()));
    };

    public removeOrder(order: OrderModel) {
        this.vm.Orders.remove(order);
    };

    public createShipment() {
        this.vm.Shipments.push(new ShipmentModel(this.vm.Orders()));
    };
}

    //export declare var getProductsUrl: string;

    /*function Get(url: string, model: any): JQueryXHR {
        return $.get(url, model);
    }*/
