using System;
using Data.DB.Entities;

namespace rad_bank_api.Interfaces
{
	public interface IAccountService
	{
        Task<ICollection<Account>> GetAccountsAsync();
    }
}

