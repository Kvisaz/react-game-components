import { Meta, StoryObj } from "@storybook/react";
import { List } from ".";

const meta: Meta<typeof List> = {
  title: "Components/001-28-08-2024-react-katas/List",
  component: List,
};

export default meta;

type Story = StoryObj<typeof List>;

export const DefaultStory: Story = {};

export const ShoppingList: Story = {
  args: {
    items: ["молоко", "хлеб", "огурцы", "халва"],
  },
};
