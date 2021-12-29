import React from "react";
import "./App.css";
import Counter from "./components/counter";
import { Button } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  // const [timer,settimer]=useState(0)
  const showHandler = () => {
    setShow(!show);
  };

  return (
    <div className="App">
      <h1>Workshop state </h1>
      <Button variant="danger" onClick={showHandler}>
        {show ? "Hide" : "Show"}
      </Button>
      {show && <Counter />}
    </div>
  );
}
export default App;
