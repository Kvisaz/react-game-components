import { Meta, StoryObj } from "@storybook/react";
import { TabPanel } from ".";

const meta: Meta<typeof TabPanel> = {
  title: "Components/004-03-09-2024-react-katas/TabPanel",
  component: TabPanel,
  argTypes: { tabs: { control: "object" } },
};

export default meta;

type Story = StoryObj<typeof TabPanel>;

export const Default: Story = {
  args: {
    tabs: [
      {
        name: "Главная",
        content: "Содержимое главной вкладки",
        key: "test-tab-01-key",
      },
      {
        name: "О нас",
        content: "Информация о компании",
        key: "test-tab-02-key",
      },
      {
        name: "Контакты",
        content: "Наши контактные данные",
        key: "test-tab-03-key",
      },
    ],
  },
};
