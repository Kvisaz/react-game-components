import { useState } from "react";
import styles from "./TabPanel.module.css";

interface Tab {
  name: string;
  content: string;
  key: string;
}

interface TabPanelProps {
  tabs: Tab[];
}

const DefaultTabs: Tab[] = [
  {
    name: "Главная",
    content: "Содержимое главной вкладки",
    key: "test-tab-01-key",
  },
  { name: "О нас", content: "Информация о компании", key: "test-tab-02-key" },
  {
    name: "Контакты",
    content: "Наши контактные данные",
    key: "test-tab-03-key",
  },
];

export const TabPanel = ({ tabs = DefaultTabs }: TabPanelProps) => {
  const [activeTab, setActiveTab] = useState<null | number>(null);
  const toggleTab = (index: number) => {
    setActiveTab((activeTab) => (activeTab === index ? null : index));
  };
  return (
    <div className={styles["tab-panel"]}>
      <div className={styles["tab-panel__head"]}>
        {tabs.map((tab, index) => (
          <label
            className={
              styles["tab-panel__head__label"] +
              (activeTab === index ? " " + styles["label-selected"] : "")
            }
            htmlFor={tab.key + "__button"}
          >
            <h2>{tab.name}</h2>
            <button
              id={tab.key + "__button"}
              onClick={() => toggleTab(index)}
            ></button>
          </label>
        ))}
      </div>
      <div className={styles["tab-panel__content"]}>
        {activeTab !== null ? tabs[activeTab].content : undefined}
      </div>
    </div>
  );
};
