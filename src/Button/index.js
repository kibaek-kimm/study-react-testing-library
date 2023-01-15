import { useState } from "react";
import { getButtonText, getButtonStyle } from "./helper";

export default function Button() {
  const [variant, setVariant] = useState("red");

  const handleClick = () => {
    setVariant(variant === "red" ? "blue" : "red");
  };

  return (
    <button onClick={handleClick} style={getButtonStyle(variant)}>
      {getButtonText(variant)}
    </button>
  );
}
