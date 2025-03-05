import { Meta, StoryObj } from "@storybook/react";
import { Deprecated_MainLogs } from ".";

const meta: Meta<typeof Deprecated_MainLogs> = {
  title: "Components/011-13-01-2025-react-katas/Deprecated_MainLogs",
  component: Deprecated_MainLogs,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Deprecated_MainLogs>;

export const Default: Story = { args: {} };
