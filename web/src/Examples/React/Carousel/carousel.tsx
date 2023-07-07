import {
  CarouselControl,
  CarouselNextSlideTrigger,
  CarouselPrevSlideTrigger,
  Carousel as CarouselRoot,
  CarouselSlide,
  CarouselSlideGroup,
  CarouselViewport,
} from "@ark-ui/react";

const { root, viewport, control } = carouselPotion();

import { carouselPotion } from "@/components/base/carouselPotion";
import { ChevronLeftSquare, ChevronRightSquare } from "lucide-react";

export const Carousel = () => {
  const images = [
    "https://tinyurl.com/bdz4mty4",
    "https://tinyurl.com/2wx9ymsr",
    "https://tinyurl.com/4sjr5mvu",
  ];
  return (
    <CarouselRoot className={root()}>
      <CarouselViewport className={viewport()}>
        <CarouselSlideGroup>
          {images.map((image, index) => (
            <CarouselSlide key={index} index={index}>
              <img
                src={image}
                alt={`Slide Image ${index}`}
                className="h-72 w-full object-cover"
              />
            </CarouselSlide>
          ))}
        </CarouselSlideGroup>
        <CarouselControl className={control()}>
          <CarouselPrevSlideTrigger asChild>
            <button>
              <ChevronLeftSquare
                aria-label="Previous Slide"
                className="h-8 w-8 text-white"
              />
            </button>
          </CarouselPrevSlideTrigger>
          <CarouselNextSlideTrigger asChild>
            <button>
              <ChevronRightSquare
                aria-label="Next Slide"
                className="h-8 w-8 text-white"
              />
            </button>
          </CarouselNextSlideTrigger>
        </CarouselControl>
      </CarouselViewport>
    </CarouselRoot>
  );
};
