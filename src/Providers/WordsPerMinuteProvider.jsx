import { createContext, useContext, useState } from "react";

const defaultContext = {
  wordsPerMinute: 0,
};

const WordsPerMinuteContext = createContext(defaultContext);

const WordsPerMinuteProvider = ({ children }) => {
  const [wordsPerMinute, setWordsPerMinute] = useState(0);

  const updateWordsPerMinute = (newWordsPerMinute) => {
    setWordsPerMinute(newWordsPerMinute);
  };

  return (
    <WordsPerMinuteContext.Provider
      value={{ wordsPerMinute, updateWordsPerMinute }}>
      {children}
    </WordsPerMinuteContext.Provider>
  );
};

export const useWordsPerMinute = () => useContext(WordsPerMinuteContext);

export default WordsPerMinuteProvider;
