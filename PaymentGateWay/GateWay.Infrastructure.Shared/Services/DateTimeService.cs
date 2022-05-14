using GateWay.Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GateWay.Infrastructure.Shared.Services
{
    public class DateTimeService: IDateTimeService
    {
        public DateTime NowUtc => DateTime.UtcNow;
    }
}
