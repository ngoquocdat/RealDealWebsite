namespace RealDealInternal;

public class JwtTokenService : IJwtTokenService
{

    #region [ Fields ]

    private readonly UserManager _userManager;
    private readonly JwtTokenConfig _tokenConfig;
    #endregion

    #region [ CTors ]

    public JwtTokenService(UserManager userManager,
                           IOptionsMonitor<JwtTokenConfig> tokenConfigOptionsAccessor)
    {

        _userManager = userManager;
        _tokenConfig = tokenConfigOptionsAccessor.CurrentValue;
    }
    #endregion

    #region [ Methods ]

    public string GenerateToken(User user, DateTime iat, DateTime exp)
    {
        var handler = new JwtSecurityTokenHandler();

        var identity = new ClaimsIdentity(
            new GenericIdentity(user.UserName, "TokenAuth"),
            new[] {
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                    new Claim("guid", user.Id)
                  }
            // TODO: add more user's claims
            );

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_tokenConfig.Key));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var securityToken = handler.CreateToken(new SecurityTokenDescriptor
        {
            Issuer = _tokenConfig.Issuer,
            Audience = "realdealinternal-clients",  // TODO: client's name/id
            SigningCredentials = creds,
            Subject = identity,
            IssuedAt = iat,
            Expires = exp
        });

        return handler.WriteToken(securityToken);
    }
    #endregion

}
