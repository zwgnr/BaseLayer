import { ratingGroupPotion } from "@/potions/ratingGroupPotion";
import {
  Rating,
  RatingGroupControl,
  RatingGroup as RatingGroupRoot,
} from "@ark-ui/react";
import { Star } from "lucide-react";

const { control, rating, root } = ratingGroupPotion();

export const RatingGroup = () => {
  return (
    <RatingGroupRoot max={5} defaultValue={4} className={root()}>
      <RatingGroupControl className={control()}>
        {({ sizeArray }) =>
          sizeArray.map((index) => (
            <Rating className={rating()} key={index} index={index}>
              {({ isHighlighted }) => {
                return isHighlighted ? (
                  <Star className="fill-accent text-accent" />
                ) : (
                  <Star className="stroke-surface-4" />
                );
              }}
            </Rating>
          ))
        }
      </RatingGroupControl>
    </RatingGroupRoot>
  );
};
