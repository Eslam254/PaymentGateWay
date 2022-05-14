using AutoMapper;
using GateWay.Application.Mapping;
using GateWay.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GateWay.Application.DTOs.PaymentDto
{
    public class PaymentRequest : IMapFrom<Payment>
    {
        public int ProcesingCode { get; set; }
        public int SystemTraceNr { get; set; }
        public int FunctionCode { get; set; }
        public long CardNumber { get; set; }
        public string CardHolder { get; set; }
        public decimal AmountTrxn { get; set; }
        public int CurrencyCode { get; set; }
        public void Mapping(Profile profile)
        {
            profile.CreateMap<PaymentRequest, Payment>();
        }
    }
}
