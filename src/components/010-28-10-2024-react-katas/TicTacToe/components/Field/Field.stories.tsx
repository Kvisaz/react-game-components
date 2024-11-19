import { Meta, StoryObj } from "@storybook/react";
import { Field } from ".";

const meta: Meta<typeof Field> = {
  title: "Components/010-28-10-2024-react-katas/TicTacToe/Field",
  component: Field,
};

export default meta;

type Story = StoryObj<typeof Field>;

export const Default: Story = { args: {} };
