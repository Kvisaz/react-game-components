import { Meta, StoryObj } from "@storybook/react";
import { Quote } from ".";

const meta: Meta<typeof Quote> = {
  title: "Components/006-14-09-2024-react-katas/Quote",
  component: Quote,
};

export default meta;

type Story = StoryObj<typeof Quote>;

export const Default: Story = {
  args: {
    text: "Лучший способ предсказать будущее - это создать его.",
    author: "Авраам Линкольн",
  },
};
