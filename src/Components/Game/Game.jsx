import { useEffect, useRef } from "react";
import useTypingGame from "react-typing-game-hook";
import { Typography } from "@mui/material";
import "./styles.css";

const wordCounter = (text) => {
  return text.split(" ").length;
};

const Game = ({ textObject }) => {
  const { text, source } = textObject;
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

      {phase === 2 && (
        <>
          {/* display dialog */}
          <p>
            WPM:
            {Math.round(
              wordCounter(text) / ((endTime - startTime) / 1000 / 60)
            )}
          </p>
          <p>Time {(endTime - startTime) / 1000}s</p>
        </>
      )}
    </div>
  );
};

export default Game;
