import { Meta, StoryObj } from "@storybook/react";
import { CountdownTimer } from ".";

const meta: Meta<typeof CountdownTimer> = {
  title: "Components/002-29-08-2024-react-katas/CountdownTimer",
  component: CountdownTimer,
  argTypes: {
    seconds: {
      control: { type: "range", min: 0, max: 3600, step: 1 },
    },
  },
};

export default meta;

type Story = StoryObj<typeof CountdownTimer>;

export const Default: Story = {
  args: {
    seconds: 120,
  },
};
