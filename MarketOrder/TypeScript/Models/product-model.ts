class ProductViewModel {

    constructor(id: number, name: string, price: number) {
        this.Id = ko.observable<number>(id);
        this.Name = ko.observable<string>(name);
        this.Price = ko.observable<number>(price);
    }

    public Id: KnockoutObservable<number>;
    public Name: KnockoutObservable<string>;
    public Price: KnockoutObservable<number>;
}