import { Meta, StoryObj } from "@storybook/react";
import { Deprecated_Header } from ".";

const meta: Meta<typeof Deprecated_Header> = {
  title: "Components/011-13-01-2025-react-katas/Deprecated_Header",
  component: Deprecated_Header,
  parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj<typeof Deprecated_Header>;

export const Default: Story = { args: {} };
