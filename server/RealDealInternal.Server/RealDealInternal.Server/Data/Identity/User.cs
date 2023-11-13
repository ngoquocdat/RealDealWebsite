namespace RealDealInternal;

public class User : IdentityUser
{
    public string? ProfileImageUrl { get; set; }
    public string? CoverImageUrl { get; set; }
    public string FirstName { get; set; } = string.Empty;
    public string? MiddleName { get; set; }
    public string? LastName { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public bool? IsActive { get; set; }
    public bool IsDeleted { get; set; } = false;
    public string? SignalRConnectionId { get; set; }
    public virtual ICollection<UserRole> UserRoles { get; } = new HashSet<UserRole>();
}