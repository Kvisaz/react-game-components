import { Meta, StoryObj } from "@storybook/react";
import { ProductCard } from ".";

const meta: Meta<typeof ProductCard> = {
  title: "Components/006-14-09-2024-react-katas/ProductCard",
  component: ProductCard,
};

export default meta;

type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
  args: {
    name: "Футболка Bear",
    price: 1000,
    image: "https://placebear.com/200/300",
  },
};
