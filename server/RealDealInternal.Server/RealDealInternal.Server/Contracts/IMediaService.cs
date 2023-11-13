namespace RealDealInternal;

public interface IMediaService
{
    Task<SystemMediaDTO> UploadFileAsync(IFormFile file, MediaTypeDTO type, CancellationToken cancellationToken = default!);
}
