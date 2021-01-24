using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebNongNghiep.Client.ModelView.OrderView;

namespace WebNongNghiep.Client.InterfaceService
{
    public interface IClientOrderServices
    {
        Task<int> CreateOrder(Cl_OrderForCreation orderView);
        //Task<int> GetOrdersByCusId(string id);
       
        
    }
}
