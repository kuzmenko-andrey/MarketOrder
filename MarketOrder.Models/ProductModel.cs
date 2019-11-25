using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MarketOrder.Models
{
    public class ProductModel
    {
        public IEnumerable<ProductView> Products { get; set; }
        public ProductView Product { get; set; }
        public decimal Total { get; set; }
    }
}
