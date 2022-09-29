import Image from "next/image";
import Gallery from "../components/gallery.js";
import Thickness from "../public/icons/thickness_green.svg";
import Sheetsize from "../public/icons/sheetsize_green.svg";
import Advantage from "../public/icons/advantage_green.svg";
import WaterjetIcon from "../public/icons/waterjet_icon.svg";

import waterjetVertical from "../public/images/home/waterjet_vertical.jpg";
import waterjetHorizontal from "../public/images/home/waterjet_horizontal.jpg";

function Waterjet() {
  return (
    <article
      id="waterjet"
      className="pt-12 mt-16 md:mt-0 md:pt-20 xs:pt-14 xs:mt-10"
    >
      <h2 className="hidden">Waterjet</h2>
      <div className="bg-lightgrey">
        <section className="color-grey grid grid-cols-24 gap-2  pt-10 pb-4 relative">
          {/* Number*/}
          <div className="relative col-start-3 col-end-22 xl:col-start-2 md:col-start-1 ">
            <p className="text-[180px] absolute -left-0 -top-56 font-black text-lightgrey">
              02
            </p>
          </div>
          {/* Icon*/}
          <div className=" col-start-3 xl:col-start-2 sm:col-start-2 col-end-4 xl:col-end-3 lg:col-end-4 md:col-end-7 sm:col-end-24 md:flex md:justify-center sm:mb-4 z-10">
            <WaterjetIcon />
          </div>
          {/* Title*/}
          <div className="col-start-5 lg:col-start-6 md:col-start-7  sm:col-start-2 col-end-23 xl:col-end-24 my-auto">
            <p className="font-semibold text-xs uppercase text-green">
              Waterjet cutting
            </p>
            <h3 className="text-3xl sm:text-2xl xs:text-1xl ss:text-xl font-bold font-mono text-black ">
              The biggest waterjet in Europe
            </h3>
          </div>{" "}
        </section>
      </div>
      <div className="background">
        <div className="grid grid-cols-24 gap-4 w-full grid-rows-2 md:grid-rows-[auto_auto]  md:gap-0">
          {/* Paragraph*/}
          <div className="col-start-5 xl:col-start-4 lg:col-start-2 col-end-14 lg:col-end-15 sm:col-end-24 py-6 flex flex-col justify-center row-end-1 row-start-1 space-y-12 sm:col-start-2 md:my-auto">
            <p className="text-sm leading-loose">
              Serving many sectors like{" "}
              <span className=" italic font-semibold">
                offshore, shipbuilding, tankbuilding, petrochemical industry,
                etc...
              </span>{" "}
              This worldclass waterjet enables our customers to save time, money
              and increase{" "}
              <span className=" italic font-semibold">
                their competitive ‘EDGE’
              </span>
              .
            </p>
            <div className="flex items-center flex-wrap ">
              <div className="space-y-1 mr-12 md:mb-4">
                <div className="flex items-center space-x-4 ">
                  <Sheetsize />
                  <p className="font-bold uppercase text-xl">
                    4500mm x 20000mm
                  </p>
                </div>
                <p className="text-darkgrey font-semibold  text-md">
                  Sheet size
                </p>
              </div>
              <div className="space-y-1 md:mb-4">
                <div className="flex items-center space-x-2 ">
                  <Thickness />
                  <p className="font-bold uppercase text-xl">400mm</p>
                </div>
                <p className="text-darkgrey font-semibold text-md">Thickness</p>
              </div>
            </div>
          </div>
          {/* Advantages*/}
          <div className="col-start-5 xl:col-start-4 lg:col-start-2 sm:col-start-2 col-end-15 lg:col-end-16  md:col-end-24 flex items-center sm:row-start-4">
            <div className="w-full py-12 row-start-2 grid grid-cols-2 items-center gap-x-2 gap-y-12 xs:flex xs:flex-col xs:items-start sm:gap-y-8">
              <div className="flex items-center space-x-2">
                <Advantage />
                <p className="font-medium uppercase text-lg lg:text-md sm:text-sm tracking-wider">
                  5-axis cutting head
                </p>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Advantage />

                <p className="font-medium uppercase text-lg lg:text-md sm:text-sm tracking-wider">
                  2x 6000BAR
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Advantage />

                <p className="font-medium uppercase text-lg lg:text-md sm:text-sm tracking-wider">
                  All materials
                </p>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Advantage />

                <p className="font-medium uppercase text-lg lg:text-md sm:text-sm tracking-wider">
                  Any shape
                </p>
              </div>
            </div>{" "}
          </div>
          {/* Image*/}
          <div className="col-start-15 lg:col-start-17 text-right sm:col-start-2 col-end-23 lg:col-end-24 row-start-1 row-end-3 md:row-end-2 sm:row-start-3 sm:text-center">
            <div className="sm:hidden">
              <Image
                className="w-full h-auto "
                src={waterjetVertical}
                alt="Sliting Line"
                placeholder="blur" // Optional blur-up while loading
              />
            </div>
            <div className="hidden sm:flex">
              {" "}
              <Image
                className="w-full h-auto "
                src={waterjetHorizontal}
                alt="Sliting Line"
                placeholder="blur" // Optional blur-up while loading
              />
            </div>
          </div>
        </div>
      </div>
      <section className="grid grid-cols-24 my-32 lg:my-24 md:my-20 ">
        {" "}
        <h3 className="hidden">Waterjet gallery</h3>
        <Gallery
          images={[
            {
              src: "/images/waterjet/waterjet_machine.jpg",
              placeholder: "Our XXL Waterjet machine.",
            },
            {
              src: "/images/waterjet/waterjet_circles.jpg",
              placeholder: "Waterjet circles cutout",
            },
            {
              src: "/images/waterjet/waterjet_cutout.jpg",
              placeholder: "Waterjet detailing",
            },
            {
              src: "/images/waterjet/waterjet_plate.jpg",
              placeholder: "Waterjet large plate cutting",
            },
            {
              src: "/images/waterjet/waterjet_small_strips.jpg",
              placeholder: "Waterjet smal rectangular detailing",
            },
            {
              src: "/images/waterjet/waterjet_side.jpg",
              placeholder: "Waterjet bevel edges",
            },
            {
              src: "/images/waterjet/waterjet_thick.jpg",
              placeholder: "Waterjet thick, large plate cutout",
            },
          ]}
        />{" "}
      </section>
    </article>
  );
}

export default Waterjet;
