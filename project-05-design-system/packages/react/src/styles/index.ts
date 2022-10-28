import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from "@mfgabriel92-rocketseat-reactjs-2022-design-system/tokens";
import { createStitches, defaultThemeMap } from "@stitches/react";

const stitches = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: "space",
    width: "space",
  },
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
});

export { stitches };
