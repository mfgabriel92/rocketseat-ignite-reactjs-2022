import { AvatarImage } from "@radix-ui/react-avatar";
import { User } from "phosphor-react";
import { ComponentProps } from "react";
import * as S from "./styles";

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

function Avatar(props: AvatarProps) {
  return (
    <S.Container>
      <S.Image {...props} />
      <S.Fallback delayMs={600}>
        <User />
      </S.Fallback>
    </S.Container>
  );
}

export { Avatar };

Avatar.displayName = "Avatar";
