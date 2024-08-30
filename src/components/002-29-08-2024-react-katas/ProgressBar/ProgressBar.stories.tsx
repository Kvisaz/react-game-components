import { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from ".";

const meta: Meta<typeof ProgressBar> = {
  title: "Components/002-29-08-2024-react-katas/ProgressBar",
  component: ProgressBar,
  argTypes: {
    progress: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
    width: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
    colorBg: { control: "color" },
    colorBar: { control: "color" },
    colorText: { control: "color" },
  },
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    progress: 0,
    width: 100,
  },
};
