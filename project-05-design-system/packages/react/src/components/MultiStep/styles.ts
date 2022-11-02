import { stitches } from "../../styles";
import { Text } from "../Text";

export const Container = stitches.styled("div", {});

export const Label = stitches.styled(Text, {
  color: "$gray200",
  fontSize: "$xs",
});

export const Steps = stitches.styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(var(--steps-size), 1fr)",
  gap: "$2",
  marginTop: "#1",
});

export const Step = stitches.styled("div", {
  height: "$1",
  borderRadius: "$px",
  backgroundColor: "$gray600",
  variants: {
    active: {
      true: {
        backgroundColor: "$gray100",
      },
    },
  },
});
