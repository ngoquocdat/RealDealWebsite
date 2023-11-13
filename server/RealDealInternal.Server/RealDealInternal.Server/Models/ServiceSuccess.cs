namespace RealDealInternal;

public record ServiceSuccess(string ServiceName = "",
                             string MethodName = "",
                             string ConsumerName = "",
                             object? AttachedData = default!) : RealDealInternalSuccess;