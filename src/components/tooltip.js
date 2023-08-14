import React, { useEffect, useRef, useState } from "react";

function ToolTip({ children, toolTipText = "Sample Text" }) {
  const childRef = useRef(null);
  const [isHover, setIsHover] = useState("none");
  const overFunction = (e) => {
    setIsHover("flex");
  };
  const outFunction = (e) => {
    setIsHover("none");
  };
  useEffect(() => {
    console.log("enter");
    childRef.current.addEventListener("mouseover", overFunction);
    childRef.current.addEventListener("mouseout", outFunction);
    return () => {
      /** Not sure why this giving Warning */
      //   childRef.current.addEventListener("mouseover", overFunction);
      //   childRef.current.addEventListener("mouseout", outFunction);
    };
  }, []);
  const backgroundcolor = isHover !== "none" ? "lightgrey" : "white";
  return (
    <span
      ref={childRef}
      style={{
        position: "relative",
        height: "fit-content",
        width: "fit-content",
        display: "flex",
        justifyContent: "center",
        cursor: "pointer",
        borderRadius: "5px",
        background: backgroundcolor,
      }}
    >
      <div
        style={{
          position: "absolute",
          background: "grey",
          color: "white",
          bottom: "-25px",
          padding: "1px 4px",
          justifyContent: "center",
          display: isHover,
        }}
      >
        <div
          style={{
            width: "10px",
            height: "10px",
            position: "absolute",
            background: "grey",
            top: "-2px",
            transform: "rotate(45deg)",
          }}
        ></div>
        {toolTipText}
      </div>
      {children}
    </span>
  );
}

export default ToolTip;
