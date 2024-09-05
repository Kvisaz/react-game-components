import { Meta, StoryObj } from "@storybook/react";
import { Accordion } from ".";

const meta: Meta<typeof Accordion> = {
  title: "Components/004-03-09-2024-react-katas/Accordion",
  component: Accordion,
  argTypes: { sections: { control: "object" } },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    sections: [
      {
        title: "Секция 1",
        content: "Содержимое секции 1",
        key: "defaultTestSection__01",
      },
      {
        title: "Секция 2",
        content: "Содержимое секции 2",
        key: "defaultTestSection__02",
      },
      {
        title: "Секция 3",
        content: "Содержимое секции 3",
        key: "defaultTestSection__03",
      },
    ],
  },
};
