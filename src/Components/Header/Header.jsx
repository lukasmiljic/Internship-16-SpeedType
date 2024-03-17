import {
  Button,
  Stack,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Header = () => {
  const [openPractice, setOpenPractice] = useState(false);
  const [openNewGame, setOpenNewGame] = useState(false);

  return (
    <header>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent={"space-between"}
        padding={2}>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={() => setOpenNewGame(true)}>
            New Game
          </Button>
          <Button variant="outlined" onClick={() => setOpenPractice(true)}>
            Practice
          </Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Typography variant="button">Level</Typography>
          <Typography variant="button">WPM</Typography>
        </Stack>
      </Stack>

      <Dialog
        id="practiceDialog"
        open={openPractice}
        onClose={() => setOpenPractice(false)}>
        <DialogTitle>Želite li ući u Practice Mode?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Practice Mode je način na koji možete trenirati svoje vještine prije
            nego što započnete novu igru. Practice Mode nece utjecati na vašu
            statistiku.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenPractice(false)}>Odustani</Button>
          <Button onClick={() => setOpenPractice(false)} autoFocus>
            Nastavi
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        id="newGameDialog"
        open={openNewGame}
        onClose={() => setOpenNewGame(false)}>
        <DialogTitle>Želite li započeti novu igru?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Jeste li sigurni da želite započeti novu igru? Možete odabrati
            između standardnog načina igre, ili, ukoliko tražite dodatni izazov,
            možete odabrati i "instant death" mod. U ovom modu, igra se završava
            čim napravite prvu pogrešku.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenNewGame(false)}>Odustani</Button>
          <Button onClick={() => setOpenNewGame(false)} autoFocus>
            Regular Mode
          </Button>
          <Button onClick={() => setOpenNewGame(false)} autoFocus>
            Instant Death Mode
          </Button>
        </DialogActions>
      </Dialog>
    </header>
  );
};

export default Header;
