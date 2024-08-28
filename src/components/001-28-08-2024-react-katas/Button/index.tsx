interface ButtonProps {
  label: string;
}

export const Button = ({ label = "Нажми меня" }: ButtonProps) => {
  return <button>{label}</button>;
};
