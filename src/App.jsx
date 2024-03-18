import Home from "./Pages/Home/Home";
import Practice from "./Pages/Practice/Practice";
import LevelProvider from "./Providers/LevelProvider";
import WordsPerMinuteProvider from "./Providers/WordsPerMinuteProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <LevelProvider>
        <WordsPerMinuteProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Practice" element={<Practice />} />
            </Routes>
          </Router>
        </WordsPerMinuteProvider>
      </LevelProvider>
    </>
  );
}

export default App;
