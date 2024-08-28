interface ListProps {
  items: Array<string>;
}

export const List = ({ items = ["apple", "banana", "orange"] }: ListProps) => {
  return (
    <ul>
      {items.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </ul>
  );
};
