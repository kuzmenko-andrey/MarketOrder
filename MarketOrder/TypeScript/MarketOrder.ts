//import { BaseVM } from "./BaseViewModel";

module MarketOrder {
    export class vmm { //implements BaseVM {
        constructor() {
            this.Product = ko.observable();
            this.Products = ko.observableArray();
            this.Orders = ko.observableArray();
            this.Shipments = ko.observableArray();
        }

        public Product: KnockoutObservable<any>;
        public Products: KnockoutObservableArray<any>;
        public Orders: KnockoutObservableArray<any>;
        public Shipments: KnockoutObservableArray<any>;


    }


    //export default class vm;
    declare var vm: vmm;

    export declare var getProductsUrl: string;

    /*function Get(url: string, model: any): JQueryXHR {
        return $.get(url, model);
    }*/

    /*export function init() {
        $.get(getProductsUrl, function (response) {
            vm.Products.push.apply(vm.Products, response.products);
            vm.Product(new ProductsModel(vm.Products()[0]));
        });
    };*/

    export function init(response: any) {
        vm = new vmm();
        vm.Products.push.apply(this.vm.Products, response.products);
        vm.Product(new ProductsModel(this.vm.Products()[0]));
    };

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
}