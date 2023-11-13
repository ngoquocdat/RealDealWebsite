namespace RealDealInternal;

public class MappingConfig : Profile
{
    public MappingConfig()
    {

        CreateMap<UserSignUpDTO, User>();

        CreateMap<Role, RoleDTO>();
        CreateMap<RoleDTO, Role>()
            .ForMember(ent => ent.Id, opt => opt.Ignore());
    }
}
