using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Fop;
using Fop.FopExpression;
using Microsoft.AspNetCore.Mvc;
using WebNongNghiep.Client.InterfaceService;
using WebNongNghiep.Client.ModelView.ProductView;
using WebNongNghiep.Helper;

namespace WebNongNghiep.Client.Controllers
{
    [Route("/api/categories")]
    public class ClientCategoryController : Controller
    {
        private IClientCategoryServices _categoryServices;
        public ClientCategoryController(IClientCategoryServices categoryServices)
        {
            _categoryServices = categoryServices;
        }
        [HttpGet()]
        public async Task<IActionResult> GetListCategories()
        {
            var listCategories = await _categoryServices.GetListCategories();
            if (listCategories == null)
            {
                return new BadRequestObjectResult(new { Message = "Không tìm thấy loại sản phẩm" });
            }
            return Ok(listCategories);
        }    
        [HttpGet("getproductsbycateid/{cateId}")]
        public async Task<IActionResult> GetProductsByCateId(int cateId, [FromQuery] FopQuery request)
        {
            var fopRequest = FopExpressionBuilder<Cl_ProductForList>.Build(request.Filter, request.Order, request.PageNumber, request.PageSize);
            var (listProductsByCateId, totalCount) = await _categoryServices.GetProductsByCateId(cateId, fopRequest);
            var response = new PagedResult<IEnumerable<Cl_ProductForList>>((listProductsByCateId), totalCount, request.PageNumber, request.PageSize); ;
            return Ok(response);

        }
    }
}
