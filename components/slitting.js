import Image from "next/image";
import Gallery from "../components/gallery.js";
import Thickness from "../public/icons/thickness_green.svg";
import Width from "../public/icons/width_green.svg";
import SlittingIcon from "../public/icons/slitting_icon.svg";
import slittingImg from "../public/images/home/slitting.png";

function Slitting() {
  return (
    <article className="pt-14 md:pt-20 xs:pt-14" id="slitting">
      <h2 className="hidden">Slitting</h2>
      <section>
        {/* Slitting header*/}
        <div className="color-grey grid grid-cols-24 gap-2 bg-lightgrey pt-12 pb-10">
          {/* Icon*/}
          <div className="col-start-3 xl:col-start-2 col-end-12  md:col-end-8 flex justify-end z-10 ">
            <div className=" ml-auto">
              <SlittingIcon />
            </div>
          </div>
          {/* Title*/}
          <div className="col-start-13 md:col-start-9 col-end-23 md:col-end-24 my-auto">
            <p className="font-semibold text-xs  uppercase text-green">
              Slitting
            </p>
            <h3 className="text-3xl sm:text-2xl xs:text-1xl ss:text-xl font-bold font-mono text-black">
              Coil slitting
            </h3>
          </div>
        </div>
        {/* Slitting Info*/}
        <div className="grid grid-cols-24 gap-4 w-full grid-rows-2 background md:grid-rows-[auto_auto] sm:gap-0">
          {/* Paragraph*/}
          <div className="col-start-13 col-end-21 xl:col-end-22 lg:col-end-23 md:col-end-24 py-6 h-full flex flex-col justify-between row-end-1 row-start-1 space-y-12 sm:col-start-2">
            <p className="text-sm leading-relaxed">
              Since 2018 we have our own Slitting Line for slitting of Stainless
              Steel Coils with widths up to 650 mm and weight up to 10 Tons.
              Thickness range between 0,40 and 4,00 mm is possible. We can meet
              your requirements with coil slits as narrow as 10 mm and OD max. 2
              metres.
            </p>
          </div>
          {/* Details*/}
          <div className="col-start-13 md:col-start-2 col-end-23 row-start-2 flex items-center flex-wrap md:py-16 sm:col-start-2">
            <div className="mr-2">
              <div className="flex items-center space-x-2">
                <Thickness />
                <p className="font-bold uppercase text-xl">0.20 - 4.00mm</p>
              </div>
              <p className="text-darkgrey font-semibold text-md">Thickness</p>
            </div>
            <div className="mx-auto">
              <div className="flex items-center space-x-2">
                <Width />
                <p className="font-bold uppercase text-xl">15 - 1560mm</p>
              </div>
              <p className="text-darkgrey font-semibold text-md">Width</p>
            </div>
          </div>{" "}
          {/* Image*/}
          <div className="col-start-3 xl:col-start-2 col-end-12 row-start-1 row-end-3 sm:row-start-4 sm:col-end-24 relative md:py-8">
            <div className="relative z-10">
              <Image
                src={slittingImg}
                alt="Picture of the author"
                className="relative"
                placeholder="blur"
              />{" "}
            </div>
            {/* Number*/}
            <p className="text-[180px] absolute -left-0 -top-44 md:-top-28 font-black text-white">
              01
            </p>
          </div>
        </div>
      </section>

      {/* Slitting Gallery*/}
      <div className="grid grid-cols-24 my-32 lg:my-24 md:my-20">
        {" "}
        <div className="col-start-4  xl:col-start-3 col-end-12 lg:col-end-14 md:col-end-20 sm:col-end-23">
          <p className="font-sans font-bold">
            Moreover, in view of our close partnership with other slitting
            companies, we can offer you slit coils in any dimension required.
          </p>
        </div>
      </div>
      <section className="grid grid-cols-24">
        {" "}
        <h3 className="hidden">Slitting gallery</h3>
        <Gallery
          images={[
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
            {
              link: "Slitting",
              href: "/images/slitting/slit_3.png",
              placeholder: "Dit is een foto van een sliertje",
            },
            {
              link: "Slitting",
              href: "/images/slitting/slit_4.png",
              placeholder: "Dit is een foto van een slitter",
            },
          ]}
        />
      </section>
    </article>
  );
}

export default Slitting;
