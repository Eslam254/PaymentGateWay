using AutoMapper;
using GateWay.Infrastructure.Identity.Context;
using GateWay.Infrastructure.Identity.Models;
using GateWay.Infrastructure.Identity.seeds;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Serilog;
using Serilog.Events;
using Serilog.Sinks.MSSqlServer;
using System;
using System.Collections.ObjectModel;
using System.Data;
using System.Threading.Tasks;

namespace GateWay.WebApi
{
    namespace WebApi
    {
        public class Program
        {
            public async static Task Main(string[] args)
            {
                var config = new ConfigurationBuilder()
                    .AddJsonFile("appsettings.json")
                    .Build();

                Log.Logger = new LoggerConfiguration()
                    .ReadFrom.Configuration(config)
                    .CreateLogger();
                var host = CreateHostBuilder(args).Build();
                using (var scope = host.Services.CreateScope())
                {
                    var services = scope.ServiceProvider;
                    var loggerFactory = services.GetRequiredService<ILoggerFactory>();
                    try
                    {
                        var userManager = services.GetRequiredService<UserManager<ApplicationUser>>();
                        var roleManager = services.GetRequiredService<RoleManager<IdentityRole>>();

                        await Infrastructure.Identity.seeds.DefaultRoles.SeedAsync(userManager, roleManager);
                        await Infrastructure.Identity.seeds.DefaultSuperAdmin.SeedAsync(userManager, roleManager);
                        Log.Information("Finished Seeding Default Data");
                        Log.Information("Application Starting");
                    }
                    catch (Exception ex)
                    {
                        Log.Warning(ex, "An error occurred seeding the DB");
                    }
                    finally
                    {
                        Log.CloseAndFlush();
                    }
                }
                host.Run();

            }
            public static IHostBuilder CreateHostBuilder(string[] args) =>
                Host.CreateDefaultBuilder(args)
                .UseSerilog() 
                    .ConfigureWebHostDefaults(webBuilder =>
                    {
                        webBuilder.UseStartup<Startup>();
                    });

        }

    }
}

