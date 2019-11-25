using System.Collections.Generic;

namespace MarketOrder.Models
{
    public class OrderView
    {
        public int Id { get; set; }
        public List<ProductView> Products { get; set; }
        public int Count { get; set; }
        public float Total { get; set; } 
    }
}
