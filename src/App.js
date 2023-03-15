import logo from './logo.svg';
import './App.css';
import Faker from './components/Faker';
import Postcard from './components/Postcard';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Vibely. All we do is send good vibes.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Faker />
        <Postcard />
      </header>
    </div>
  );
}

export default App;
