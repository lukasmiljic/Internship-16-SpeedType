import { Stack } from "@mui/material";
import Header from "../../Components/Header";
import TypeWriter from "../../Components/TypeWriter/TypeWriter";

const Home = () => {
  return (
    <Stack height={"100vh"}>
      <Header />
      <Stack
        direction="column"
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ flexGrow: 1 }}>
        <TypeWriter />
      </Stack>
    </Stack>
  );
};

export default Home;
