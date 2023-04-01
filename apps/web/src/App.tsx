import { useEffect, useState } from "react";
import { iLikeTurtles } from "@acme/shared";

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
        <div>
          <div style={{ textAlign: "left" }}>
            <p style={{ fontWeight: "bold" }}>From apps/api (@acme/api)</p>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
          <div style={{ textAlign: "left" }}>
            <p style={{ fontWeight: "bold" }}>
              From packages/shared (@acme/shared)
            </p>
            <pre>{JSON.stringify(iLikeTurtles())}</pre>
          </div>
          <div style={{ textAlign: "left" }}>
            <p style={{ fontWeight: "bold" }}>Source code</p>
            <a
              style={{ color: "lightblue" }}
              href="https://github.com/Hacksore/turborepo-firebase-example"
            >
              https://github.com/Hacksore/turborepo-firebase-example
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
