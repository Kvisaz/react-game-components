import { Meta, StoryObj } from "@storybook/react";
import { Avatar } from ".";

const meta: Meta<typeof Avatar> = {
  title: "Components/003-31-08-2024-react-katas/Avatar",
  component: Avatar,
  argTypes: {
    size: { control: { type: "range", min: 0, max: 600, step: 1 } },
    name: { control: { type: "text" } },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = { args: { size: 50, name: "KOfW" } };
