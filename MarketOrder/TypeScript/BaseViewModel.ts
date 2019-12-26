class BasicViewModel {
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