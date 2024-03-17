import Home from "./Pages/Home/Home";
import LevelProvider from "./Providers/LevelProvider";
import WordsPerMinuteProvider from "./Providers/WordsPerMinuteProvider";

function App() {
  return (
    <>
      <LevelProvider>
        <WordsPerMinuteProvider>
          <Home />
        </WordsPerMinuteProvider>
      </LevelProvider>
    </>
  );
}

export default App;
