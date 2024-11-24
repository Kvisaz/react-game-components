import { Meta, StoryObj } from "@storybook/react";
import { TicTacToe } from ".";

const meta: Meta<typeof TicTacToe> = {
  title: "Components/010-28-10-2024-react-katas/TicTacToe",
  component: TicTacToe,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof TicTacToe>;

export const Default: Story = { args: {} };
