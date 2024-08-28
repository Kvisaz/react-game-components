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
    items: [
      { name: "молоко", key: "list-молоко" },
      { name: "хлеб", key: "list-хлеб" },
      { name: "огурцы", key: "list-огурцы" },
      { name: "халва", key: "list-халва" },
    ],
  },
};
