using FluentValidation;
using GateWay.Application.Behaviours;
using GateWay.Application.Interfaces;
using MediatR;
using Microsoft.Extensions.DependencyInjection;
using System.Reflection;
//using Microsoft.AspNetCore.DataProtection;


namespace GateWay.Application
{
    public static class DependencyInjection
    {
        public static void AddApplicationLayer(this IServiceCollection services)
        {
            services.AddAutoMapper(Assembly.GetExecutingAssembly());
            services.AddValidatorsFromAssembly(Assembly.GetExecutingAssembly());
            services.AddMediatR(Assembly.GetExecutingAssembly());
            services.AddTransient(typeof(IPipelineBehavior<,>), typeof(ValidationBehavior<,>));

            //services.ConfigureDataProtection(dp =>
            //{
            //    dp.PersistKeysToFileSystem(new DirectoryInfo(@"c:\keys"));
            //    dp.SetDefaultKeyLifetime(TimeSpan.FromDays(14));
            //});

        }
    }
}
