using System;
using Data.DB.Entities;
using Data.DB.Interfaces;
using Data.DB.Context;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Data.DB.Repositories
{
	public class AccountRepository : IAccountRepository
	{
        private readonly RADContext _context;
		public AccountRepository(RADContext context)
		{
            _context = context;
		}

        public async Task<Account> CreateAsync(Account entity)
        {
            var newEntity = await _context.Accounts.AddAsync(entity);

            await _context.SaveChangesAsync();

            return newEntity.Entity;
        }

        public async Task<Account> GetAsync(Guid Id)
        {
            var Account = await _context.Accounts.FindAsync(Id);
            return Account;
        }

        public async Task<ICollection<Account>> GetAsync()
        {
            return await _context.Accounts.ToListAsync();
        }

        public async Task RemoveAsync(Guid Id)
        {
            var entity = await _context.Accounts.FindAsync(Id);

            if (entity == null) return;

            _context.Accounts.Remove(entity);
            await _context.SaveChangesAsync();
        }

        public async Task<Account> UpdateAsync(Guid Id, Account entity)
        {
            var currentEntity = await _context.Accounts.FindAsync(Id);

            if (currentEntity == null) return null;

            _context.Entry<Account>(currentEntity).CurrentValues.SetValues(entity);

            await _context.SaveChangesAsync();

            return entity;
        }
    }
}

