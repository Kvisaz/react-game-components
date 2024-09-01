import { Meta, StoryObj } from "@storybook/react";
import { Icon } from ".";

const meta: Meta<typeof Icon> = {
  title: "Components/003-31-08-2024-react-katas/Icon",
  component: Icon,
  argTypes: {
    name: {
      control: { type: "select" },
      options: ["search", "file", "folder", "folder-open", "copy"],
    },
    size: {
      control: { type: "select" },
      options: [
        "2xs",
        "xs",
        "sm",
        "lg",
        "xl",
        "2xl",
        "1x",
        "2x",
        "3x",
        "4x",
        "5x",
        "6x",
        "7x",
        "8x",
        "9x",
        "10x",
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: "search",
    size: "3x",
  },
};
