export interface BaseVM {
    Product: KnockoutObservable<any>;
    Products: KnockoutObservableArray<any>;
    Orders: KnockoutObservableArray<any>;
    Shipments: KnockoutObservableArray<any>;
}