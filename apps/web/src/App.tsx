import { useEffect, useState } from "react";
import { iLikeTurtles } from "shared/util";

import "./App.css";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("/api/test")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>From API: {JSON.stringify(data)}</p>
        <p>From shared: {JSON.stringify(iLikeTurtles)}</p>
      </header>
    </div>
  );
}

export default App;
