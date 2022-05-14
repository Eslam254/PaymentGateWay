using GateWay.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GateWay.Infrastructure.Persistence.Configuration
{
    public class PaymentConfiguration : IEntityTypeConfiguration<Payment>
    {
        public void Configure(EntityTypeBuilder<Payment> builder)
        {
            builder.Property(p => p.CardHolder)
                 .HasMaxLength(200)
                 .IsRequired();
            builder.Property(p => p.ProcesingCode).IsRequired();
            builder.Property(p => p.SystemTraceNr).IsRequired();
            builder.Property(p => p.FunctionCode).IsRequired();
            builder.Property(p => p.CardNumber).IsRequired();
            builder.Property(p => p.AmountTrxn).IsRequired();
            builder.Property(p => p.CurrencyCode).IsRequired();
            builder.Property(p => p.CardHolder).IsRequired();
        }
    }
}
