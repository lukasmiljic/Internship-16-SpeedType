import { createContext, useContext, useState } from "react";

const modes = ["play", "instant death", "practice"];

const defaultContext = {
  mode: modes[0],
};

const ModeContext = createContext(defaultContext);

const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState(modes[0]);

  const updateMode = (newMode) => {
    setMode(newMode);
  };

  return (
    <ModeContext.Provider value={{ mode, updateMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = () => useContext(ModeContext);

export default ModeProvider;
