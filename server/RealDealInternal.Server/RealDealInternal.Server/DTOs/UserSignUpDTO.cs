namespace RealDealInternal;

public record UserSignUpDTO(string UserName,
                            string Password,
                            string FirstName,
                            string LastName,
                            string Email,
                            string PhoneNumber,
                            string[]? Roles,
                            IFormFile? AvatarFile)

{ }