import { Meta, StoryObj } from "@storybook/react";
import { IconButton } from ".";
import { Icon } from "../../003-31-08-2024-react-katas/03_Icon";

const meta: Meta<typeof IconButton> = {
  title: "Components/007-26-09-2024-react-katas/IconButtons",
  component: IconButton,
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const IconSearch: Story = {
  args: {
    icon: <Icon name={"search"} />,
    onClick: () => {
      console.log("You clicked on Search icon!");
    },
  },
};

export const IconFile: Story = {
  args: {
    icon: <Icon name={"file"} />,
    onClick: () => {
      console.log("You clicked on file icon!");
    },
  },
};

export const IconFolder: Story = {
  args: {
    icon: <Icon name={"folder"} />,
    onClick: () => {
      console.log("You clicked on folder icon!");
    },
  },
};

export const IconFolderOpen: Story = {
  args: {
    icon: <Icon name={"folder-open"} />,
    onClick: () => {
      console.log("You clicked on folder-open icon!");
    },
  },
};
export const IconCopy: Story = {
  args: {
    icon: <Icon name={"copy"} />,
    onClick: () => {
      console.log("You clicked on copy icon!");
    },
  },
};
