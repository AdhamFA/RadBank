using System;
using Data.DB.Entities;

namespace rad_bank_api.Interfaces
{
	public interface IUserService
	{
		Task<ICollection<User>> GetUsersAsync();

		//Ideally All interactions with DB would go here and run through this service but due to time constraints I will run everything through the controller directly
	}
}

