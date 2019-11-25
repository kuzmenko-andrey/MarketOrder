using MarketOrder.Business.Interfaces;
using MarketOrder.Models;
using System.Web.Mvc;

namespace MarketOrder.Controllers
{
    public class ProductController : Controller
    {
        private IProductService productService;
        public ProductController(IProductService productService)
        {
            this.productService = productService;
        }
        public ActionResult Index()
        {
            var items = this.productService.Get();
            return View(new ProductModel() { Products = items });
        }

        [HttpGet]
        public ActionResult List()
        {
            var items = this.productService.Get();
            return View(new ProductModel() { Products = items });
        }

        [HttpGet]
        //[Route("Product/{id:int}")]
        public ActionResult Item(int id)
        {
            var item = this.productService.Get(id);
            return Json(new { data = item }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Add()
        {
            string total = this.Request["total"];
            string product = this.Request["product"];
            return View();
        }
    }
}