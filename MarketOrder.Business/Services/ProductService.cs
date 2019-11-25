using MarketOrder.Business.Interfaces;
using MarketOrder.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MarketOrder.Business.Services
{
    public class ProductService : IProductService
    {
        List<ProductView> _books = new List<ProductView>()
            {
                new ProductView() { Id = 0, Name = "Car Organizer", Price = 10.99M },
                new ProductView() { Id = 1, Name = "LEGO Speed Champions", Price = 7.99M },
                new ProductView() { Id = 2, Name = "Panasonic HomeHawk Smart Home Security", Price = 99.99M }
            };

        public IEnumerable<ProductView> Get()
        {
            return _books;
        }

        public ProductView Get(int id)
        {
            return _books[id];
        }

        public Task<IEnumerable<ProductView>> GetAsync()
        {
            throw new System.NotImplementedException();
        }

        public Task<ProductView> GetAsync(int id)
        {
            throw new System.NotImplementedException();
        }
    }
}
