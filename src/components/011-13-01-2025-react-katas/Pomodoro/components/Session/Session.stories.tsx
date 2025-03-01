import { Meta, StoryObj } from "@storybook/react";
import { Session } from ".";

const meta: Meta<typeof Session> = {
  title: "Components/011-13-01-2025-react-katas/SessionLog",
  component: Session,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Session>;

export const Default: Story = { args: {} };
