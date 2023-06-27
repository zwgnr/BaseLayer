import { AvatarFallback, AvatarImage, AvatarRoot } from "@/potions/avatar";

export const Avatar = () => (
  <AvatarRoot>
    <AvatarFallback>ME</AvatarFallback>
    <AvatarImage src="https://i.pravatar.cc/300" alt="avatar" />
  </AvatarRoot>
);
