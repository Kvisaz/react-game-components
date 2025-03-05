import { Meta, StoryObj } from "@storybook/react";
import { Deprecated_Timer } from ".";

const meta: Meta<typeof Deprecated_Timer> = {
  title: "Components/011-13-01-2025-react-katas/Deprecated_Timer",
  component: Deprecated_Timer,
  parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj<typeof Deprecated_Timer>;

export const Default: Story = { args: {} };
