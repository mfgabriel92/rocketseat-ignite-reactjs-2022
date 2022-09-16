import { stitches } from "@styles/index";

export const Container = stitches.styled("main", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "stretch",
  gap: "4rem",
  maxWidth: 1180,
  margin: "0 auto",
});

export const ImageContainer = stitches.styled("div", {
  width: "100%",
  maxWidth: 576,
  height: "calc(656px - 0.5rem)",
  background: "linear-gradient(-180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});

export const DetailsContainer = stitches.styled("div", {
  display: "flex",
  flexDirection: "column",

  h1: {
    fontSize: "$2xl",
    color: "$gray300",
  },

  strong: {
    marginTop: "1rem",
    display: "block",
    fontSize: "$2xl",
    color: "$green300",
  },

  p: {
    marginTop: "2.5rem",
    fontSize: "$md",
    lineHeight: 1.6,
    color: "$gray300",
  },

  button: {
    marginTop: "auto",
    backgroundColor: "$green300",
    color: "$white",
    borderRadius: 8,
    border: 0,
    padding: "1.25rem",
    cursor: "pointer",
    fontSize: "$md",
    transition: "background 0.2s ease-in-out",
    fontWeight: "bold",

    "&:hover": {
      backgroundColor: "$green500",
    },

    "&:disabled": {
      backgroundColor: "$green500",
      cursor: "not-allowed",
    },
  },
});
