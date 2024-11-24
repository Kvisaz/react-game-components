import { Meta, StoryObj } from "@storybook/react";
import { Square } from ".";

const meta: Meta<typeof Square> = {
  title: "Components/010-28-10-2024-react-katas/TicTacToe/Square",
  component: Square,
};

export default meta;

type Story = StoryObj<typeof Square>;

export const Default: Story = { args: {} };
