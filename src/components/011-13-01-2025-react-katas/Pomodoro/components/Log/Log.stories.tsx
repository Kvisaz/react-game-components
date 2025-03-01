import { Meta, StoryObj } from "@storybook/react";
import { Log } from ".";

const meta: Meta<typeof Log> = {
  title: "Components/011-13-01-2025-react-katas/Log",
  component: Log,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Log>;

export const Default: Story = { args: {} };
