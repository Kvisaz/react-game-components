import { Meta, StoryObj } from "@storybook/react";
import { Game } from ".";

const meta: Meta<typeof Game> = {
  title: "Components/010-28-10-2024-react-katas/TicTacToe/Game",
  component: Game,
};

export default meta;

type Story = StoryObj<typeof Game>;

export const Default: Story = {
  args: {},
};
