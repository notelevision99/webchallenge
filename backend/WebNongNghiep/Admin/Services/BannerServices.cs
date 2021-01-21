using CloudinaryDotNet;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebNongNghiep.Admin.InterfaceService;
using WebNongNghiep.Admin.ModelView.BannerView;
using WebNongNghiep.Database;
using WebNongNghiep.Helper;

namespace WebNongNghiep.Admin.Services
{
    public class BannerServices 
    {
        private readonly IOptions<CloudinarySettings> _cloudinaryConfig;
        private Cloudinary _cloudinary;
        private readonly MasterData _db;

        public BannerServices(IOptions<CloudinarySettings> cloudinaryConfig, MasterData db)
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
        //public async Task<string> UploadBanner(int orderId, BannerToUpLoad bannerPhoto)
        //{
            
            
        //}
    }
}
