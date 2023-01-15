export function getButtonText(type) {
  if (type === "red") {
    return "Change to blue";
  }

  return "Change to red";
}

export function getButtonStyle(type, disabled) {
  if (disabled) {
    return {
      backgroundColor: "gray",
    };
  }

  if (type === "red") {
    return {
      backgroundColor: "red",
    };
  }

  return {
    backgroundColor: "blue",
  };
}
