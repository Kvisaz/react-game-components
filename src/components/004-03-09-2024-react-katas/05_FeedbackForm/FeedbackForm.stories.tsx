import { Meta, StoryObj } from "@storybook/react";
import { FeedbackForm } from ".";

const meta: Meta<typeof FeedbackForm> = {
  title: "Components/004-03-09-2024-react-katas/FeedbackForm",
  component: FeedbackForm,
};

export default meta;

type Story = StoryObj<typeof FeedbackForm>;

export const Default: Story = {};
