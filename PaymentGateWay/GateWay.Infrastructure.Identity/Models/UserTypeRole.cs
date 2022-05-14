using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GateWay.Infrastructure.Identity.Models
{
    public class UserTypeRole : IdentityRole<string>
    {
        public int CompanyId { get; set; }
    }
    
}
