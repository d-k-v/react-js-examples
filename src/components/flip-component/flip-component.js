import React, { useEffect, useRef, useState } from "react";
import "./flip-component.css";
function FlipComponent({
  isFlip = false,
  comp2,
  comp1,
  className,
  flipVertical = false,
}) {
  const flipRef = useRef(null);
  const comp1Ref = useRef(null);
  const comp2Ref = useRef(null);
  useEffect(() => {
    console.log(
      "comp1Ref.current.style.display",
      comp1Ref.current.style.display
    );
    console.log(
      "comp2Ref.current.style.display",
      comp2Ref.current.style.display
    );
    setTimeout(() => {
      if (!isFlip) {
        comp1Ref.current.style.display = "block";
        comp2Ref.current.style.display = "none";
      } else {
        comp1Ref.current.style.display = "none";
        comp2Ref.current.style.display = "block";
      }
    }, 400);
  }, [isFlip]);

  return (
    <div
      ref={flipRef}
      className={` ${className} flip-container ${
        isFlip ? (flipVertical ? "flip-vertical " : "flip-horizontal") : ""
      }`}
    >
      <div ref={comp1Ref} style={{ display: "block" }} className="comp1">
        {comp1}
      </div>

      <div
        ref={comp2Ref}
        style={{ display: "none" }}
        className={`comp2 ${
          flipVertical ? "comp2-vertical" : "comp2-horizontal"
        }`}
      >
        {comp2}
      </div>
    </div>
  );
}

export default FlipComponent;
