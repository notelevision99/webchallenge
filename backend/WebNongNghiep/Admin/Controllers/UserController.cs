using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using WebNongNghiep.InterfaceService;

namespace WebNongNghiep.Admin.Controllers
{
    [Route("/admin/api/auth")]
    [Authorize(AuthenticationSchemes = CookieAuthenticationDefaults.AuthenticationScheme)]
    [Authorize(Roles = "Admin")]

    public class UserController : Controller
    {
        private readonly UserManager<IdentityUser> userManager;
        private readonly IAuthServices _authServices;
        public UserController(IAuthServices authServices, UserManager<IdentityUser> userManager)
        {
            _authServices = authServices;
            this.userManager = userManager;
        }
        [HttpGet]
        public async Task<IActionResult> GetListAdmin()
        {
            try
            {
                var listAdminsReturn = await _authServices.GetListAdmins();
                if (listAdminsReturn == null)
                {
                    return NotFound();
                }
                return Ok(listAdminsReturn);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message.ToString());
            }

        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(string id)
        {
            if(id == null)
            {
                return new BadRequestObjectResult(new { Message = "Không tìm thấy sản phẩm" });
            }
            var resultDelete = await _authServices.DeleteUser(id);
            if(resultDelete == null)
            {
                return new BadRequestObjectResult(new { Message = "Xoá không thành công" });
            }
            return Ok(new { Message = "Xóa thành công" });
        }
    }
}
