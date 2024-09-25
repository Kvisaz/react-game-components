import { Meta, StoryObj } from "@storybook/react";
import { TodoList } from ".";

const meta: Meta<typeof TodoList> = {
  title: "Components/006-14-09-2024-react-katas/TodoList",
  component: TodoList,
  argTypes: { initialItems: { control: "object" } },
};

export default meta;

type Story = StoryObj<typeof TodoList>;

export const Default: Story = {
  args: {
    initialItems: ["Помыть посуду", "Убраться в спальне", "Проверить почту"],
  },
};

export const EmptyArgs: Story = {
  args: {},
};
