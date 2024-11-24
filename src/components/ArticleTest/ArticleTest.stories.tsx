import { Meta } from "@storybook/react";
import { ArticleTest } from "./index";

export default {
  title: "Components/ArticleTest",
  component: ArticleTest,
} as Meta;

export const Primary: Meta = {
  args: {
    hText: "Primary!",
    list: ["1. Test!", "2. Test2!", "2. Primary!", "4. Added through story."],
  },
};

export const Second: Meta = {
  args: {
    hText: "Second!",
    list: ["1. Second!", "2. Second!", "2. Second!"],
  },
};
