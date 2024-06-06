import React, { useState, useMemo, useEffect, useRef } from "react";

const UseRefExample = () => {
  const btnRef = useRef();

  return (
    <div style={{ marginTop: 100 }}>
      <div>Use Ref Component</div>
      <br />
      <button
        ref={btnRef}
        style={{ display: "none" }}
        onClick={() => console.log("Disabled Button Clicked")}
      >
        Disabled Button
      </button>
      <button
        onClick={() => {
          btnRef.current.click();
          btnRef.current.style.display = "block";
          btnRef.current.style.cssText = `
            padding: 10px;
            border-radius: 10px;
            background-color: red;
          `;
        }}
      >
        Enabled Button
      </button>
    </div>
  );
};

const HooksExamples = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // Using useMemo to optimize expensive calculations
  const bigCalc = useMemo(() => {
    console.log("Calculating...");
    return count * 2;
  }, [count]);

  // Using useEffect to perform side effects
  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Expensive Calculation: {bigCalc}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment Count
      </button>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something"
      />

      <UseRefExample />
    </div>
  );
};

export default HooksExamples;
