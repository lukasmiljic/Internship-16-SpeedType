import { Stack } from "@mui/material";
import Header from "../../Components/Header/Header";
import TypeWriter from "../../Components/TypeWriter/TypeWriter";
import ScrollingTextProvider, {
  useScrollingText,
} from "../../Providers/FadingTextProvider";
import { generateFadingText } from "../../Components/FadingText/FadingText";
import { useRef, useEffect } from "react";

const Home = () => {
  const { scrollingTextEnabeled, updateScrollingTextEnabeled } =
    useScrollingText();

  useEffect(() => {
    console.log("scrollingTextEnabeled " + scrollingTextEnabeled);
  }, [scrollingTextEnabeled]);

  let idRef = useRef();
  useEffect(() => {
    if (scrollingTextEnabeled) {
      idRef.current = generateFadingText();
      console.log("started " + idRef.current);
    }

    return () => {
      if (idRef.current) {
        console.log("stopping " + idRef.current);
        clearInterval(idRef.current);
      }
    };
  }, [scrollingTextEnabeled]);

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
