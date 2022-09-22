import React, { useRef } from "react";
import { Pagination, Navigation, Controller, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const images = [
  {
    link: "Slitting",
    href: "/images/slitting/slit_1.png",
    placeholder: "Dit is een foto van een sliertje",
  },
  {
    link: "Slitting",
    href: "/images/slitting/slit_2.png",
    placeholder: "Dit is een foto van een slitter",
  },
];

export default function Galleryitems() {
  return (
    <>
      {images.map((image) => (
        <SwiperSlide key={image.placeholder}>
          <Image
            src={image.href}
            alt={image.placeholder}
            width={300}
            height={300}
          />
        </SwiperSlide>
      ))}
    </>
  );
}
