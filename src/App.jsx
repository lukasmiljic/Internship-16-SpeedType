import Home from "./Pages/Home/Home";
import Practice from "./Pages/Practice/Practice";
import ScrollingTextProvider from "./Providers/FadingTextProvider";
import LevelProvider from "./Providers/LevelProvider";
import WordsPerMinuteProvider from "./Providers/WordsPerMinuteProvider";
import ModeProvider from "./Providers/ModeProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <LevelProvider>
        <WordsPerMinuteProvider>
          <ScrollingTextProvider>
            <ModeProvider>
              <Router>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/:mode" element={<Practice />} />
                </Routes>
              </Router>
            </ModeProvider>
          </ScrollingTextProvider>
        </WordsPerMinuteProvider>
      </LevelProvider>
    </>
  );
}

export default App;
