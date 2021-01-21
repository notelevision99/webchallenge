using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

using WebNongNghiep.Client.InterfaceService;
using WebNongNghiep.Client.ModelView;
using WebNongNghiep.Database;
using WebNongNghiep.ModelView.UserView;

namespace WebNongNghiep.Client.Controllers
{
    [Route("/api/auth")]
    public class ClientAuthController : Controller
    {
        private readonly UserManager<User> userManager;
        private readonly IClientAuthServices _authServices;
        public ClientAuthController(IClientAuthServices authServices, UserManager<User> userManager)
        {
            _authServices = authServices;
            this.userManager = userManager;
        }
        [HttpPost]
        [Route("Register")]
        public async Task<IActionResult> Register([FromBody] Cl_UserDetails userDetails)
        {
            try
            {
                if (userDetails == null || userDetails.UserName == null
                || userDetails.Email == null || userDetails.Password == null)
                {
                    return new BadRequestObjectResult(new { Message = "Đăng kí thất bại" });
                }
                var registerUser = await _authServices.Register(userDetails);
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                var user = new Cl_UserDetails
                {
                    UserName = registerUser.UserName,
                    Email = registerUser.Email,
                    Message = registerUser.Message
                };
                return Ok(user);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message.ToString());
            }

        }

        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login([FromBody] LoginCredentials credentials)
        {
            try
            {

                if (!ModelState.IsValid || credentials == null)
                {
                    return new BadRequestObjectResult(new { Message = "Vui lòng nhập tên tài khoản và mật khẩu" });
                }

                var identityUser = await userManager.FindByNameAsync(credentials.UserName);
                if (identityUser == null)
                {
                    return new BadRequestObjectResult(new { Message = "Sai tên tài khoản" });
                }

                var result = userManager.PasswordHasher.VerifyHashedPassword(identityUser, identityUser.PasswordHash, credentials.Password);

                if (result == PasswordVerificationResult.Failed)
                {
                    return new BadRequestObjectResult(new { Message = "Sai mật khẩu" });
                }

                var roles = await userManager.GetRolesAsync(identityUser);
                if (roles[0] != "User")
                {
                    return new BadRequestObjectResult(new { Message = "Đăng nhập thất bại" });
                }


                var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.Email, identityUser.Email),
                    new Claim(ClaimTypes.Name, identityUser.UserName)
                };

                var claimsIdentity = new ClaimsIdentity(
                    claims, CookieAuthenticationDefaults.AuthenticationScheme);
                await HttpContext.SignInAsync(
                   CookieAuthenticationDefaults.AuthenticationScheme,
                   new ClaimsPrincipal(claimsIdentity));

                var userToReturn = new Cl_UserToReturn
                {
                    UserName = identityUser.UserName,
                    Roles = roles[0],
                    Message = "Đăng nhập thành công"
                };
                return Ok(userToReturn);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message.ToString());
            }

        }

        [HttpGet]
        public async Task<IActionResult> GetListUser()
        {
            try
            {
                var listAdminsReturn = await _authServices.GetListUsers();
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

        [HttpPost]
        [Route("Logout")]
        public async Task<IActionResult> Logout()
        {
            try
            {
                await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
                return Ok(new { Message = "Bạn đã đăng xuất" });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message.ToString());
            }

        }

    }
}
