interface ListProps {
  items: Array<string>;
}

export const List = ({ items = ["apple", "banana", "orange"] }: ListProps) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};
