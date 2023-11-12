using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace RealDealInternal;

public class IdentityDbContext : IdentityDbContext<User, Role, string, IdentityUserClaim<string>, UserRole, IdentityUserLogin<string>, IdentityRoleClaim<string>, IdentityUserToken<string>>
{

    #region [ CTors ]

    public IdentityDbContext(DbContextOptions options) : base(options) { }
    #endregion

    #region [ DbSets ]

    public override DbSet<User> Users { get; set; } = null!;
    public override DbSet<Role> Roles { get; set; } = null!;
    public override DbSet<UserRole> UserRoles { get; set; } = null!;
    #endregion

    #region [ Overrides ]

    protected override void OnModelCreating(ModelBuilder builder)
    {

        base.OnModelCreating(builder);

        builder.Entity<UserRole>(entity =>
        {
            entity.HasOne(ur => ur.User)
                  .WithMany(u => u.UserRoles)
                  .HasForeignKey(ur => ur.UserId)
                  .IsRequired()
                  .OnDelete(DeleteBehavior.Cascade);
            entity.HasOne(ur => ur.Role)
                  .WithMany(r => r.UserRoles)
                  .HasForeignKey(ur => ur.RoleId)
                  .IsRequired()
                  .OnDelete(DeleteBehavior.Cascade);
        });
    }
    #endregion
}
