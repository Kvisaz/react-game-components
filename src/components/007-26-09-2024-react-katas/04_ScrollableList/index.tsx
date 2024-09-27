import styles from "./ScrollableList.module.css";
interface ScrollableListProps {
  items: Array<string>;
}
export const ScrollableList = ({ items }: ScrollableListProps) => {
  return (
    <ul className={styles.list}>
      {items.map((text, index) => (
        <li
          className={styles.item}
          key={
            "todo_" + (index + 1) + "_" + text.slice(0, 10).replace(/ /g, "")
          }
        >
          <p>{text}</p>
        </li>
      ))}
    </ul>
  );
};
