import { useEffect, useState } from "react";
import { sanitizeName } from "shared/util";

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
      <header className="header">
        <div className="icon-wrap">
          <img className="icon-firebase" src="/firebase.svg" />
          <div className="icon-divider">+</div>
          <img className="icon-turbo" src="/turborepo.svg" />
        </div>
        <div style={{ textAlign: "left" }}>
          <p style={{ fontWeight: "bold" }}>From firebase function</p>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
        <div style={{ textAlign: "left" }}>
          <p style={{ fontWeight: "bold" }}>Using util from packages/shared</p>
          <pre>{JSON.stringify({
            name: sanitizeName("I like turtles")
          })}</pre>
        </div>
        <div style={{ textAlign: "left" }}>
          <p style={{ fontWeight: "bold" }}>Source code</p>
          <a style={{ color: "lightblue" }} href="https://github.com/Hacksore/turborepo-firebase-example">https://github.com/Hacksore/turborepo-firebase-example</a>
        </div>
      </header>
    </div>
  );
}

export default App;
