import { Meta, StoryObj } from "@storybook/react";
import { UI } from ".";

const meta: Meta<typeof UI> = {
  title: "Components/010-28-10-2024-react-katas/TicTacToe/UI",
  component: UI,
};

export default meta;

type Story = StoryObj<typeof UI>;

export const Default: Story = { args: {} };
