import { StoryObj } from "@storybook/react";
import { Image } from ".";

const meta: Meta<typeof Image> = {
  title: "Components/001-28-08-2024-react-katas/Image",
  component: Image,
};

export default meta;

type Story = StoryObj<typeof Image>;

export const DefaultStory: Story = {};

export const ImageExampleDomain: Story = {
  args: { src: "https://example.com/image.jpg" },
};

export const ImageBear: Story = {
  args: { src: "https://placebear.com/g/200/200" },
};
