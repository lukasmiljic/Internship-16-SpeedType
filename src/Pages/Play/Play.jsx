import Game from "../../Components/Game/Game";
import Header from "../../Components/Header";
import { Stack, Fab, Tooltip } from "@mui/material";
import CasinoIcon from "@mui/icons-material/Casino";

const style = {
  margin: 0,
  top: "auto",
  right: 20,
  bottom: 20,
  left: "auto",
  position: "fixed",
};

const Play = () => {
  return (
    <>
      <Stack height={"95vh"}>
        <Header />
        <Stack
          direction="column"
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ flexGrow: 1 }}>
          <Game />
          <Tooltip title="Randomize text.">
            <Fab style={style} color="primary">
              <CasinoIcon />
            </Fab>
          </Tooltip>
        </Stack>
      </Stack>
      ;
    </>
  );
};

export default Play;
