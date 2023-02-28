using System;
using Data.DB.Entities;

namespace Data.DB.Interfaces
{
    public interface IRepository<T> where T : BaseEntity
    {
        Task<T> GetAsync(Guid Id);
        Task<ICollection<T>> GetAsync();
        Task<T> CreateAsync(T entity);
        Task RemoveAsync(Guid Id);
        Task<T> UpdateAsync(Guid Id, T entity);
    }
}

