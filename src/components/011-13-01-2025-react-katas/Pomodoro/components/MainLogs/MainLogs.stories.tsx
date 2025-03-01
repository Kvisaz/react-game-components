import { Meta, StoryObj } from "@storybook/react";
import { MainLogs } from ".";

const meta: Meta<typeof MainLogs> = {
  title: "Components/011-13-01-2025-react-katas/MainLogs",
  component: MainLogs,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof MainLogs>;

export const Default: Story = { args: {} };
