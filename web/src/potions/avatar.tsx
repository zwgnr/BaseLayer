import { styled } from "@/lib/twc";

import {
  AvatarFallback as ArkAvatarFallback,
  AvatarImage as ArkAvatarImage,
  Avatar as ArkAvatarRoot,
} from "@ark-ui/react";

export const AvatarRoot = styled(
  ArkAvatarRoot,
  "h-16 w-16 rounded-full border-2 border-primary"
);

export const AvatarFallback = styled(
  ArkAvatarFallback,
  "flex h-[inherit] items-center justify-center bg-surface-2 font-bold text-text"
);

export const AvatarImage = styled(ArkAvatarImage, "object-cover");
