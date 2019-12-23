using MarketOrder.Business.Interfaces;
using MarketOrder.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
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
            using (var conn = new SqlConnection("Database=MarketOrder;Server=EMS-Agent;User Id=sa;Password=Password1;"))
            using (var command = new SqlCommand("dbo.GetProducts", conn))
            {
                conn.Open();
                command.CommandType = CommandType.StoredProcedure;
                using (SqlDataReader reader = command.ExecuteReader())
                {
                    List<ProductView> list = new List<ProductView>();
                    while (reader.Read())
                    {
                        list.Add(new ProductView() {
                            Id = Convert.ToInt32(reader["Id"]),
                            Name = reader["Name"].ToString(),
                            Price = Convert.ToDecimal(reader["Price"]),
                        });
                    }
                }
            }

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
