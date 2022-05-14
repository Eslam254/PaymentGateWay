using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GateWay.Application.DTOs.PaymentDto
{
    public class PaymentResponse
    {
        public int ApprovalCode { get; set; }
        public DateTime Date { get; set; } 
    }
}
