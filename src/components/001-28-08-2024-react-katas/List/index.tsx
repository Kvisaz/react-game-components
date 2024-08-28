interface ListProps {
  items: Array<{ name: string; key: string }>;
}

export const List = ({
  items = [
    { name: "apple", key: "lis-apple" },
    { name: "banana", key: "list-banana" },
    { name: "orange", key: "list-orange" },
  ],
}: ListProps) => {
  return (
    <ul>
      {items.map(({ name, key }) => (
        <li key={key}>{name}</li>
      ))}
    </ul>
  );
};
