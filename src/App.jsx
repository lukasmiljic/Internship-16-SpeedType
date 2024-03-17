import Home from "./Pages/Home/Home";
import WordsPerMinuteProvider from "./Providers/WordsPerMinuteProvider";

function App() {
  return (
    <>
      <WordsPerMinuteProvider>
        <Home />
      </WordsPerMinuteProvider>
    </>
  );
}

export default App;
