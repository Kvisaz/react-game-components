import { useState } from "react";
import styles from "./ToggleSwitch.module.css";

interface ToggleSwitch {
  onSwitch: (on: boolean) => void;
}

export const ToggleSwitch = ({ onSwitch }: ToggleSwitch) => {
  const [isOn, setIsOn] = useState(false);
  const handleOnChange = () => {
    const newState = !isOn;
    setIsOn(newState);
    onSwitch(newState);
  };
  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        id="switch"
        checked={isOn}
        onChange={handleOnChange}
      />
      <label htmlFor="switch">Toggle</label>
    </div>
  );
};
