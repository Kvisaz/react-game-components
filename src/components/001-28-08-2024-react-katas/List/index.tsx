interface ListProps {
  items: Array<string>;
}

export const List = ({ items = ["apple", "banana", "orange"] }: ListProps) => {
  return (
    <ul>
      {items.map((text) => (
        <li key={new Date().getTime()}>{text}</li>
      ))}
    </ul>
  );
};
