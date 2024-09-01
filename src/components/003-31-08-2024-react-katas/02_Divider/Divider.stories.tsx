import { Meta, StoryObj } from "@storybook/react";
import { Divider } from ".";

const meta: Meta<typeof Divider> = {
  title: "Components/003-31-08-2024-react-katas/Divider",
  component: Divider,
  argTypes: {
    color: { control: { type: "color" } },
    height: { control: { type: "range", min: 0, max: 600, step: 1 } },
    widthPercent: { control: { type: "range", min: 0, max: 100, step: 1 } },
    centered: { control: { type: "boolean" } },
  },
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: { color: "#6a6868", height: 5, widthPercent: 100, centered: true },
};
