using System;
namespace Data.DB.Interfaces
{
    public interface IBaseEntity
    {
        Guid Id { get; set; }
        DateTime CreatedAt { get; set; }
    }
}

