using System;
namespace Data.DB.Entities
{
	public class User : BaseEntity
	{
		public int userId { get; set; }
		public string email { get; set; }
		public string firstName { get; set; }
		public string lastName { get; set; }

		public ICollection<Account> Accounts { get; set; }
	}
}

