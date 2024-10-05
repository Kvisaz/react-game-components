import { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from ".";

const meta: Meta<typeof Dropdown> = {
  title: "Components/008-28-09-2024-react-katas/Dropdown",
  component: Dropdown,
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    options: ["Опция 1", "Опция 2", "Опция 3", "Опция 4", "Опция 5"],
  },
};
