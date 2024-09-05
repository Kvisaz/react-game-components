import { useState } from "react";
import styles from "./CharacterCounter.module.css";

export const CharacterCounter = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <div className={styles["character-counter"]}>
      <label htmlFor={styles["upper_textarea"]}>
        Посчитайте количество знаков:
      </label>
      <textarea
        onChange={handleInputChange}
        value={inputValue}
        id={styles["upper_textarea"]}
        placeholder={"Введите текст..."}
      ></textarea>
      <p
        className={styles["character-counter__input-length"]}
      >{`Количество символов: ${inputValue.length}`}</p>
    </div>
  );
};
