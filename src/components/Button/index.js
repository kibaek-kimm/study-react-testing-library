import { useState } from "react";
import { getButtonText, getButtonStyle } from "./helper";

export default function Button({ disabled, ...props }) {
  const [variant, setVariant] = useState("MediumVioletRed");

  const handleClick = () => {
    setVariant(
      variant === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed"
    );
  };

  return (
    <button
      onClick={handleClick}
      style={getButtonStyle(variant, disabled)}
      disabled={disabled}
      {...props}
    >
      {getButtonText(variant)}
    </button>
  );
}
