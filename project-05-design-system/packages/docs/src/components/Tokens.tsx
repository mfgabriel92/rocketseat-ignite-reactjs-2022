import "../styles/tokens.styles.css";

interface TokensProps {
  tokens: Record<string, string>;
  isRem?: boolean;
}

function Tokens({ tokens, isRem = true }: TokensProps) {
  return (
    <table className="tokens">
      <thead>
        <tr>
          <th colSpan={1}>Name</th>
          <th colSpan={1}>Value</th>
          {isRem && <th colSpan={2}>Pixels</th>}
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens).map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
            {isRem && <td>{Number(value.replace("rem", "")) * 16}px</td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export { Tokens };
