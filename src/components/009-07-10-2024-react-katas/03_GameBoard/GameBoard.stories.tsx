import { Meta, StoryObj } from "@storybook/react";
import { GameBoard } from ".";

const meta: Meta<typeof GameBoard> = {
  title: "Components/009-07-10-2024-react-katas/GameBoard",
  component: GameBoard,
};

export default meta;

type Story = StoryObj<typeof GameBoard>;

export const Default: Story = { args: { rows: 10, columns: 10 } };
