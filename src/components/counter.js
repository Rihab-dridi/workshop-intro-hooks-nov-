import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";
function Counter() {
  //step1: create dynamic data == create the state object(this.state )
  const [counter, setCounter] = useState(10);
  //   const [timer, setTimer] = useState(0);
//   const name = "salim";

//step2: state management: we decide how our state is going to change
  const incrementHandler=()=>{
    setCounter(
        counter+1
    )
  }

    //step3: link the function to an event: (onClick)
return (
    <div>
      <div className="conterBtns">
        <Button variant="success" onClick={incrementHandler} >+</Button>
        <Button variant="primary" className="w-25">
          {counter}
        </Button>
        <Button variant="success">-</Button>
      </div>
      <Button variant="secondary">Reset</Button>
    </div>
  );
}
export default Counter;
