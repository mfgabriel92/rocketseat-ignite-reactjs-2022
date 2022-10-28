import { stitches } from "../../styles";

export const Container = stitches.styled("div", {
  backgroundColor: "$gray900",
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "2px solid $gray900",
  display: "flex",
  alignItems: "baseline",

  "&:has(input:focus)": {
    borderColor: "$green300",
  },

  "&:has(input:disabled)": {
    opacity: 0.5,
    cursor: "not-allowed",
    backgroundColor: "$gray700",
    borderColor: "$gray700",
  },
});

export const Prefix = stitches.styled("span", {
  fontFamily: "$default",
  fontSize: "$sm",
  fontWeight: "regular",
  color: "$gray400",
});

export const Input = stitches.styled("input", {
  fontFamily: "$default",
  fontSize: "$sm",
  fontWeight: "regular",
  color: "$white",
  background: "transparent",
  border: 0,
  width: "100%",

  "&:focus": {
    outline: 0,
  },

  "&:disabled": {
    cursor: "not-allowed",
  },
});
