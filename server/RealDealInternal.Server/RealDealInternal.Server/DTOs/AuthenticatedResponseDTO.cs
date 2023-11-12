namespace RealDealInternal;
public record AuthenticatedResponseDTO(string userGuid,
                                       DateTime requestAt,
                                       string accessToken,
                                       DateTime expiredIn);