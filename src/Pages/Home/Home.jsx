import { Stack } from "@mui/material";
import Header from "../../Components/Header";
import TypeWriter from "../../Components/TypeWriter/TypeWriter";
import ScrollingTextProvider from "../../Providers/FadingTextProvider";

const Home = () => {
  return (
    <Stack height={"100vh"}>
      <ScrollingTextProvider>
        <Header />
      </ScrollingTextProvider>
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
