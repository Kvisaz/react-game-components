import { useState } from "react";
import styles from "./ToggleSwitch.module.css";

interface ToggleSwitchProps {
  onSwitch: (on: boolean) => void;
}

export const ToggleSwitch = ({ onSwitch }: ToggleSwitchProps) => {
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
