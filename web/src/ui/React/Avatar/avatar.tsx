import { avatar } from "@/potions/avatar";

import {
  AvatarFallback,
  AvatarImage,
  Avatar as AvatarRoot,
} from "@ark-ui/react";

export const Avatar = () => (
  <AvatarRoot className={avatar().root()}>
    <AvatarFallback className={avatar().fallback()}>ME</AvatarFallback>
    <AvatarImage
      className={avatar().image()}
      src="https://i.pravatar.cc/300"
      alt="avatar"
    />
  </AvatarRoot>
);
