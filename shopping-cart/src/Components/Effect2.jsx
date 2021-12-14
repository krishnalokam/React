import React, { useEffect, useState } from "react";

const Effect2 = function () {
  const [text, setText] = useState("a");
  const [count, setCount] = useState(0);

  useEffect(()=>{
      document.title=`${text}-${count}`;
  },[text,count])

  return (
    <>
      <input
        type="text"
        onChange={(event) => {
          setText(event.target.value);
        }}
      />

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      > Click</button>
      <h1>{text} - {count}</h1>
    </>
  );
};

export default Effect2;
