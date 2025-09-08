import { ThemeProvider } from "./Components/ThemeContext";
import NoteAppComponent from "./NoteApp/NoteAppComponent";

function App() {
  return (
    <>
      <ThemeProvider>
        <NoteAppComponent />
      </ThemeProvider>
    </>
  );
}

export default App;
