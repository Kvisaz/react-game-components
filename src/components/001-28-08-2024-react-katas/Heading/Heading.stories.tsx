import { Meta, StoryObj } from "@storybook/react";
import { Heading } from ".";

const meta: Meta<typeof Heading> = {
  title: "Components/001-28-08-2024-react-katas/Heading",
  component: Heading,
};
export default meta;

type Story = StoryObj<typeof Heading>;

export const DefaultStory: Story = {};

export const Heading1AnImportantTopic: Story = {
  args: {
    text: "An important topic",
  },
};

export const Heading2LessImportantTopic: Story = {
  args: {
    text: "Less important topic",
    headingLevel: "h2",
  },
};

export const Heading3SubTopic: Story = {
  args: {
    text: "Sub-topic",
    headingLevel: "h3",
  },
};
