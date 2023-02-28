using System;
namespace Data.DB.Entities
{
	public class Account : BaseEntity
    {
        public string AccountId { get; set; }
        public string name { get; set; }
        public double balance { get; set; }
        public User user { get; set; }
    }
}

