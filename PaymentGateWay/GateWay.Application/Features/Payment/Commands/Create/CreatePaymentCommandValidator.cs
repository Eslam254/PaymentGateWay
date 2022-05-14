using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GateWay.Application.Features.Payment.Commands.Create
{
    public class CreatePaymentCommandValidator : AbstractValidator<CreatePaymentCommand>
    {
        public CreatePaymentCommandValidator()
        {

            RuleFor(p => p.ProcesingCode)
                .NotEmpty()
                .WithMessage("{PropertyName} is required.");


            RuleFor(p => p.SystemTraceNr)
                .NotEmpty()
                .WithMessage("{PropertyName} is required.");


            RuleFor(p => p.FunctionCode)
                .NotEmpty()
                .WithMessage("{PropertyName} is required.");

            RuleFor(p => p.CardNumber)
                .NotEmpty()
                .WithMessage("{PropertyName} is required.");

            RuleFor(p => p.CardHolder)
                .NotEmpty()
                .WithMessage("{PropertyName} is required.");

            RuleFor(p => p.AmountTrxn)
                .NotEmpty()
                .WithMessage("{PropertyName} is required.");

            RuleFor(p => p.CurrencyCode)
                .NotEmpty()
                .WithMessage("{PropertyName} is required.");
        }
    }
}
