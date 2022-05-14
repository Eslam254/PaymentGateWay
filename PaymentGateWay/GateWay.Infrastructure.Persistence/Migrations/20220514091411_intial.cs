using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GateWay.Infrastructure.Persistence.Migrations
{
    public partial class intial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Payments",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProcesingCode = table.Column<int>(type: "int", nullable: false),
                    SystemTraceNr = table.Column<int>(type: "int", nullable: false),
                    FunctionCode = table.Column<int>(type: "int", nullable: false),
                    CardNumber = table.Column<long>(type: "bigint", nullable: false),
                    CardHolder = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AmountTrxn = table.Column<decimal>(type: "decimal(18,6)", nullable: false),
                    CurrencyCode = table.Column<int>(type: "int", nullable: false),
                    CreatedBy = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Created = table.Column<DateTime>(type: "datetime2", nullable: false),
                    LastModifiedBy = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastModified = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Payments", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Payments");
        }
    }
}
