import { Meta, StoryObj } from "@storybook/react";
import { Tabs } from ".";
import { ProductCard } from "../../006-14-09-2024-react-katas/03_ProductCard";
import { TodoList } from "../../006-14-09-2024-react-katas/01_TodoList";
import { CharacterCounter } from "../../004-03-09-2024-react-katas/01_CharacterCounter";
import { Quote } from "../../006-14-09-2024-react-katas/02_Quote";
import { ProfileCard } from "../../002-29-08-2024-react-katas/ProfileCard";

const meta: Meta<typeof Tabs> = {
  title: "Components/008-28-09-2024-react-katas/Tabs",
  component: Tabs,
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    tabs: [
      {
        label: "Product",
        content: (
          <ProductCard
            name={"Футболка Bear"}
            price={1000}
            image={"https://placebear.com/200/300"}
          />
        ),
        key: "Product",
      },
      {
        label: "TodoList",
        content: (
          <TodoList
            initialItems={[
              "Помыть посуду",
              "Убраться в спальне",
              "Проверить почту",
            ]}
          />
        ),
        key: "TodoList",
      },
      {
        label: "CharacterCounter",
        content: <CharacterCounter />,
        key: "CharacterCounter",
      },
      {
        label: "ProfileCard",
        content: (
          <ProfileCard
            name={"Иван Иванов"}
            job={"Разработчик"}
            avatar={"https://placebear.com/g/200/200"}
          />
        ),
        key: "ProfileCard",
      },
      {
        label: "Quote",
        content: (
          <Quote
            text={"Лучший способ предсказать будущее - это создать его."}
            author={"Авраам Линкольн"}
          />
        ),
        key: "Quote",
      },
    ],
  },
};
