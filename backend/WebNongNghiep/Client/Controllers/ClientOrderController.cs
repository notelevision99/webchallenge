using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebNongNghiep.Client.InterfaceService;
using WebNongNghiep.Client.ModelView.OrderView;

namespace WebNongNghiep.Client.Controllers
{
    [Route("/api/orders")]
    [ApiController]
    public class ClientOrderController : Controller
    {
        private readonly IClientOrderServices _orderServices;
        public ClientOrderController(IClientOrderServices orderServices)
        {
            _orderServices = orderServices;
        }   
        [HttpPost]
        public async Task<IActionResult> CreateOrder(Cl_OrderForCreation orderView)      
        {
            try
            {
                var result = await _orderServices.CreateOrder(orderView);
                if (result == 0)
                {
                    return new BadRequestObjectResult(new { Message = "Không tìm thấy thông tin nhập vào. Vui lòng kiểm tra lại" });
                }
                if (result == -1)
                {
                    return new BadRequestObjectResult(new { Message = "Không tìm thấy sản phẩm trong đơn hàng. Vui lòng kiểm tra lại" });
                }
                return Ok(new { Message = "Đặt hàng thành công!" });
            }
            catch (Exception ex)
            {
                return new BadRequestObjectResult(new { Message = ex.Message.ToString()});

            }
        }
      
    }
}
