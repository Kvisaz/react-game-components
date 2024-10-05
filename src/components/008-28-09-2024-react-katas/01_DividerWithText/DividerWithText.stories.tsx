import { Meta, StoryObj } from "@storybook/react";
import { DividerWithText } from ".";

const meta: Meta<typeof DividerWithText> = {
  title: "Components/008-28-09-2024-react-katas/DividerWithText",
  component: DividerWithText,
};

export default meta;

type Story = StoryObj<typeof DividerWithText>;

export const Default: Story = {
  args: {
    text: "Divider with text",
  },
};
