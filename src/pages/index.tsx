import { Card, Slider } from "@mui/material";
import { styled } from "@mui/material/styles";
import type { NextPage } from "next";

const CardComponent = styled(Card)`
  font-size: 30px;
  color: white;
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
`;

const Home: NextPage = () => {
  return (
    <CardComponent>
      <Slider
        defaultValue={30}
        sx={{
          width: "100%",
          color: "error.main",
        }}
      />
    </CardComponent>
  );
};

export default Home;
