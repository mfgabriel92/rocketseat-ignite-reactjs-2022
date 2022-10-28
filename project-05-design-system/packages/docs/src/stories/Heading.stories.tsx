import { Heading, HeadingProps } from "@mfgabriel92-rocketseat-reactjs-2022-design-system/react";
import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Typography/Heading",
  component: Heading,
  args: {
    children: "Lorem ipsum",
  },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const Custom: StoryObj<HeadingProps> = {
  args: {
    children: "H1 Heading",
    as: "h1",
    size: "lg",
  },
  parameters: {
    docs: {
      description: {
        story: "Heading, by default, is always 'h2', but can be changed  using 'as' property.",
      },
    },
  },
};
