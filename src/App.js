import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const APP_ID = "494d6cad";
  const APP_KEY = "8b3c2862349fd8d9e98d855a920ad00d";

  const req = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Effect is running.");
  });

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button
          onClick={() => setCounter(counter + 1)}
          className="search-button"
          type="submit"
        >
          {counter}
        </button>
      </form>
    </div>
  );
};

export default App;
