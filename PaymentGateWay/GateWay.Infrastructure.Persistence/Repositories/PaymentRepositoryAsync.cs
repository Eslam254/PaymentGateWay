using GateWay.Application.Interfaces.Repositories;
using GateWay.Domain.Entities;
using GateWay.Infrastructure.Persistence.Contexts;
using GateWay.Infrastructure.Persistence.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GateWay.Infrastructure.Persistence.Repositories
{
    public class PaymentRepositoryAsync : GenericRepositoryAsync<Payment>, IPaymentRepositoryAsync
    {
        public PaymentRepositoryAsync(ApplicationDbContext dbContext) : base(dbContext)
        {
        }
    }
}
