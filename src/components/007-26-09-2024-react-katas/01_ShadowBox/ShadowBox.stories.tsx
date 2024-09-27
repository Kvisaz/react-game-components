import { Meta, StoryObj } from "@storybook/react";
import { ShadowBox } from ".";
import { Quote } from "../../006-14-09-2024-react-katas/02_Quote/index.tsx";
import { UnderlineText } from "../../005-10-09-2024-react-katas/04_UnderlineText/index.tsx";
import { ProductCard } from "../../006-14-09-2024-react-katas/03_ProductCard/index.tsx";

const meta: Meta<typeof ShadowBox> = {
  title: "Components/007-26-09-2024-react-katas/ShadowBox",
  component: ShadowBox,
};

export default meta;

type Story = StoryObj<typeof ShadowBox>;

export const Default: Story = {
  args: {
    children: (
      <div
        style={{ width: "100px", height: "100px", backgroundColor: "grey" }}
      ></div>
    ),
  },
};

export const QuoteAsChild: Story = {
  args: {
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
    children: <UnderlineText text={"Важная информация!"} />,
  },
};

export const ProductCardAsChild: Story = {
  args: {
    children: (
      <ProductCard
        name={"Футболка Bear"}
        price={1000}
        image={"https://placebear.com/200/300"}
      />
    ),
  },
};
