import { Meta, StoryObj } from "@storybook/react";
import { Deprecated_Session } from ".";

const meta: Meta<typeof Deprecated_Session> = {
  title: "Components/011-13-01-2025-react-katas/Deprecated_Session",
  component: Deprecated_Session,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Deprecated_Session>;

export const Default: Story = { args: {} };
