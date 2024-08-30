import { Meta, StoryObj } from "@storybook/react";
import { ToggleSwitch } from ".";

const meta: Meta<typeof ToggleSwitch> = {
  title: "Components/002-29-08-2024-react-katas/ToggleSwitch",
  component: ToggleSwitch,
};

export default meta;

type Story = StoryObj<typeof ToggleSwitch>;

export const Default: Story = {
  args: {
    onSwitch: (on) => console.log(`switch is ${on}`),
  },
};
