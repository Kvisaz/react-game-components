import { Meta, StoryObj } from "@storybook/react";
import { Counter } from ".";

const meta: Meta<typeof Counter> = {
  title: "Components/003-31-08-2024-react-katas/Counter",
  component: Counter,
  argTypes: {
    count: {
      control: { type: "number" },
      fontSize: { type: "number" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Counter>;

export const Default: Story = {
  args: { count: 1, fontSize: 5 },
};
