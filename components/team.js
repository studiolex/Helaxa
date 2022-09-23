import React, { useRef } from "react";
import { Pagination, Navigation, Controller, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ArrowLeft from "../public/icons/arrow_left.svg";
import ArrowRight from "../public/icons/arrow_right.svg";
import Mail from "../public/icons/mail_bold_green.svg";
import Phone from "../public/icons/phone_bold_green.svg";

function Team({ contacts }) {
  const [swiper, setSwiper] = React.useState();
  const prevRef = React.useRef();
  const nextRef = React.useRef();

  React.useEffect(() => {
    if (swiper) {
      // console.log("Swiper instance:", swiper);
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  return (
    <>
      <section className="grid grid-cols-24 justify-center items-center">
        {/* Title */}
        <div className="col-start-3 lg:col-start-2 col-end-16 lg:col-end-17 ">
          <div className="text-left">
            <p className="font-bold uppercase text-green">Contact</p>
            <h1 className="text-3xl font-bold font-mono text-black">
              Let’s connect and get to know eachother.
            </h1>
          </div>
        </div>
        {/* Arrows */}
        <div className=" col-start-17 col-end-23 lg:col-start-18 lg:col-end-24 w-full z-0 sm:row-start-3 sm:col-start-2 sm:col-end-24">
          <div className="flex justify-end my-8 space-x-10 sm:justify-center">
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
          </div>
        </div>
        {/* Contacts */}
        <h2 className="font-bold uppercase text-green hidden">Team</h2>
        <div className="col-start-3 col-end-25 w-full z-0 lg:col-start-2 mt-20 ">
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
            centeredSlides={false}
            slidesPerView={"auto"}
            spaceBetween={30}
            grabCursor={true}
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
            //     // initialSlide: 0,
            //     // centeredSlides: true,
            //   },
            // }}
          >
            {contacts.map((contact) => (
              <SwiperSlide key={contact.mail}>
                <div className="bg-lightgrey mr-12 xl:mr-8 md:mr-6 sm:mr-2 team-contact">
                  <div>
                    <Image
                      src={contact.image}
                      alt={contact.placeholder}
                      width={350}
                      height={350}
                    />
                  </div>
                  <div className="p-4">
                    <div>
                      <p className="text-darkgrey text-sm sm:text-lg">
                        {contact.function}
                      </p>
                      <h3 className="font-bold text-md sm:text-xl uppercase">
                        {contact.name}
                      </h3>
                    </div>
                    <div className="pt-4 pb-2 font-medium flex flex-col divide-y divide-darkgrey">
                      <div className="grid items-center grid-cols-[1.7rem_auto] py-2 sm:py-4">
                        <div className="flex justify-center">
                          <Mail />
                        </div>
                        <p className="ml-1 text-sm sm:text-md">
                          {contact.mail}
                        </p>
                      </div>
                      <div className="grid items-center grid-cols-[1.7rem_auto] py-2 sm:py-4">
                        <div className="flex justify-center">
                          <Phone />
                        </div>
                        <p className="ml-1 text-sm sm:text-md">
                          {contact.phone}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Team;
