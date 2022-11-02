import { ComponentPropsWithRef } from "react";
import * as S from "./styles";

export interface TextInputProps extends ComponentPropsWithRef<typeof S.Input> {
  prefix?: string;
}

function TextInput({ prefix, ...rest }: TextInputProps) {
  return (
    <S.Container>
      {!!prefix && <S.Prefix>{prefix}</S.Prefix>}
      <S.Input {...rest} />
    </S.Container>
  );
}

export { TextInput };

TextInput.displayName = "TextInput";
