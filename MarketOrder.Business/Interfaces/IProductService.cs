using MarketOrder.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MarketOrder.Business.Interfaces
{
    public interface IProductService
    {
        IEnumerable<ProductView> Get();
        ProductView Get(int id);

        Task<IEnumerable<ProductView>> GetAsync();
        Task<ProductView> GetAsync(int id);
    }
}
