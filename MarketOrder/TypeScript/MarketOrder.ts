// ///<reference path="BaseViewModel.ts"/>
// ///<reference path="order-model.ts"/>
// ///<reference path="product-model.ts"/>
// ///<reference path="products-model.ts"/>
// ///<reference path="shipment-model.ts"/>
//import { BasicViewModel } from "./BaseViewModel";
//import { JQueryXHR } from "./jquery";

export class MarketOrder {
    constructor() {
        this.viewmodel = new BasicViewModel();
    }

    public viewmodel: BasicViewModel;

    vm() {
        return this.viewmodel;
    }

    init(response: any) {
        this.viewmodel.Products.push.apply(this.viewmodel.Products, response.products);
        this.viewmodel.Product(new ProductsModel(this.viewmodel.Products()[0]));
    };

    addOrder() {
        this.viewmodel.Orders.push(new OrderModel(
            this.viewmodel.Product().Item().Name,
            this.viewmodel.Product().Total()));
    };

    removeOrder(order: OrderModel) {
        this.viewmodel.Orders.remove(order);
    };

    createShipment() {
        this.viewmodel.Shipments.push(new ShipmentModel(this.viewmodel.Orders()));
    };
}


    //export declare var getProductsUrl: string;

    /*function Get(url: string, model: any): JQueryXHR {
        return $.get(url, model);
    }*/
