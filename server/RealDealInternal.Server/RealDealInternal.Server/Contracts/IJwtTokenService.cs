namespace RealDealInternal;

public interface IJwtTokenService
{
    string GenerateToken(User user, DateTime iat, DateTime exp);
}
