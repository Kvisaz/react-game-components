import { Meta, StoryObj } from "@storybook/react";
import { TagList } from ".";

const meta: Meta<typeof TagList> = {
  title: "Components/006-14-09-2024-react-katas/TagList",
  component: TagList,
};

export default meta;

type Story = StoryObj<typeof TagList>;

export const Default: Story = {
  args: {
    tags: ["react", "javascript", "frontend"],
  },
};
