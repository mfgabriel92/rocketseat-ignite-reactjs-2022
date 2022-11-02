import {
  Box,
  MultiStep,
  MultiStepProps,
} from "@mfgabriel92-rocketseat-reactjs-2022-design-system/react";
import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Form/MultiStep",
  component: MultiStep,
  decorators: [
    (Story) => (
      <Box as="label" css={{ display: "flex", flexDirection: "column", gap: "$2" }}>
        {Story()}
      </Box>
    ),
  ],
  args: {
    size: 4,
    currentStep: 1,
  },
} as Meta<MultiStepProps>;

export const Primary: StoryObj<MultiStepProps> = {};

export const Half: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 2,
  },
};

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
};
