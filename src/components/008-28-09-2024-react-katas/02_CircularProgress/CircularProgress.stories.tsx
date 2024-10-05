import { Meta, StoryObj } from "@storybook/react";
import { CircularProgress } from ".";

const meta: Meta<typeof CircularProgress> = {
  title: "Components/008-28-09-2024-react-katas/CircularProgress",
  component: CircularProgress,
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
  },
};

export default meta;

type Story = StoryObj<typeof CircularProgress>;

export const Default: Story = {
  args: { value: 45 },
};
