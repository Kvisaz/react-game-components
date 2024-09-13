import { Meta, StoryObj } from "@storybook/react";
import { OnlineStatus } from ".";

const meta: Meta<typeof OnlineStatus> = {
  title: "Components/005-10-09-2024-react-katas/OnlineStatus",
  component: OnlineStatus,
};

export default meta;

type Story = StoryObj<typeof OnlineStatus>;

export const Default: Story = { args: { isOnline: true } };
