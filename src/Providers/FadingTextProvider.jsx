import { createContext, useContext, useState } from "react";

const defaultContext = {
  enabeled: true,
};

const ScrollingTextContext = createContext(defaultContext);

const ScrollingTextProvider = ({ children }) => {
  const [scrollingTextEnabeled, setScrollingTextEnabled] = useState(true);

  const updateScrollingTextEnabeled = (newEnabeled) => {
    setScrollingTextEnabled(newEnabeled);
  };

  return (
    <ScrollingTextContext.Provider value={{scrollingTextEnabeled, updateScrollingTextEnabeled}}>
      {children}
    </ScrollingTextContext.Provider>
  );
};

export const useScrollingText = () => useContext(ScrollingTextContext);

export default ScrollingTextProvider;
