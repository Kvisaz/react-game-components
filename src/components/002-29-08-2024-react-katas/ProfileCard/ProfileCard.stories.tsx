import { Meta, StoryObj } from "@storybook/react";
import { ProfileCard } from ".";

const meta: Meta<typeof ProfileCard> = {
  title: "Components/002-29-08-2024-react-katas/ProfileCard",
  component: ProfileCard,
};

export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {
  args: {
    name: "Иван Иванов",
    job: "Разработчик",
    avatar: "https://placebear.com/g/200/200",
  },
};
