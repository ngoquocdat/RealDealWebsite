using System.Linq.Expressions;

namespace RealDealInternal;

public class UserRepository : IUserRepository
{

    #region [ Fields ]

    private readonly UserManager userManager;
    private readonly SignInManager<User> signInManager;
    #endregion

    #region [ CTors ]

    public UserRepository(UserManager userManager,
                          SignInManager<User> signInManager)
    {
        this.userManager = userManager;
        this.signInManager = signInManager;
    }
    #endregion

    #region [ Methods - Reads ]

    public Task<Microsoft.AspNetCore.Identity.SignInResult> CheckPasswordSignInAsync(User user, string password, bool lockoutOnFailure)
        => signInManager.CheckPasswordSignInAsync(user, password, lockoutOnFailure);

    public IQueryable<User> FindAll(Expression<Func<User, bool>>? predicate = null)
        => userManager.FindAll(predicate);

    public Task<User?> FindByGuidAsync(string guid, CancellationToken cancellationToken = default!)
        => userManager.FindByGuidAsync(guid, cancellationToken);

    public Task<List<User>> FindByGuidsAsync(string[] userGuids, CancellationToken cancellationToken = default!)
        => userManager.FindByGuidsAsync(userGuids, cancellationToken);

    public Task<User?> FindByNameAsync(string userName)
        => userManager.FindByNameAsync(userName);

    public Task<User?> FindByPhoneNumberAsync(string phoneNumber, CancellationToken cancellationToken)
        => userManager.FindByPhoneNumberAsync(phoneNumber, cancellationToken);

    #endregion

    #region [ Methods - Mutates ]

    public Task<IdentityResult> CreateAsync(User user, string password)
        => userManager.CreateAsync(user, password);


    public Task<IdentityResult> UpdateAsync(User user)
        => userManager.UpdateAsync(user);
    #endregion

}
