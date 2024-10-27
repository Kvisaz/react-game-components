import { Meta, StoryObj } from "@storybook/react";
import { DialogBox } from ".";

const meta: Meta<typeof DialogBox> = {
  title: "Components/009-07-10-2024-react-katas/DialogBox",
  component: DialogBox,
};

export default meta;

type Story = StoryObj<typeof DialogBox>;

export const Default: Story = {
  args: {
    onOkClick: () => {
      console.log("Component 'DialogBox': Ok button is pressed.");
    },
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
};
