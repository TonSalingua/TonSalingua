import React,{useState} from "react";
export default function Button(){
    const [count, setCount] = useState(0);

  const sayWelcome = (msg) => {
    alert(msg);
  };

  const clickMe = (msg) => {
    alert(msg);
  };

  const stateCount = (msg) => {
    alert(`State of count ${count}`);
  };
    return (
        <div>
          <p>Counter: {count}</p>
          <button
            className="btn"
            onClick={() => {
              stateCount();
              setCount(count + 1);
            }}
          >
            Increment
          </button>
          <br />
          <button
            className="btn"
            onClick={() => {
              stateCount();
              setCount(count - 1);
            }}
          >
            Decrement
          </button>
          <br />
          <button className="btn" onClick={() => sayWelcome("welcome")}>
            Say Welcome
          </button>
          <br />
          <button
            className="btn"
            type="button"
            onClick={() => clickMe("I was clicked")}
          >
            Click On Me
          </button>
          <br />
        </div>
      );
}

