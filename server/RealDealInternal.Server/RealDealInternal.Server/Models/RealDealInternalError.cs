namespace RealDealInternal;
public record RealDealInternalError(string ErrorMessage = "",
                             string ErrorCode = "",
                             string? SuggestionMessage = null,
                             DateTime EventOccuredAt = default!);