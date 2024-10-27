import { Meta, StoryObj } from "@storybook/react";
import { StartButton } from ".";

const meta: Meta<typeof StartButton> = {
  title: "Components/009-07-10-2024-react-katas/StartButton",
  component: StartButton,
};

export default meta;

type Story = StoryObj<typeof StartButton>;

export const Default: Story = {
  args: {},
};
