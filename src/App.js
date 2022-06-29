import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="app-header">Dictionary app</header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="app-footer">Coded by Elisabeth Barmentlo</footer>
      </div>
    </div>
  );
}

export default App;
