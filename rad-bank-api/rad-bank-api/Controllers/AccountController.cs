using Data.DB.Context;
using Data.DB.Entities;
using Data.DB.Repositories;
using Data.DB.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using rad_bank_api.Interfaces;
using rad_bank_api.Services;
using Microsoft.EntityFrameworkCore;

namespace rad_bank_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly ILogger<AccountController> _logger;
        private readonly IAccountService _accountService;
        private readonly RADContext _context;

        public AccountController(IAccountService accountService, ILogger<AccountController> logger, RADContext context)
        {
            _logger = logger;
            _accountService = accountService;
            _context = context;
        }

        [HttpGet(Name = "Accounts")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ICollection<Account>))]
        public async Task<ICollection<Account>> GetAccounts()
        {
            return await _accountService.GetAccountsAsync();
        }

        [HttpGet("{id}", Name = "Account")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Account))]
        public async Task<Account> GetAccount(string id)
        {
            var accounts = await _accountService.GetAccountsAsync();

            return accounts.Single<Account>(account => account.AccountId.Equals(id));
        }

        [HttpPost("{userEmail}", Name = "CreateAccount")]
        [ProducesResponseType(StatusCodes.Status201Created, Type = typeof(Account))]
        public async Task<ActionResult<User>> CreateUser(Account account, string email)
        {
            //In a real-world version of this application we would check whether this accounts exists and return the right response in that case
            //We would also have some form of authentication
            //We would also utilize a service
            //We are doing two things here, creating the account and adding the relation to the account
            _context.Accounts.Add(account);
            await _context.SaveChangesAsync();

            var user = _context.Users.FirstOrDefault(user => user.email.Equals(email));

            if (user == null)
                return NotFound("User not found");

            if (user.Accounts == null)
                user.Accounts = new List<Account> { account };
            else
                user.Accounts.Add(account);

            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetAccount), new { id = account.AccountId }, account);
        }

        [HttpDelete(Name = "DeleteAccount")]
        [ProducesResponseType(StatusCodes.Status204NoContent, Type = typeof(Account))]
        public async Task<IActionResult> DeleteUser(string id)
        {
            var accounts = await _accountService.GetAccountsAsync();


            var account = accounts.FirstOrDefault(account => account.AccountId.Equals(id));

            //The right thing to do here is check if that account ID belongs to an account in the DB and return an error that it doesn't exist
            if (account == null)
                return NotFound("Account not found");

            _context.Accounts.Remove(account);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpPut("{id}/Withdraw", Name = "Withdraw")]
        public async Task<ActionResult<Account>> Withdraw(string id, double amount)
        {
            var account = _context.Accounts.FirstOrDefault(account => account.AccountId.Equals(id));

            if (account == null)
                return NotFound("Account not found");

            if (amount / account.balance > 0.9)
                return BadRequest("Withdrawal amount can't be higher than 90% of balance amount");

            if (account.balance - amount < 100)
                return BadRequest("You can't have less than 100 in your bank account");

            account.balance = account.balance - amount;

            await _context.SaveChangesAsync();

            return account;
        }

        [HttpPut("{id}/Deposit", Name = "Deposit")]
        public async Task<ActionResult<Account>> Deposit(string id, double amount)
        {
            var account = _context.Accounts.FirstOrDefault(account => account.AccountId.Equals(id));

            if (account == null)
                return NotFound("Account not found");

            if (amount > 10000)
                return BadRequest("You can not deposit more than $10,000 in a single transaction");

            account.balance = account.balance + amount;

            await _context.SaveChangesAsync();

            return account;
        }
    }
}

