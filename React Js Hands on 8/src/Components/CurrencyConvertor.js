import React, { useState } from "react";

function CurrencyConvertor() {
  const [val, setName] = useState(0);
  var usd = 0.018;
  const handleSubmit = (event) => {
    setName(event.target.value);
  };
  const logValue = (e) => {
    e.preventDefault();
    alert("Converting to USD Amount is " + val * usd);
  };
  return (
    <div>
      Amount: <input type="number" onChange={handleSubmit} />
      <br />
      Currency: <textarea value="Ph to USD" />
      <br />
      <button className="btn" onClick={logValue}>
        Submit
      </button>
    </div>
  );
}
export default CurrencyConvertor;
