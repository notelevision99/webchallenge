using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Fop;
using Fop.FopExpression;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebNongNghiep.Helper;
using WebNongNghiep.InterfaceService;
using WebNongNghiep.ModelView;
using WebNongNghiep.ModelView.CategoryView;
using static System.Net.WebRequestMethods;

namespace WebNongNghiep.Controllers
{
    [Route("/admin/api/categories")]
    [Authorize(AuthenticationSchemes = CookieAuthenticationDefaults.AuthenticationScheme)]
    [Authorize(Roles = "Admin")]
    [ApiController]
    public class CategoriesController : Controller
    {
        private readonly ICategoryServices _categoryServices;
        public CategoriesController(ICategoryServices categoryServices)
        {
            _categoryServices = categoryServices;
        }
        [HttpPost]
        public async Task<IActionResult> CreateCategory(CategoryForCreation cateDto)
        {
            var category = await _categoryServices.CreateCategory(cateDto);
            if (category == null)
            {
                return BadRequest("Create category failed");
            }
            return Ok(category);
        }
        [HttpGet]
        public async Task<IActionResult> GetListCategories()
        {
            var listCategories = await _categoryServices.GetListCategories();
            return Ok(listCategories);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCategoryById(int id)
        {
            var category = await _categoryServices.GetCategoryById(id);
            return Ok(category);
        }

        [HttpGet("getproductsbycateid/{cateId}")]
        public async Task<IActionResult> GetListProductByCateId(int cateId, [FromQuery] FopQuery request)
        {
            var fopRequest = FopExpressionBuilder<ProductForList>.Build(request.Filter, request.Order, request.PageNumber, request.PageSize);
            var (listProductsByCateId, totalCount) = await _categoryServices.GetListProductsByCateId(cateId, fopRequest);
            var response = new PagedResult<IEnumerable<ProductForList>>((listProductsByCateId), totalCount, request.PageNumber, request.PageSize); ;
            return Ok(response);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCategory(int id, CategoryForCreation cateDto)
        {
            var categoryToUpdate = await _categoryServices.UpdateCategory(id,cateDto);
            return Ok(categoryToUpdate);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCategory(int id)
        {
            var categoryToUpdate = await _categoryServices.DeleteCategory(id);
            if(categoryToUpdate != null)
            {
                return Ok("Xóa thành công");
            }
            return BadRequest("Failed to delete category");
        }

    }
}
