using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebNongNghiep.InterfaceService;
using WebNongNghiep.Models;

namespace WebNongNghiep.Controllers
{
    
    [Route("/admin/api/products/{productId}/photos/")]
    //[Authorize(AuthenticationSchemes = CookieAuthenticationDefaults.AuthenticationScheme)]
    [Authorize(AuthenticationSchemes = CookieAuthenticationDefaults.AuthenticationScheme)]
    [Authorize(Roles = "Admin")]
    public class PhotosController : Controller
    {
       
        private readonly IPhotoService _photoService;
        private readonly IProductServices _productServices;

        public PhotosController(IPhotoService photoService, IProductServices productServices)
        {
            _productServices = productServices;
            _photoService = photoService;
        }

        [HttpPost]
        
        public async Task<IActionResult> AddPhotoForProduct(int productId, PhotoForCreation photoDto)
        {
            var product = await  _productServices.GetProductForUpdate(productId);

            if (product == null)
                return BadRequest("Could not find user");




            var photoForReturn = await _photoService.AddPhotoForProduct(productId, photoDto);
            if (photoForReturn == null)
                return BadRequest("Photo upload failed.");

            return Ok(photoForReturn) ; 
        }

        [HttpGet("{id}")]
        public IActionResult GetPhoto(int id)
        {
            var photo = _photoService.GetPhoto(id);

            return Ok(photo);
        }
        [HttpDelete("{id}")]
      
        public async Task<IActionResult> DeletePhoto(int id)
        
        {
            var photoToDelete = await _photoService.DeletePhoto(id);
            if(photoToDelete == null)
            {
                return BadRequest("Xóa thất bại");
            }
            return Ok();
        }
    }
}
