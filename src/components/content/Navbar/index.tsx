import { Wrapper } from "../Wrapper";
import { CardSelectedRealEstateDeveloper } from "./content";

export const NavBar: React.FC = () => {
  return (
    <Wrapper
      about="containerNavBar"
      sx={{
        width: { xs: "100%", sm: "50%", md: "70%", lg: "100%", xl: "100%" },
        px: "10px",
        backgroundColor: "error.main",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Wrapper
        about="wrapperLogoDwv"
        sx={{
          width: "100px",
          height: "40px",
          py: "5px",
          backgroundColor: "primary.main",
        }}
      />
      <Wrapper
        about="wrapperREDeveloperAndUserProfile"
        sx={{
          py: "5px",
          display: "flex",
          columnGap: "10px",
        }}
      >
        <CardSelectedRealEstateDeveloper />
      </Wrapper>
    </Wrapper>
  );
};
