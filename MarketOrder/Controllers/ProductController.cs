using MarketOrder.Business.Interfaces;
using MarketOrder.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MarketOrder.Controllers
{
    public class ProductController : ApiController
    {
        private IProductService productService;

        public ProductController(IProductService productService)
        {
            this.productService = productService;
        }

        public IEnumerable<ProductView> Get()
        {
            return productService.Get();
        }

        public IHttpActionResult Get(int id)
        {
            var product = productService.Get(id);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }
    }
}
