using System;
using Microsoft.EntityFrameworkCore;
using Data.DB.Entities;

namespace Data.DB.Context
{
	public class RADContext : DbContext
	{
		public DbSet<User> Users { get; set; }
		public DbSet<Account> Accounts { get; set; }
		public string DbPath { get; }
		public RADContext()
		{
            var folder = Environment.SpecialFolder.LocalApplicationData;
            var path = Environment.GetFolderPath(folder);
            DbPath = System.IO.Path.Join(path, "fuelrecords.db");
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseSqlite($"Data Source={DbPath}");
    }
}

