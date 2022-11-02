import { ComponentProps } from "@stitches/react";
import { stitches } from "../styles";

export const TextArea = stitches.styled("textarea", {
  backgroundColor: "$gray900",
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "2px solid $gray900",
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$white",
  fontWeight: "regular",
  resize: "vertical",
  minHeight: 90,

  "&:focus": {
    borderColor: "$green300",
    outline: 0,
  },

  "&:disabled": {
    opacity: 0.5,
    backgroundColor: "$gray700",
    borderColor: "$gray700",
    cursor: "not-allowed",
    resize: "none",
  },

  "&:placeholder": {
    color: "$gray400",
  },
});

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}

TextArea.displayName = "TextArea";
