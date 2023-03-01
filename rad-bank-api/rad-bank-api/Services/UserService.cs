using System;
using Data.DB.Entities;
using Data.DB.Interfaces;
using rad_bank_api.Interfaces;
namespace rad_bank_api.Services
{
	public class UserService : IUserService
	{
        readonly IUserRepository _userRepository;

		public UserService(IUserRepository userRepository)
		{
            _userRepository = userRepository;
		}
        public async Task<ICollection<User>> GetUsersAsync()
        {
            return await _userRepository.GetAsync();
        }
    }
}

