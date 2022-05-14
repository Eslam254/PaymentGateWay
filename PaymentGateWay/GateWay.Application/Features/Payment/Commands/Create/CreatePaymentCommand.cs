using AutoMapper;
using GateWay.Application.DTOs.PaymentDto;
using GateWay.Application.Interfaces.Repositories;
using GateWay.Application.Wrappers;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GateWay.Application.Features.Payment.Commands.Create
{
    public class CreatePaymentCommand : PaymentRequest, IRequest<Response<PaymentResponse>>
    {
    }

    public class CreatePaymentCommandHandler : IRequestHandler<CreatePaymentCommand, Response<PaymentResponse>>
    {
        private readonly IMapper _mapper;
        private readonly IPaymentRepositoryAsync _paymentRepositoryAsync;

        public CreatePaymentCommandHandler(IMapper mapper, IPaymentRepositoryAsync paymentRepositoryAsync)
        {
            _mapper = mapper;
            _paymentRepositoryAsync = paymentRepositoryAsync;
        }

        public async Task<Response<PaymentResponse>> Handle(CreatePaymentCommand request, CancellationToken cancellationToken)
        {
            var payment = _mapper.Map<GateWay.Domain.Entities.Payment>(request);
            await _paymentRepositoryAsync.AddAsync(payment);
            return new Response<PaymentResponse>(new PaymentResponse { ApprovalCode = 2000, Date = DateTime.Now });
        }

    }
}
