import { StoryFn, Meta } from "@storybook/react";
import { ArticleTest } from "./index";

export default {
  title: "Components/ArticleTest",
  component: ArticleTest,
} as Meta;

const Template: StoryFn<typeof ArticleTest> = (args) => (
  <ArticleTest {...args} />
);

export const Primary: Meta = {
  args: {
    hText: "Primary!",
    list: ["1. Primary!", "2. Primary!", "2. Primary!"],
  },
};

export const Second: Meta = {
  args: {
    hText: "Second!",
    list: ["1. Second!", "2. Second!", "2. Second!"],
  },
};
