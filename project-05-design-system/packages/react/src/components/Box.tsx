import { ComponentProps } from "react";
import { stitches } from "../styles";

export const Box = stitches.styled("div", {
  padding: "$4",
  borderRadius: "$md",
  backgroundColor: "$gray800",
  border: "1px solid $gray600",
});

export interface BoxProps extends ComponentProps<typeof Box> {}

Box.displayName = "Box";
