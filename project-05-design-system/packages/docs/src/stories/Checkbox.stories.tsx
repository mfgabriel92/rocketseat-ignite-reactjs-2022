import {
  Box,
  Text,
  Checkbox,
  CheckboxProps,
} from "@mfgabriel92-rocketseat-reactjs-2022-design-system/react";
import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  decorators: [
    (Story) => (
      <Box as="label" css={{ display: "flex", alignItems: "center", gap: "$2" }}>
        {Story()}
        <Text size="sm">Accept?</Text>
      </Box>
    ),
  ],
} as Meta<CheckboxProps>;

export const Primary: StoryObj<CheckboxProps> = {};

export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    disabled: true,
  },
};
