import { colors } from "@mfgabriel92-rocketseat-reactjs-2022-design-system/tokens";
import { getContrast } from "polished";

function Colors() {
  return Object.entries(colors).map(([key, value]) => (
    <div
      key={key}
      style={{
        backgroundColor: value,
        padding: "2rem",
        display: "flex",
        justifyContent: "space-between",
        fontFamily: "monospace",
        color: getContrast(value, "#fff") < 3.5 ? "#000" : "#fff",
      }}
    >
      <strong>${key}</strong>
      <strong>{value}</strong>
    </div>
  ));
}

export { Colors };
