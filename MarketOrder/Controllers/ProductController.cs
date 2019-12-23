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
            return View(this.productService.Get());
        }

        [HttpGet]
        public ActionResult List()
        {
            var items = this.productService.Get();
            return Json(new { products = items }, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        //[Route("Product/{id:int}")]
        public ActionResult Item(int id)
        {
            var item = this.productService.Get(id);
            return Json(new { product = item }, JsonRequestBehavior.AllowGet);
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