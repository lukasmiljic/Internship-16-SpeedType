import {
  Button,
  Stack,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Typography,
  Tooltip,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { useState, useEffect, useRef } from "react";
import { useWordsPerMinute } from "../../Providers/WordsPerMinuteProvider";
import { useScrollingText } from "../../Providers/FadingTextProvider";
import { useLevel } from "../../Providers/LevelProvider";
import { generateFadingText, stopGenerating } from "../FadingText/FadingText";

const Header = () => {
  const [openPractice, setOpenPractice] = useState(false);
  const [openNewGame, setOpenNewGame] = useState(false);
  const { wordsPerMinute, updateWordsPerMinute } = useWordsPerMinute();
  const { scrollingTextEnabeled, updateScrollingTextEnabeled } =
    useScrollingText();
  const { level, updateLevel } = useLevel();

  const idRef = useRef();
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
        <Stack direction="row" spacing={2} alignItems={"center"}>
          <FormControlLabel
            value="top"
            control={
              <Switch
                defaultChecked
                onChange={(event, checked) =>
                  updateScrollingTextEnabeled(checked)
                }
              />
            }
            label="Enable Scrolling Text"
            labelPlacement="start"
          />
          <Tooltip title="Number of cleared levels">
            <Typography variant="button">Level {level}</Typography>
          </Tooltip>
          <Tooltip title="Current words per minute.">
            <Typography variant="button">WPM {wordsPerMinute}</Typography>
          </Tooltip>
        </Stack>
      </Stack>

      <Dialog
        id="practiceDialog"
        open={openPractice}
        onClose={() => setOpenPractice(false)}>
        <DialogTitle>Do you want to enter Practice Mode?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Practice Mode is a way to train your skills before playing a new
            game. The results in practice mode don't affect your statistics.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenPractice(false)} color="error">
            Cancel
          </Button>
          <Button onClick={() => setOpenPractice(false)} autoFocus>
            Continue
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        id="newGameDialog"
        open={openNewGame}
        onClose={() => setOpenNewGame(false)}>
        <DialogTitle>Start a New Game?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to start a new game? You can choose between
            the standard game mode, or, if you're looking for an extra
            challenge, you can also choose the "instant death" mode. In this
            mode, the game ends as soon as you make your first mistake.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenNewGame(false)} color="error">
            Cancel
          </Button>
          <Button onClick={() => setOpenNewGame(false)} autoFocus>
            Regular Mode
          </Button>
          <Button onClick={() => setOpenNewGame(false)}>
            Instant Death Mode
          </Button>
        </DialogActions>
      </Dialog>
    </header>
  );
};

export default Header;
