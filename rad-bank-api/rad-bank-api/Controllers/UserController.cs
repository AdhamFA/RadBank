using Data.DB.Context;
using Data.DB.Entities;
using Data.DB.Repositories;
using Data.DB.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using rad_bank_api.Interfaces;

namespace rad_bank_api.Controllers;

[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{
    private readonly ILogger<UserController> _logger;
    private readonly RADContext _context;
    private readonly IUserService _userService;

    public UserController(ILogger<UserController> logger, IUserService userService, RADContext context)
    {
        _logger = logger;
        _userService = userService;
        _context = context;
    }

    [HttpGet(Name = "GetUsers")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ICollection<User>))]
    public async Task<ICollection<User>> GetUsers()
    {
        return await _userService.GetUsersAsync();
    }

    [HttpGet("{email}", Name = "GetUser")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(User))]
    public async Task<User> GetUser(string email)
    {
        //The right way would be to have some error handling and return the proper API response to the user, in here we should check if the user exists or not and return the proper response, a 200 means the user is going to get authenticated, anything else means authentication failed
        var users = await _userService.GetUsersAsync();

        return users.Single<User>(user => user.email == email);
    }

    [HttpPost(Name = "CreateUser")]
    [ProducesResponseType(StatusCodes.Status201Created, Type = typeof(User))]
    public async Task<ActionResult<User>> CreateUser(User user)
    {
        //In a real-world version of this application we would check whether this user exists and return the right response in that case
        //We would aslo have some form of authentication
        //We would also utilize a service
        _context.Users.Add(user);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetUser), new { email = user.email }, user);
    }
}

