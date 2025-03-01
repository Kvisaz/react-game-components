import { Meta, StoryObj } from "@storybook/react";
import { Header } from ".";

const meta: Meta<typeof Header> = {
  title: "Components/011-13-01-2025-react-katas/Header",
  component: Header,
  parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = { args: {} };
