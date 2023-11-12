namespace RealDealInternal;

public class MediaRepository : IdentityBaseRepository<Media>, IMediaRepository
{
    #region [ Fields ]

    #endregion

    #region [ CTors ]

    public MediaRepository(IdentityDbContext context) : base(context) { }
    #endregion

    #region [ Methods ]
    #endregion

}
