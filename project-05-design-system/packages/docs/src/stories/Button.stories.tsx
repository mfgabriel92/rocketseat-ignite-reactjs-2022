import { Button, ButtonProps } from "@mfgabriel92-rocketseat-reactjs-2022-design-system/react";
import { StoryObj, Meta } from "@storybook/react";
import { ArrowRight } from "phosphor-react";

export default {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Button Text",
    variant: "primary",
    size: "md",
  },
  argTypes: {
    onClick: {
      action: "click",
    },
    variant: {
      options: ["primary", "secondary", "terciary"],
      control: {
        type: "inline-radio",
      },
    },
    size: {
      options: ["sm", "md"],
      control: {
        type: "inline-radio",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: "secondary",
  },
};

export const Terciary: StoryObj<ButtonProps> = {
  args: {
    variant: "terciary",
  },
};

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: "sm",
  },
};

export const Icon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Next
        <ArrowRight weight="bold" />
      </>
    ),
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
};
