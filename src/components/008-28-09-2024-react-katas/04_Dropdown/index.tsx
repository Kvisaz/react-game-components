import { useState } from "react";
import styles from "./Dropdown.module.css";

interface Dropdown {
  options: Array<string>;
}

export const Dropdown = ({ options }: Dropdown) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow((bool) => !bool);
  };
  return (
    <div className={styles.container}>
      <button onClick={handleClick} className={styles.button}>
        Dropdown
      </button>
      <ul
        style={{ visibility: show ? "visible" : "hidden" }}
        className={styles.dropdown}
      >
        {options.map((option, index) => (
          <li className={styles.item} key={option + "-" + index}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};
