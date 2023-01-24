import { useState } from "react";
import Button from "../Button";

export function replaceCamelWithSpace(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

export default function ButtonTestPage() {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <Button disabled={checked} />
      <input
        readOnly
        id="disabled-button"
        type="checkbox"
        checked={checked}
        onClick={(e) => setChecked(e.target.checked)}
      />
      <label htmlFor="disabled-button">Disable button</label>
    </div>
  );
}
