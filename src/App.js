
import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather />
      <footer>
        This project was created by <a href="https://elegant-daffodil-345aac.netlify.app/" target="_blank">Ruby Smith</a> and is {" "}
        <a href="https://github.com/Roobsk91/react-final-project" target="_blank">
        open-sourced on GitHub.
      </a>
      </footer>
      </div>
    </div>
  );
}

export default App;
