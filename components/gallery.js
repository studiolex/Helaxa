import React, { useRef } from "react";
import { Pagination, Navigation, Controller, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ArrowLeft from "../public/icons/arrow_left.svg";
import ArrowRight from "../public/icons/arrow_right.svg";
import Galleryitems from "../components/galleryitems.js";

function Gallery() {
  const [swiper, setSwiper] = React.useState();
  const prevRef = React.useRef();
  const nextRef = React.useRef();

  React.useEffect(() => {
    if (swiper) {
      console.log("Swiper instance:", swiper);
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  return (
    <>
      <div className="col-start-3 xl:col-start-2 col-end-7 w-full z-0 mt-auto lg:col-start-2 lg:row-start-2">
        <div className="flex items-end my-8 space-x-10">
          <div
            className="swiper-button cursor-pointer transition ease-in-out delay-50 hover:-translate-r-1 hover:scale-110  duration-300"
            ref={prevRef}
          >
            <ArrowLeft />
          </div>
          <div
            className="swiper-button cursor-pointer transition ease-in-out delay-50 hover:-translate-l-1 hover:scale-110  duration-300"
            ref={nextRef}
          >
            <ArrowRight />
          </div>
        </div>{" "}
      </div>

      <div className="col-start-8 col-end-25 w-full z-0 lg:col-start-2">
        <Swiper
          modules={[Navigation, Pagination, Controller, Keyboard]}
          navigation={{
            prevEl: prevRef?.current,
            nextEl: nextRef?.current,
          }}
          updateOnWindowResize
          observer
          observeParents
          onSwiper={setSwiper}
          // centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={30}
          grabCursor={true}
          loop={true}
          // initialSlide={"0"}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          keyboard={{
            enabled: true,
          }}
          // breakpoints={{
          //   700: {
          //     initialSlide: 0,
          //   },
          // }}
        >
          <div>
            <SwiperSlide>
              {" "}
              <div className="">
                <Image
                  src="/images/slitting/slit_1.png"
                  alt="Picture of Coil Slitting"
                  width={300}
                  height={300}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="">
                <Image
                  src="/images/slitting/slit_2.png"
                  alt="Picture of Coil Slitting"
                  width={200}
                  height={300}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="">
                <Image
                  src="/images/slitting/slit_3.png"
                  alt="Picture of Coil Slitting"
                  width={300}
                  height={300}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="">
                <Image
                  src="/images/slitting/slit_4.png"
                  alt="Picture of Coil Slitting"
                  width={200}
                  height={300}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="">
                <Image
                  src="/images/slitting/slit_5.png"
                  alt="Picture of Coil Slitting"
                  width={300}
                  height={300}
                />
              </div>
            </SwiperSlide>
            {/* <Galleryitems /> */}
          </div>
        </Swiper>
      </div>
    </>
  );
}

export default Gallery;
