using MarketOrder.Business.Interfaces;
using MarketOrder.Business.Services;
using System.Web.Mvc;
using Unity;
using Unity.Mvc5;

namespace MarketOrder
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
			var container = new UnityContainer();

            // register all your components with the container here
            // it is NOT necessary to register your controllers

            container.RegisterType<IProductService, ProductService>();

            DependencyResolver.SetResolver(new UnityDependencyResolver(container));
        }
    }
}