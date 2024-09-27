import { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from ".";
import { Quote } from "../../006-14-09-2024-react-katas/02_Quote/index.tsx";
import { UnderlineText } from "../../005-10-09-2024-react-katas/04_UnderlineText/index.tsx";
import { ProductCard } from "../../006-14-09-2024-react-katas/03_ProductCard/index.tsx";

const meta: Meta<typeof Tooltip> = {
  title: "Components/007-26-09-2024-react-katas/Tooltip",
  component: Tooltip,
  argTypes: {
    position: {
      control: { type: "select" },
      options: ["top", "right", "bottom", "left"],
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    position: "top",
    text: "It's a normal div!",
    children: (
      <div
        style={{ width: "100px", height: "100px", backgroundColor: "grey" }}
      ></div>
    ),
  },
};

export const QuoteAsChild: Story = {
  args: {
    position: "top",
    text: "It's a React component Quote!",
    children: (
      <Quote
        text={"Лучший способ предсказать будущее - это создать его."}
        author={"Авраам Линкольн"}
      />
    ),
  },
};

export const UnderlineTextAsChild: Story = {
  args: {
    position: "top",
    text: "It's a React component  UnderlineText!",
    children: <UnderlineText text={"Важная информация!"} />,
  },
};

export const ProductCardAsChild: Story = {
  args: {
    position: "top",
    text: "It's a React component  ProductCard!",
    children: (
      <ProductCard
        name={"Футболка Bear"}
        price={1000}
        image={"https://placebear.com/200/300"}
      />
    ),
  },
};
