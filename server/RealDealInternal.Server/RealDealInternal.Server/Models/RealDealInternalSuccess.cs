namespace RealDealInternal;

public record RealDealInternalSuccess(string SuccessMessage = "",
                               string SuccessCode = "",
                               DateTime EventOccuredAt = default!);