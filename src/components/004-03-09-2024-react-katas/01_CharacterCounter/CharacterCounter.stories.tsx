import { Meta, StoryObj } from "@storybook/react";
import { CharacterCounter } from ".";

const meta: Meta<typeof CharacterCounter> = {
  title: "Components/004-03-09-2024-react-katas/CharacterCounter",
  component: CharacterCounter,
};

export default meta;

type Story = StoryObj<typeof CharacterCounter>;

export const Default: Story = {};
