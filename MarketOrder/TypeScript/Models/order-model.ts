class OrderViewModel {

    constructor(name: string, price: number) {
        this.Name = ko.observable(name);
        this.Price = ko.observable(price);
        this.Count = ko.observable(1);
        this.Total = ko.computed({
            owner: this,
            read: function () {
                var total = +this.Price() * +this.Count();
                return +total.toFixed(2);
            }
        });
    }

    public Name: KnockoutObservable<string>;
    public Price: KnockoutObservable<number>;
    public Count: KnockoutObservable<number>;
    public Total: KnockoutComputed<number>;
}