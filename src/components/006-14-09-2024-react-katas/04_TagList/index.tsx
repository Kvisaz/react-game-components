import styles from "./TagList.module.css";

interface TagListProps {
  tags: Array<string>;
}

export const TagList = ({ tags }: TagListProps) => {
  return (
    <ul className={styles.list}>
      {tags.map((tag, index) => {
        return (
          <li className={styles.tag} key={index}>
            {tag}
          </li>
        );
      })}
    </ul>
  );
};
