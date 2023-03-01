using System;
using Data.DB.Entities;
using Data.DB.Interfaces;
using rad_bank_api.Interfaces;
namespace rad_bank_api.Services
{
	public class AccountService : IAccountService
	{
        readonly IAccountRepository _accountRepository;
		public AccountService(IAccountRepository accountRepository)
		{
            _accountRepository = accountRepository;
		}

        public async Task<ICollection<Account>> GetAccountsAsync()
        {
            return await _accountRepository.GetAsync();
        }
    }
}

