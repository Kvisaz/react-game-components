import { Meta, StoryObj } from "@storybook/react";
import { Coin } from ".";

const meta: Meta<typeof Coin> = {
  title: "Components/009-07-10-2024-react-katas/Coin",
  component: Coin,
};

export default meta;

type Story = StoryObj<typeof Coin>;

export const Default: Story = { args: { value: 1 } };
