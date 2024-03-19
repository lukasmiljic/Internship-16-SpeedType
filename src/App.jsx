import Home from "./Pages/Home/Home";
import Practice from "./Pages/Practice/Practice";
import ScrollingTextProvider from "./Providers/FadingTextProvider";
import LevelProvider from "./Providers/LevelProvider";
import WordsPerMinuteProvider from "./Providers/WordsPerMinuteProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <LevelProvider>
        <WordsPerMinuteProvider>
          <ScrollingTextProvider>
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Practice" element={<Practice />} />
              </Routes>
            </Router>
          </ScrollingTextProvider>
        </WordsPerMinuteProvider>
      </LevelProvider>
    </>
  );
}

export default App;
