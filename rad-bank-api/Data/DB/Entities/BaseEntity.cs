using System;
using Data.DB.Interfaces;

namespace Data.DB.Entities
{
    public abstract class BaseEntity : IBaseEntity
    {
        public Guid Id { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}

