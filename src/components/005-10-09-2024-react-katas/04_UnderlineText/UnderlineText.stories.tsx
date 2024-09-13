import { Meta, StoryObj } from "@storybook/react";
import { UnderlineText } from ".";

const meta: Meta<typeof UnderlineText> = {
  title: "Components/005-10-09-2024-react-katas/UnderlineText",
  component: UnderlineText,
};

export default meta;

type Story = StoryObj<typeof UnderlineText>;

export const Default: Story = { args: { text: "Важная информация!" } };
