import React, { useState } from "react";
import styles from "./Tabs.module.css";

interface Tab {
  label: string;
  content: React.ReactNode;
  key: string;
}

interface TabsProps {
  tabs: Array<Tab>;
}

export const Tabs = ({ tabs }: TabsProps) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <div className={styles.box}>
      <ul className={styles.list}>
        {tabs.map((tab, index) => (
          <li className={styles.tab} key={tab.key}>
            <button
              onClick={() => {
                setCurrentTabIndex(index);
              }}
              className={
                styles.tabButton +
                (index === currentTabIndex ? " " + styles.active : "")
              }
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
      <div className={styles.content}>{tabs[currentTabIndex].content}</div>
    </div>
  );
};
