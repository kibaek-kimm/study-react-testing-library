import { replaceCamelWithSpace } from "../ButtonTestPage";

export function getButtonText(type) {
  if (type === "MidnightBlue") {
    return `Change to ${replaceCamelWithSpace("MediumVioletRed")}`;
  }

  return `Change to ${replaceCamelWithSpace("MidnightBlue")}`;
}

export function getButtonStyle(type, disabled) {
  if (disabled) {
    return {
      backgroundColor: "gray",
    };
  }

  if (type === "MediumVioletRed") {
    return {
      backgroundColor: "MediumVioletRed",
    };
  }

  return {
    backgroundColor: "MidnightBlue",
  };
}
