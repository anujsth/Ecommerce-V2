import logo from "./logo.svg";
import "./App.css";
import { Axios } from "./Axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Axios.get("?query=xbox&country=US").then((res) => {
      console.log(res.data);
      console.log("first");
    }, []);
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
