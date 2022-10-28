import { Text, TextProps } from "@mfgabriel92-rocketseat-reactjs-2022-design-system/react";
import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    children: "Lorem ipsum dolor sit amet",
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const Custom: StoryObj<TextProps> = {
  args: {
    children: "Strong text",
    as: "strong",
  },
};
