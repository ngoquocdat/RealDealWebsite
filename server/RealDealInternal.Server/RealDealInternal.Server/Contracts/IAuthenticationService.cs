

namespace RealDealInternal;

public interface IAuthenticationService
{
    /// <summary>
    /// Log user in based on provided username & password.
    /// </summary>
    /// <param name="dto"></param>
    /// <param name="cancellationToken"></param>
    /// <returns></returns>
    Task<OneOf<AuthenticatedResponseDTO, ServiceError>> Login(UserLoginDTO dto, CancellationToken cancellationToken);

    /// <summary>
    /// Log user in based on provided phonenumber & password.
    /// </summary>
    /// <param name="dto"></param>
    /// <param name="cancellationToken"></param>
    /// <returns></returns>
    Task<OneOf<AuthenticatedResponseDTO, ServiceError>> LoginWithPhoneNumber(PhoneNumberUserLoginDTO dto, CancellationToken cancellationToken);

    /// <summary>
    /// Create new user
    /// </summary>
    /// <param name="dto"></param>
    /// <param name="cancellationToken"></param>
    /// <returns></returns>
    Task Register(UserSignUpDTO dto, CancellationToken cancellationToken);
}
