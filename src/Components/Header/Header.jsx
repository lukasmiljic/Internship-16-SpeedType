import Stack from "@mui/material/Stack";
import TemporaryDrawer from "../Drawer/Drawer";
import DialogComponent from "../Dialog/Dialog";

const Header = () => {
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent={"space-between"}
        padding={2}>
        <Stack className="buttons" direction="row" spacing={2}>
          <DialogComponent
            buttonTitle="New Game"
            buttonVariant="contained"
            dialogTitle="Start a New Game?"
            dialogContentText="Are you sure you want to start a new game? You can choose between
            the standard game mode, or, if you're looking for an extra
            challenge, you can also choose the instant death mode. In this
            mode, the game ends as soon as you make your first mistake."
            buttons={[
              { text: "Cancel", color: "error" },
              { text: "Instant Death", link: "instantdeath" },
              { text: "Play", link: "play" },
            ]}
          />
          <DialogComponent
            buttonTitle="Practice"
            buttonVariant="outlined"
            dialogTitle="Do you want to enter Practice Mode?"
            dialogContentText="Practice Mode is a way to train your skills before playing a new
            game. The results in practice mode don't affect your stats."
            buttons={[
              { text: "Cancel", color: "error" },
              { text: "OK", link: "practice" },
            ]}
          />
        </Stack>
        <TemporaryDrawer />
      </Stack>
    </>
  );
};

export default Header;
