import logo from "./logo-image.png";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary defaultKeyword="mountain" />
      </main>
      <footer className="App-footer">
        <small>Coded by Arameh Soltani</small>
      </footer>
    </div>
  );
}

export default App;
