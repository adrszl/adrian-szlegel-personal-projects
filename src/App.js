import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Adrian Szlegel - Personal Projects
        </p>
        <p>This portfolio website will present all the personal projects created by Adrian Szlegel. For now app is in development. For more info visit the website below</p>
        <a
          className="App-link"
          href="https://adrszl.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Adrian Szlegel
        </a>
      </header>
    </div>
  );
}

export default App;
