using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebNongNghiep.Database
{
    public class User : IdentityUser
    {
        public string Address { get; set; }    
    }
}
