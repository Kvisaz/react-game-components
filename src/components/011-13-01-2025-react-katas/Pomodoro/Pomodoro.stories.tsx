import { Meta, StoryObj } from "@storybook/react";
import { Pomodoro } from ".";

const meta: Meta<typeof Pomodoro> = {
  title: "Components/011-13-01-2025-react-katas/Pomodoro",
  component: Pomodoro,
  parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj<typeof Pomodoro>;

export const Default: Story = { args: {} };
