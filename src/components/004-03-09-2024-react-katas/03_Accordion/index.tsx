import { useState } from "react";
import styles from "./Accordion.module.css";

interface AccordionSection {
  title: string;
  content: string;
  key: string;
}

interface AccordionProps {
  sections: AccordionSection[];
}

const defaultSections: AccordionSection[] = [
  {
    title: "Секция 1",
    content: "Содержимое секции 1",
    key: "defaultTestSection__01",
  },
  {
    title: "Секция 2",
    content: "Содержимое секции 2",
    key: "defaultTestSection__02",
  },
  {
    title: "Секция 3",
    content: "Содержимое секции 3",
    key: "defaultTestSection__03",
  },
];

export const Accordion = ({ sections = defaultSections }: AccordionProps) => {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setActiveSection((prevSection: number | null) => {
      console.log("index");
      return prevSection === index ? null : index;
    });
  };

  return (
    <div className={styles.accordion_container}>
      {sections.map((section, index) => (
        <article
          className={styles["accordion__article"]}
          key={section.key}
          style={activeSection === index ? { border: "none" } : undefined}
        >
          <header className={styles["accordion__article__header"]}>
            <label
              className={styles["accordion__article__header__label"]}
              htmlFor={
                "accordion__article__header__label__button__" + section.key
              }
            >
              <h2 className={styles["accordion__article__header__label__h2"]}>
                {section.title}
              </h2>
              <button
                id={"accordion__article__header__label__button__" + section.key}
                className={styles["accordion__article__header__label__button"]}
                onClick={() => toggleSection(index)}
              ></button>
            </label>
          </header>
          {activeSection === index && (
            <div className={styles["accordion__article__content"]}>
              <p className={styles["accordion__article__content__p"]}>
                {section.content}
              </p>
            </div>
          )}
        </article>
      ))}
    </div>
  );
};
