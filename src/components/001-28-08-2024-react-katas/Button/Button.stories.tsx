import { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Components/001-28-08-2024-react-katas/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const DefaultStory: Story = {};

export const ButtonDontClick: Story = {
  args: {
    label: "Не нажимай меня!",
  },
};

export const ButtonCanClick: Story = {
  args: {
    label: "А теперь можешь нажать",
  },
};
