import { createContext, useContext, useState } from "react";

const defaultContext = {
  level: 0,
};

const LevelContext = createContext(defaultContext);

const LevelProvider = ({ children }) => {
  const [level, setLevel] = useState(0);

  const updateLevel = (newLevel) => {
    setLevel(newLevel);
  };

  return (
    <LevelContext.Provider value={{ level, updateLevel }}>
      {children}
    </LevelContext.Provider>
  );
};

export const useLevel = () => useContext(LevelContext);

export default LevelProvider;
