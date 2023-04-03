import React, { useState } from "react";
const App = ({ name }) => {
  const [counter, updateCounter] = useState(0);
  const handleChange = (type) => {
    updateCounter((oldCounter) => oldCounter + type);
  };
  return (
    <>
      <h1>{name}</h1>
      <h3>Counter2: {counter}</h3>
      <button onClick={() => handleChange(-1)}>Decrement</button>
      <button onClick={() => handleChange(1)}>Increment</button>
      <Parcel config={() => System.import("@JA/react-parcel")} />
    </>
  );
};
export default App;
