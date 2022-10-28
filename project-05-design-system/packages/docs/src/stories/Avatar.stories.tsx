import { Avatar, AvatarProps } from "@mfgabriel92-rocketseat-reactjs-2022-design-system/react";
import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Display/Avatar",
  component: Avatar,
  args: {
    src: "https://github.com/mfgabriel92.png",
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const Fallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
