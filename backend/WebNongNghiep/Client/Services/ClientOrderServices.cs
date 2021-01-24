using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebNongNghiep.Client.InterfaceService;
using WebNongNghiep.Client.ModelView.OrderView;
using WebNongNghiep.Database;

namespace WebNongNghiep.Client.Services
{
    public class ClientOrderServices : IClientOrderServices
    {
        MasterData _db;
        public ClientOrderServices(MasterData db)
        {
            _db = db;
        }
        public async Task<int> CreateOrder(Cl_OrderForCreation orderView)
        {
            if (orderView == null)
            {
                return 0;
            }

            var order = new Order
            {
                DateOrder = orderView.DateOrder,
                ShipAddress = orderView.ShipAddress,
                ShipCity = orderView.ShipCity,
                ShipProvince = orderView.ShipProvince,
                UserId = orderView.UserId,
            };
            _db.Orders.Add(order);
            await _db.SaveChangesAsync();

            foreach (Cl_ItemToCreation item in orderView.Items)
            {
                OrderDetail orderDetail = new OrderDetail
                {
                    OrderId = order.OrderId,
                    ProductId = item.ProductId,
                    Quantity = item.Quantity
                };
                _db.OrderDetails.Add(orderDetail);
                await _db.SaveChangesAsync();
            }
            return 1;


        }

        //public Task<int> GetOrdersByCusId(string id)
        //{

        //}
       

    }
}
