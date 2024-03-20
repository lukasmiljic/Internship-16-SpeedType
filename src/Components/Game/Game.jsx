import useTypingGame from "react-typing-game-hook";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useWordsPerMinute } from "../../Providers/WordsPerMinuteProvider";
import { useLevel } from "../../Providers/LevelProvider";
import { Typography } from "@mui/material";
import DialogComponent from "../Dialog/Dialog";
import Confetti from "react-confetti";
import "./styles.css";
// import { useMode } from "../../Providers/ModeProvider";

const Game = ({ randomizeText, quote, mode }) => {
  let { text, source } = quote;
  const [currentWPM, setCurrentWPM] = useState(0);
  const handleWPM = () => {
    const newWPM = Math.round(
      wordCounter(text) / ((endTime - startTime) / 1000 / 60)
    );
    if (currentWPM === 0) {
      setCurrentWPM(newWPM);
    } else {
      setCurrentWPM((currentWPM + newWPM) / 2);
    }
  };

  const wordCounter = (text) => {
    return text.split(" ").length;
  };

  const divRef = useRef(null);
  useEffect(() => {
    divRef.current.focus();
  }, []);

  const {
    states: {
      charsState,
      length,
      currIndex,
      currChar,
      correctChar,
      errorChar,
      phase,
      startTime,
      endTime,
    },
    actions: { insertTyping, resetTyping, deleteTyping },
  } = useTypingGame(text);

  const handleKey = (key) => {
    if (key === "Escape") {
      resetTyping();
    } else if (key === "Backspace") {
      deleteTyping(false);
    } else if (key.length === 1) {
      insertTyping(key);
    }
  };

  const [currentLevel, setCurrentLevel] = useState(1);
  const { wordsPerMinute, updateWordsPerMinute } = useWordsPerMinute();
  const { level, updateLevel } = useLevel();

  useEffect(() => {
    randomizeText();
  }, [currentLevel]);

  useEffect(() => {
    if (phase === 2) {
      handleWPM();
      console.log("current wpm", currentWPM);
      if (currentLevel === 3 && mode !== "practice") {
        updateWordsPerMinute((wordsPerMinute + currentWPM) / 2);
        updateLevel(level + 3);
      }
    }
    console.log("phase", phase, "currentLevel", currentLevel);
  }, [phase]);

  const reloadText = () => {
    randomizeText();
    errorChar = 0;
  };

  return (
    <div>
      <div
        ref={divRef}
        className="typing-test"
        tabIndex="0"
        onKeyDown={(e) => {
          handleKey(e.key);
          e.preventDefault();
        }}>
        {text.split("").map((char, index) => {
          let state = charsState[index];
          let color = state === 0 ? "#ccc" : state === 1 ? "#333" : "red";

          return (
            <Typography
              variant="h2"
              display={"inline"}
              color={color}
              key={char + index}
              className={
                currIndex + 1 === index ? "curr-letter letters" : "letters"
              }>
              {char}
            </Typography>
          );
        })}
        <div className="source ">
          <Typography color={"#ccc"} variant="h6">
            {source}
          </Typography>
        </div>
      </div>

      {errorChar !== 0 && mode === "instantdeath" && (
        <DialogComponent
          dialogTitle="Game Over!"
          dialogContentText="Sorry, but you made a mistake. Try again?"
          buttons={[
            { text: "No", color: "error", link: "../" },
            // { text: "Yes", clickFunction: () => window.location.reload() },
            { text: "Yes", clickFunction: () => reloadText() },
          ]}
        />
      )}

      {mode !== "practice" && (
        <>
          <Typography color={"#ccc"} variant="h6">
            {currentLevel}/3
          </Typography>

          {phase === 2 && currentLevel < 3 && (
            <DialogComponent
              dialogTitle="Continue to the next level?"
              dialogContentText="Do you want to continue playing?"
              buttons={[
                { text: "No", color: "error", link: "../" },
                {
                  text: "Yes",
                  clickFunction: () => setCurrentLevel(currentLevel + 1),
                },
              ]}
            />
          )}
          {currentLevel === 3 && phase === 2 && (
            <>
              <Confetti />
              <DialogComponent
                dialogTitle="Congratulations"
                dialogContentText={`
          Game WPM ${currentWPM}
          Average WPM ${wordsPerMinute}
          Time ${(endTime - startTime) / 1000}s
          Do you want to continue playing?
          `}
                buttons={[
                  { text: "No", color: "error", link: "../" },
                  {
                    text: "Yes",
                    clickFunction: () => setCurrentLevel(1),
                  },
                ]}
              />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Game;
