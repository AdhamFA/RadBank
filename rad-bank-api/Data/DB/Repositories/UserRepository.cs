using System;
using Data.DB.Entities;
using Data.DB.Interfaces;
using Data.DB.Context;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Data.DB.Repositories
{
	public class UserRepository : IUserRepository
    {
        private readonly RADContext _context;
		public UserRepository(RADContext context)
		{
            _context = context;
		}

        public async Task<User> CreateAsync(User entity)
        {
            var newEntity = await _context.Users.AddAsync(entity);

            await _context.SaveChangesAsync();

            return newEntity.Entity;
        }

        public async Task<User> GetAsync(Guid Id)
        {
            var user = await _context.Users.FindAsync(Id);
            return user;
        }

        public async Task<ICollection<User>> GetAsync()
        {
            return await _context.Users.ToListAsync();
        }

        public async Task RemoveAsync(Guid Id)
        {
            var entity = await _context.Users.FindAsync(Id);

            if (entity == null) return;

            _context.Users.Remove(entity);
            await _context.SaveChangesAsync();
        }

        public async Task<User> UpdateAsync(Guid Id, User entity)
        {
            var currentEntity = await _context.Users.FindAsync(Id);

            if (currentEntity == null) return null;

            _context.Entry<User>(currentEntity).CurrentValues.SetValues(entity);

            await _context.SaveChangesAsync();

            return entity;
        }
    }
}

