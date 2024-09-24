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
    initialItems: [
      {
        text: "Помыть посуду",
        isChecked: false,
        key: "todo_1_Помытьпосу",
      },
      {
        text: "Убраться в спальне",
        isChecked: true,
        key: "todo_2_Убратьсявс",
      },
      { text: "Проверить почту", isChecked: false, key: "todo_3_Проверитьп" },
    ],
  },
};
