using System.ComponentModel.DataAnnotations;

namespace MarketOrder.Models
{
    public class ProductView
    {
        [ScaffoldColumn(false)]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public decimal Price { get; set; }
    }
}
