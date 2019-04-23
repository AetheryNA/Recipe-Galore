import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const APP_ID = "494d6cad";
  const APP_KEY = "8b3c2862349fd8d9e98d855a920ad00d";

  const req = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className="App">
      <form>
        <input type="text" />
        <button type="submit"> </button>
      </form>
    </div>
  );
};

export default App;
