import {
  AvatarFallback,
  AvatarImage,
  Avatar as AvatarRoot,
} from "@ark-ui/react";
import { avatarPotion } from "@potions/avatarPotion";

const { avatarRoot, avatarFallback, avatarImage } = avatarPotion();

export const Avatar = () => (
  <AvatarRoot className={avatarRoot()}>
    <AvatarFallback className={avatarFallback()}>ME</AvatarFallback>
    <AvatarImage
      className={avatarImage()}
      src="https://i.pravatar.cc/300"
      alt="avatar"
    />
  </AvatarRoot>
);
