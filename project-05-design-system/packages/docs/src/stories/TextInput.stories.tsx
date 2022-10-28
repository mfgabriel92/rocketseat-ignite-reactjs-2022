import {
  Box,
  Text,
  TextInput,
  TextInputProps,
} from "@mfgabriel92-rocketseat-reactjs-2022-design-system/react";
import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Form/TextInput",
  component: TextInput,
  decorators: [
    (Story) => (
      <Box as="label" css={{ display: "flex", flexDirection: "column", gap: "$2" }}>
        <Text size="sm">Username</Text>
        {Story()}
      </Box>
    ),
  ],
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: "Name",
  },
};

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
};

export const Prefixed: StoryObj<TextInputProps> = {
  args: {
    prefix: "cal.com/",
  },
};
