import { Meta, StoryObj } from "@storybook/react";
import { ImageCaption } from ".";

const meta: Meta<typeof ImageCaption> = {
  title: "Components/005-10-09-2024-react-katas/ImageCaption",
  component: ImageCaption,
};

export default meta;

type Story = StoryObj<typeof ImageCaption>;

export const Default: Story = {
  args: { src: "https://placebear.com/300/300", caption: "Красивый пейзаж" },
};
