import { Meta, StoryObj } from "@storybook/react";
import { TrafficLight } from ".";

const meta: Meta<typeof TrafficLight> = {
  title: "Components/004-03-09-2024-react-katas/TrafficLight",
  component: TrafficLight,
};

export default meta;

type Story = StoryObj<typeof TrafficLight>;

export const Default: Story = {};
