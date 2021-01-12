using Fop;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebNongNghiep.Client.InterfaceService;
using WebNongNghiep.Client.ModelView.CategoryView;
using WebNongNghiep.Client.ModelView.ProductView;
using WebNongNghiep.Database;

namespace WebNongNghiep.Client.Services
{
    public class ClientCategoryServices : IClientCategoryServices
    {
        private MasterData _db;
        public ClientCategoryServices(MasterData db)
        {
            _db = db;
        }
        public async Task<IEnumerable<Cl_CategoryToReturn>> GetListCategories()
        {
            var listCategories = _db.Categories.Select(p => new Cl_CategoryToReturn
            {
                CategoryId = p.CategoryId,
                CategoryName = p.CategoryName
            });
            return await listCategories.ToListAsync();
        }

        public async Task<(IEnumerable<Cl_ProductForList>, int)> GetProductsByCateId(int cateId,IFopRequest request)
        {
            var totalCountProduct = _db.Products.Where(p => p.CategoryId == cateId).Count();
            var (listProductsByCateId, totalCount) = _db.Products.Include(p => p.Category)
                                         .Where(p => p.CategoryId == cateId)
                                         .Select(p => new Cl_ProductForList
                                         {
                                             Id = p.Id,
                                             ProductName = p.ProductName,
                                             CategoryId = p.CategoryId,
                                             CategoryName = p.Category.CategoryName,
                                             Price = (int)p.Price,
                                             PhotoUrl = p.Photos.First().Url,
                                             TotalCount = totalCountProduct
                                         }).ApplyFop(request);
            return (await listProductsByCateId.ToListAsync(), totalCount);
        }
        
    }
}
