import { useState } from "react";
import styles from "./FeedbackForm.module.css";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

export const FeedbackForm = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted:", formValues);
    setFormValues({ name: "", email: "", message: "" });
  };
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  return (
    <form onSubmit={handleSubmit} className={styles["feedback-form"]}>
      <div className={styles["input-box"]}>
        <label htmlFor="name">Имя:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          required
        ></input>
      </div>
      <div className={styles["input-box"]}>
        <label>Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          required
        ></input>
      </div>
      <div className={styles["textarea-box"]}>
        <label htmlFor="message">Сообщение:</label>
        <textarea
          id="message"
          name="message"
          value={formValues.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div className={styles["button-box"]}>
        <button type="submit">Отправить</button>
      </div>
    </form>
  );
};
