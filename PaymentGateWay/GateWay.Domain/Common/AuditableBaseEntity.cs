using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GateWay.Domain.Common
{
    public abstract class AuditableBaseEntity
    {
        public virtual int Id { get; set; }
        public string CreatedBy { get; set; } = "eslam";
        public DateTime Created { get; set; } = DateTime.Now;
        public string LastModifiedBy { get; set; } = "eslam";
        public DateTime? LastModified { get; set; } = DateTime.Now;
    }
}
