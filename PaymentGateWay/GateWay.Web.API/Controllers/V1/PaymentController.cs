using GateWay.Application.Features.Payment.Commands.Create;
using GateWay.WebApi.Controllers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GateWay.Web.API.Controllers.V1
{
    [ApiVersion("1.0")]
    [EnableCors("Policy")]
    public class PaymentController : BaseApiController
    {

        [HttpPost]
        //[Authorize]
        public async Task<IActionResult> Post(CreatePaymentCommand command)
        {
            return Ok(await Mediator.Send(command));
        }
    }
}
