using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebNongNghiep.Models;

namespace WebNongNghiep.InterfaceService
{
    public interface IPhotoService
    {
        Task<string>  AddPhotoForProduct(int productId, PhotoForCreation photoDto);
        Task<bool> SaveAll();
        Task<PhotoForReturn> GetPhoto(int id);
        Task<string> DeletePhoto(int id);
    }
}
