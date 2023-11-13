using Microsoft.EntityFrameworkCore;

namespace RealDealInternal;

public class ApplicationDbContext : DbContext
{

    #region [ CTors ]

    public ApplicationDbContext(DbContextOptions options) : base(options) { }
    #endregion

    public virtual DbSet<Media> Medias { get; set; } = null!;
}
