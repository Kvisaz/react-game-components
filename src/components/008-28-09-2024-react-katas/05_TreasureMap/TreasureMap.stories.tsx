import { Meta, StoryObj } from "@storybook/react";
import { TreasureMap } from ".";

const meta: Meta<typeof TreasureMap> = {
  title: "Components/008-28-09-2024-react-katas/TreasureMap",
  component: TreasureMap,
};

export default meta;

type Story = StoryObj<typeof TreasureMap>;

export const Default: Story = { args: { width: 300, height: 200 } };
