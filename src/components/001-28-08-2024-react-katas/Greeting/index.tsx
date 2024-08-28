interface GreetingProps {
  name: string;
}

export const Greeting = ({ name = "мир" }: GreetingProps) => {
  return <p>Hello, {name}!</p>;
};
