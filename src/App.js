import { useState } from "react";
import "./App.css";
import Button from "./Button";

function App() {
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

export default App;
