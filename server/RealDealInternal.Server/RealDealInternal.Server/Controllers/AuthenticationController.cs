namespace RealDealInternal;

public class AuthenticationController : BaseController
{
    #region [ Fields ]

    private readonly IAuthenticationService _authenticationService;
    #endregion

    #region [ CTor ]
    public AuthenticationController(IAuthenticationService authenticationService)
    {
        _authenticationService = authenticationService;
    }
    #endregion

    #region [ POST ]
    [HttpPost]
    [AllowAnonymous]
    public async Task<IActionResult> Login(UserLoginDTO dto, CancellationToken cancellationToken = default)
    {
        if (dto == null || string.IsNullOrWhiteSpace(dto.username) || string.IsNullOrWhiteSpace(dto.password))
            return BadRequest();

        var result = await _authenticationService.Login(dto, cancellationToken);

        return result.Match(
            authenticatedInfo => (IActionResult)Ok(authenticatedInfo),
            error => NotFound(new
            {
                error.ServiceName,
                error.ErrorCode,
                error.ErrorMessage,
                error.EventOccuredAt
            })
        );
    }

    [HttpPost]
    [AllowAnonymous]
    public async Task<IActionResult> LoginWithPhoneNumber(PhoneNumberUserLoginDTO dto, CancellationToken cancellationToken = default)
    {
        if (dto == null || string.IsNullOrWhiteSpace(dto.phoneNumber) || string.IsNullOrWhiteSpace(dto.password))
            return BadRequest();

        var result = await _authenticationService.LoginWithPhoneNumber(dto, cancellationToken);

        return result.Match(
            authenticatedInfo => (IActionResult)Ok(authenticatedInfo),
            error => NotFound(new
            {
                error.ServiceName,
                error.ErrorCode,
                error.ErrorMessage,
                error.EventOccuredAt
            })
        );
    }

    [HttpPost]
    [AllowAnonymous]
    public async Task<IActionResult> Register([FromForm] UserSignUpDTO dto, CancellationToken cancellationToken = default)
    {
        if (dto == null || string.IsNullOrWhiteSpace(dto.UserName) || string.IsNullOrWhiteSpace(dto.Password))
            return BadRequest();

        //var baseConfirmationUrl = $"{Request.Scheme}://{Request.Host.Value}{Request.PathBase.Value}/api/access/confirmEmail/confirm-email?";
        await _authenticationService.Register(dto, /*baseConfirmationUrl,*/ cancellationToken);

        return Ok();
    }
    #endregion
}