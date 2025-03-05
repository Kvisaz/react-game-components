import { Meta, StoryObj } from "@storybook/react";
import { Deprecated_Log } from ".";

const meta: Meta<typeof Deprecated_Log> = {
  title: "Components/011-13-01-2025-react-katas/Deprecated_Log",
  component: Deprecated_Log,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Deprecated_Log>;

export const Default: Story = { args: {} };
