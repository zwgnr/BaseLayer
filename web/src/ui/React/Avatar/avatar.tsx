import {
  AvatarFallback,
  AvatarImage,
  Avatar as AvatarRoot,
} from "@ark-ui/react";
import { avatarPotion } from "@potions/avatarPotion";

const { root, fallback, image } = avatarPotion();

export const Avatar = () => (
  <AvatarRoot className={root()}>
    <AvatarFallback className={fallback()}>ME</AvatarFallback>
    <AvatarImage
      className={image()}
      src="https://i.pravatar.cc/300"
      alt="avatar"
    />
  </AvatarRoot>
);
