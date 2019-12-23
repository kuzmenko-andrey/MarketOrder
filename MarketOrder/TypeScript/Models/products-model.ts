///<reference path="product-model.ts"/>

class ProductsViewModel {

    constructor(product: ProductViewModel) {
        this.Item = ko.observable<ProductViewModel>(product);
        this.Price = ko.observable<number>(0);
        this.Discount = ko.observable<number>(0);
        this.Total = ko.computed({
            owner: this,
            read: function () {
                var total = 0.0;
                if (typeof (this.Item) != 'undefined' && this.Item() !== undefined) {

                    var discount = +this.Discount();
                    if (isNaN(discount)) {
                        discount = 0.0;
                    }

                    this.Price(this.Item().Price);
                    total = +this.Price() - discount;
                }
                return +total.toFixed(2);
            }
        });
    }

    public Item: KnockoutObservable<ProductViewModel>;
    public Price: KnockoutObservable<number>;
    public Discount: KnockoutObservable<number>;
    public Total: KnockoutComputed<number>;
}