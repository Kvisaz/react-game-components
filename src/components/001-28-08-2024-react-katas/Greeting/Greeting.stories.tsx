import type { Meta, StoryObj } from "@storybook/react";
import { Greeting } from ".";

const meta: Meta<typeof Greeting> = {
  title: "Components/001-28-08-2024-react-katas/Greeting",
  component: Greeting,
};

export default meta;

type Story = StoryObj<typeof Greeting>;

export const DefaultStory: Story = {};

export const HelloJohn: Story = {
  args: {
    name: "John",
  },
};

export const HelloWorld: Story = {
  args: {
    name: "мир",
  },
};
