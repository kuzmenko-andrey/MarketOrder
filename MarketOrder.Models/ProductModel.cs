using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MarketOrder.Models
{

    /*public class ProductViewModel
    {
        private readonly List<ProductView> _products;

        [Display(Name = "Product name")]
        public int SelectedProductId { get; set; }

        public IEnumerable<SelectListItem> FlavorItems {
            get { return new SelectList(_products, "Id", "Name"); }
        }
    }*/

    public class ProductModel
    {
        public IEnumerable<ProductView> Products { get; set; }
        public ProductView Product { get; set; }
        public decimal Total { get; set; }
    }
}
