import { useEffect, useRef } from "react";
import useTypingGame from "react-typing-game-hook";
import { Typography } from "@mui/material";
import { useState } from "react";
import { quotes } from "../../Data/texts.js";
import Countdown from "./CountDown";
import "./styles.css";

const wordCounter = (text) => {
  return text.split(" ").length;
};

const Game = ({ randomizeText, quote }) => {
  let { text, source } = quote;

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

  const [level, setLevel] = useState(1);
  const [finishedGame, setFinishedGame] = useState(false);

  useEffect(() => {
    if (phase === 2) {
      if (level !== 3) {
        setLevel(level + 1);
        randomizeText();
      }
      console.log("level ", level);
      if (level === 3) {
        console.log("finished");
        setFinishedGame(true);
        // setLevel(1); ovo u dialogu
      }
    }
  }, [phase]);

  return (
    <div>
      {/* <Countdown /> */}
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

      <Typography color={"#ccc"} variant="h6">
        {level}/3
      </Typography>
      {finishedGame && (
        <div>
          <h1>Finished Game</h1>
        </div>
      )}
    </div>
  );
};

export default Game;
