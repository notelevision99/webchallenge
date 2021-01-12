using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebNongNghiep.Database;
using WebNongNghiep.Helper;
using WebNongNghiep.InterfaceService;
using WebNongNghiep.Models;

namespace WebNongNghiep.Services
{
    public class PhotoServices : IPhotoService
    {
        private readonly IOptions<CloudinarySettings> _cloudinaryConfig;
        private Cloudinary _cloudinary;
        private readonly MasterData _db;


        public PhotoServices(IOptions<CloudinarySettings> cloudinaryConfig, MasterData db)
        {
            _db = db;

            _cloudinaryConfig = cloudinaryConfig;

            Account account = new Account(
                _cloudinaryConfig.Value.CloudName,
                _cloudinaryConfig.Value.ApiKey,
                _cloudinaryConfig.Value.ApiSecret
            );

            _cloudinary = new Cloudinary(account);
        }
        public async Task<string> AddPhotoForProduct(int productId, PhotoForCreation photoDto)
        {

            Photo photo;
            var product = await _db                                   //  1.
               .Products
               .Where(u => u.Id == productId)
               .FirstOrDefaultAsync();
            if(photoDto.File != null)
            {
                foreach (var file in photoDto.File)
                {
                    //  2.

                    var uploadResult = new ImageUploadResult();                 //  3.

                    if (file.Length > 0)                                        //  4.
                    {

                        using (var stream = file.OpenReadStream())
                        {
                            var uploadParams = new ImageUploadParams()
                            {
                                File = new FileDescription(file.Name, stream),
                                Transformation = new Transformation()           //  *
                                                .Width(500).Height(500)
                                                .Crop("fill")
                                                .Gravity("face")
                            };

                            uploadResult = _cloudinary.Upload(uploadParams);    //  5.
                        }
                    }
                    photoDto.Url = uploadResult.Uri.ToString();                 //  4. (cont'd)
                    photoDto.PublicId = uploadResult.PublicId;
                    photo = new Photo
                    {
                        Url = photoDto.Url,
                        Description = photoDto.Description,
                        DateAdded = photoDto.DateAdded,
                        PublicId = photoDto.PublicId
                    };
                    product.Photos.Add(photo);
                    await SaveAll();
                }
            }

            

            //return new  PhotoForReturn
            //{
            //    Id = photo.Id,
            //    Url = photo.Url,
            //    Description = photo.Description,
            //    DateAdded = photo.DateAdded,
            //    IsMain = photo.IsMain,
            //    PublicId = photo.PublicId,
            //};
            return "Them thanh cong";
        }

        public async Task<bool> SaveAll()
        {
            return await _db.SaveChangesAsync() > 0;
        }

        
        public async Task<PhotoForReturn> GetPhoto(int id)
        {
            var photo = await _db.Photos.FirstOrDefaultAsync(p => p.Id == id);

            var photoForReturn = new PhotoForReturn
            {
                Id = photo.Id,
                Url = photo.Url,
                Description = photo.Description,
                DateAdded = photo.DateAdded,
                IsMain = photo.IsMain,
                PublicId = photo.PublicId,
            };
            return photoForReturn;
        }
        public async Task<string> DeletePhoto(int id)
        {
            var photo = await _db.Photos.FirstOrDefaultAsync(p => p.Id == id);
             _cloudinary.DeleteResources(photo.PublicId);

            _db.Photos.Remove(photo);
            await _db.SaveChangesAsync();
            return "Xóa thành công";
        }
    }
    
}
