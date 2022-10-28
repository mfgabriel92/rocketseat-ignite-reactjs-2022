import * as Checkbox from "@radix-ui/react-checkbox";
import { stitches } from "../../styles";

export const Container = stitches.styled(Checkbox.Root, {
  all: "unset",
  width: "$6",
  height: "$6",
  backgroundColor: "$gray900",
  border: "2px solid $gray900",
  borderRadius: "$xs",
  lineHeight: 0,
  cursor: "pointer",
  overflow: "hidden",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "&:focus": {
    borderColor: "$green300",
  },

  "&:disabled": {
    backgroundColor: "$gray700",
    borderColor: "$gray700",
    cursor: "not-allowed",
  },

  "&[data-state='checked']": {
    backgroundColor: "$green300",
  },
});

const slideIn = stitches.keyframes({
  from: {
    transform: "translateY(-100%)",
  },
  to: {
    transform: "translateY(0)",
  },
});

const slideOut = stitches.keyframes({
  from: {
    transform: "translateY(0)",
  },
  to: {
    transform: "translateY(-100%)",
  },
});

export const Indicator = stitches.styled(Checkbox.Indicator, {
  color: "$white",
  width: "$4",
  height: "$4",

  "&[data-state='checked']": {
    animation: `${slideIn} 200ms ease-out`,
  },

  "&[data-state='unchecked']": {
    animation: `${slideOut} 200ms ease-out`,
  },
});
