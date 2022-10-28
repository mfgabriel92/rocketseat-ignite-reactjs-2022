import {
  Box,
  Text,
  TextArea,
  TextAreaProps,
} from "@mfgabriel92-rocketseat-reactjs-2022-design-system/react";
import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Form/TextArea",
  component: TextArea,
  decorators: [
    (Story) => (
      <Box as="label" css={{ display: "flex", flexDirection: "column", gap: "$2" }}>
        <Text size="sm">Message</Text>
        {Story()}
      </Box>
    ),
  ],
} as Meta<TextAreaProps>;

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: "Write your message here",
  },
};

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
};
