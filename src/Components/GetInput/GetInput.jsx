import React, { useEffect, useState } from "react";
import "./GetInput.css";
const GetInput = () => {

  const [inputValue, setInput] = useState();
  console.log({inputValue:inputValue});

  useEffect(()=>{
    document.title ="Get Input"
  })

  return (
    <div>
      {/*Div for Background*/}
      <div className="bg text-center">
        {/*Div for Centered Text & Input*/}
        <div className="centered">
          <p className="firstLine">
            {" "}
            E &nbsp; M &nbsp; A &nbsp; I &nbsp; L &nbsp; . &nbsp; M &nbsp; E{" "}
          </p>
          <p className="secondLine">
            {inputValue || "Input Value Will Show Here"}
          </p>
          <p>
            {" "}
            <input
              className="InputStyle"
              placeholder="Email me when it's ready"
              style={{ fontFamily: "Arial, FontAwesome" }}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetInput;
