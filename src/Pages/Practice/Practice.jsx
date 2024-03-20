import Game from "../../Components/Game/Game";
import Header from "../../Components/Header/Header";
import { Stack, Fab, Tooltip } from "@mui/material";
import CasinoIcon from "@mui/icons-material/Casino";
import { useState } from "react";
import { quotes } from "../../Data/texts.js";

const style = {
  margin: 0,
  top: "auto",
  right: 20,
  bottom: 20,
  left: "auto",
  position: "fixed",
};

const Practice = () => {
  const [quote, setQuote] = useState(quotes[0]);

  const randomizeText = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <>
      <Stack height={"95vh"}>
        <Header />
        <Stack
          direction="column"
          alignItems={"center"}
          justifyContent={"center"}
          padding={2}
          textAlign={"center"}
          sx={{ flexGrow: 1 }}>
          <Game quote={quote} randomizeText={randomizeText} />
          <Tooltip title="Randomize quote.">
            <Fab style={style} color="primary" onClick={randomizeText}>
              <CasinoIcon />
            </Fab>
          </Tooltip>
        </Stack>
      </Stack>
    </>
  );
};

export default Practice;
