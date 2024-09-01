import { Meta, StoryObj } from "@storybook/react";
import { Link } from ".";

const meta: Meta<typeof Link> = {
  title: "Components/003-31-08-2024-react-katas/Link",
  component: Link,
  argTypes: {
    href: { control: "text" },
    text: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    href: "https://example.com/",
    text: "Ссылка на https://example.com/",
  },
};
