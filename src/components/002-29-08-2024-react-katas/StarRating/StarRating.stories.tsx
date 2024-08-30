import { Meta, StoryObj } from "@storybook/react";
import { StarRating } from ".";

const meta: Meta<typeof StarRating> = {
  title: "Components/002-29-08-2024-react-katas/StarRating",
  component: StarRating,
  argTypes: {
    rating: {
      control: {
        type: "range",
        min: 0,
        max: 5,
        step: 0.1,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof StarRating>;

export const Default: Story = {
  args: {
    rating: 3,
  },
};
