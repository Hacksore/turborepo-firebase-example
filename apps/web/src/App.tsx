import { useEffect, useState } from "react";
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
      <header className="App-header">From API: {JSON.stringify(data)}</header>
    </div>
  );
}

export default App;
