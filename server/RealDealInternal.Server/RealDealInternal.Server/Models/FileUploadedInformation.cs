namespace RealDealInternal;

public record FileUploadedInformation(string blobGuid,
                                      string name,
                                      string absoluteUri,
                                      MediaTypeDTO mediaType,
                                      DateTime uploadDate);