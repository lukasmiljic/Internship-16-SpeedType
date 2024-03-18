import React, { useState } from "react";
import useTypingGame from "react-typing-game-hook";
import { Typography } from "@mui/material";
import "./styles.css";

const wordCounter = (text) => {
  return text.split(" ").length;
};

const Game = () => {
  let text = "The quick brown fox jumps over the lazy dog";
  console.log(wordCounter(text));
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
        className="typing-test"
        onKeyDown={(e) => {
          handleKey(e.key);
          e.preventDefault();
        }}
        tabIndex={0}>
        {text.split("").map((char, index) => {
          let state = charsState[index];
          let color = state === 0 ? "#ccc" : state === 1 ? "#333" : "red";

          return (
            <Typography
              variant="h2"
              display={"inline"}
              color={color}
              key={char + index}
              className={currIndex + 1 === index ? "curr-letter" : ""}>
              {char}
            </Typography>
          );
        })}
      </div>
    
      {phase === 2 && (
        <>
          {/* display dialog */}
          <h2>Game Over!</h2>
          <p>
            WPM:{" "}
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
