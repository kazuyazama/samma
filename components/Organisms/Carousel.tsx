import React, { useEffect } from "react";
import Image from "next/image";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { carouselImages } from "../../utlis/carouselImages";

import "@splidejs/react-splide/css";

export const Carousel = () => {
  const options = {
    type: "loop",
    gap: "1rem",

    padding: "10%",
    // mediaQuery:'min',
    pagination: true,
    autoplay: true,
    pauseOnHover: false,
    resetProgress: false,
    //durationに相当
    speed: 2000,
    height: "60vh",
    //PCfirst
    breakpoints: {
      1024: {
        padding: 0,
        speed: 4000,
      },
    },
  };

  return (
    <div className="wrapper w-full">
      <Splide
        options={options}
        aria-labelledby="autoplay--heading"
        hasTrack={false}
      >
        <div style={{ position: "relative" }}>
          <SplideTrack>
            {carouselImages.map((slide) => (
              <SplideSlide key={slide.alt}>
                  <Image
                    className="hidden lg:block"
                    fill
                    src={slide.srcPC && slide.srcPC}
                    alt={slide.alt}
                  />
                <Image
                  className="block lg:hidden"
                  layout="fill"
                  src={slide.srcSP && slide.srcSP}
                  alt={slide.alt}
                />
              </SplideSlide>
            ))}
          </SplideTrack>
        </div>

        {/* <div className="splide__progress">
          <div className="splide__progress__bar" />
        </div> */}
      </Splide>
    </div>
  );
};
