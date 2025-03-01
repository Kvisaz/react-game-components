import { Meta, StoryObj } from "@storybook/react";
import { Timer } from ".";

const meta: Meta<typeof Timer> = {
  title: "Components/011-13-01-2025-react-katas/Timer",
  component: Timer,
  parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj<typeof Timer>;

export const Default: Story = { args: {} };
