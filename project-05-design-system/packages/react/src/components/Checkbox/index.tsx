import { Check } from "phosphor-react";
import { ComponentProps } from "react";
import * as S from "./styles";

export interface CheckboxProps extends ComponentProps<typeof S.Container> {}

function Checkbox(props: CheckboxProps) {
  return (
    <S.Container {...props}>
      <S.Indicator asChild>
        <Check weight="bold" />
      </S.Indicator>
    </S.Container>
  );
}

export { Checkbox };

Checkbox.displayName = "Checkbox";
