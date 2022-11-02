import { ComponentProps } from "react";
import { stitches } from "../styles";

export const Button = stitches.styled("button", {
  all: "unset",
  borderRadius: "$xs",
  fontSize: "$sm",
  fontWeight: "$medium",
  fontFamily: "$default",
  textAlign: "center",
  minWidth: 120,
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transtion: "all 0.2s",

  "&:disabled": {
    cursor: "not-allowed",
  },

  svg: {
    width: "$3",
    height: "$3",
    marginLeft: "$2",
  },

  variants: {
    variant: {
      primary: {
        color: "$gray100",
        backgroundColor: "$green500",

        "&:not(:disabled):hover": {
          backgroundColor: "$green300",
        },

        "&:disabled": {
          backgroundColor: "$gray200",
        },
      },

      secondary: {
        color: "$green500",
        border: "1px solid $green500",

        "&:not(:disabled):hover": {
          backgroundColor: "$green500",
          color: "$white",
        },

        "&:disabled": {
          color: "$gray200",
          borderColor: "$gray200",
        },
      },

      terciary: {
        color: "$gray900",

        "&:not(:disabled):hover": {
          color: "$white",
        },

        "&:disabled": {
          color: "$gray600",
        },
      },
    },

    size: {
      sm: {
        padding: "$2",
        fontSize: "$xs",
      },

      md: {
        padding: "$3 $5",
      },
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export interface ButtonProps extends ComponentProps<typeof Button> {}

Button.displayName = "Button";
