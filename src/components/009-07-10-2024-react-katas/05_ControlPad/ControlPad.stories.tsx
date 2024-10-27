import { Meta, StoryObj } from "@storybook/react";
import { ControlPad } from ".";

const meta: Meta<typeof ControlPad> = {
  title: "Components/009-07-10-2024-react-katas/ControlPad",
  component: ControlPad,
};

export default meta;

type Story = StoryObj<typeof ControlPad>;

export const Default: Story = {
  args: {
    onClick: (direction) => {
      console.log("Component ControlPad: Button " + direction + " is pressed.");
    },
  },
};
