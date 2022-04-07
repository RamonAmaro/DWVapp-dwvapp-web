import { Wrapper } from "@components/content";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Wrapper
      sx={{
        backgroundColor: "#000",
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Link href="listRealEstateDevelopersByCities">
        ir para as construtoras
      </Link>
    </Wrapper>
  );
};

export default Home;
