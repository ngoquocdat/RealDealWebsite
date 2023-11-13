namespace RealDealInternal;


public record ServiceError(string ServiceName = "", string MethodName = "", string ConsumerName = "") : RealDealInternalError;