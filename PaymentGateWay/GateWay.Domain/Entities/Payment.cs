using GateWay.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GateWay.Domain.Entities
{
    public class Payment : AuditableBaseEntity
    {
        public int ProcesingCode { get; set; }
        public int SystemTraceNr { get; set; }
        public int FunctionCode { get; set; }
        public long CardNumber { get; set; }
        public string CardHolder { get; set; }
        public decimal AmountTrxn { get; set; }
        public int CurrencyCode { get; set; }
    }
}
