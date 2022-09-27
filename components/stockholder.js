import Image from "next/image";
import StockholderIcon from "../public/icons/stockholder_icon.svg";

import stockholderSquare from "../public/images/home/stockholder_square.jpg";
import stockholderVertical from "../public/images/home/stockholder_vertical.jpg";
import stockholderHorizontal from "../public/images/home/stockholder_horizontal.jpg";

function Stockholder() {
  return (
    <article id="stockholder" className="mb-36 lg:mb-24 md:mb-8">
      <h2 className="hidden">Stockholder</h2>

      <section className="pt-14 mt-16 md:mt-0 md:pt-20 xs:pt-14 xs:mt-10">
        <div className="background-stockholder">
          <div className="grid grid-cols-24 gap-4 w-full  py-12 items-center justify-center lg:justify-start relative">
            {/* Number*/}
            <div className="relative col-start-3 col-end-22 xl:col-start-2 md:col-start-1">
              <p className="text-[180px] absolute -left-0 -top-56 font-black text-lightgrey">
                03
              </p>
            </div>
            {/* Image*/}
            <div className="col-start-3 xl:col-start-2 col-end-10 lg:col-end-9 md:col-end-24 lg:grid md:row-start-3">
              <div className="lg:hidden">
                <Image
                  src={stockholderSquare}
                  alt="Picture of the author"
                  placeholder="blur" // Optional blur-up while loading
                />
              </div>
              <div className="hidden lg:flex md:hidden">
                {" "}
                <Image
                  src={stockholderVertical}
                  alt="Picture of the author"
                  placeholder="blur" // Optional blur-up while loading
                />
              </div>
              <div className="hidden md:flex">
                {" "}
                <Image
                  src={stockholderHorizontal}
                  alt="Picture of the author"
                  placeholder="blur" // Optional blur-up while loading
                />
              </div>
            </div>
            {/* Information */}
            <div className="-mt-6 lg:mt-0 col-start-11 lg:col-start-10 md:col-start-2 col-end-22 xl:col-end-23 lg:col-end-24 md:col-end-24 mb-10 flex flex-col justify-center space-y-12 md:space-y-6 justify-self-center md:row-start-2">
              <div className="flex space-x-6 md:flex-row-reverse md:space-x-0">
                {/* Icon*/}
                <div className=" flex justify-end ">
                  <div className=" ml-auto">
                    <StockholderIcon />
                  </div>
                </div>
                {/* Title*/}
                <div className="my-auto ">
                  <div>
                    <p className="font-semibold text-xs uppercase text-green">
                      Stockholder
                    </p>
                    <h1 className="text-3xl sm:text-2xl xs:text-1xl ss:text-xl  font-bold font-mono text-black">
                      Stainless steel stockholder
                    </h1>
                  </div>
                </div>
              </div>{" "}
              <p className="text-sm leading-relaxed">
                We have a regular stock available in our warehouse for immediate
                delivery of{" "}
                <span className=" italic font-semibold">
                  stainless steel plates, coils and sheets.
                </span>
                <br /> <br />
                In case you have{" "}
                <span className=" italic font-semibold">
                  any inquiries or offers
                </span>{" "}
                for any kind of quality or format in Stainless Steel, please do
                not hesitate to{" "}
                <a
                  href="#contact"
                  className="underline italic font-semibold hover:text-lightgreen transition duration-300 ease-in-out cursor-pointer"
                >
                  contact us
                </a>
                , we are well positioned to assist you for all grades and
                materials.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-24 gap-4 w-full md:bg-lightgrey ">
          {/* Inquiries*/}
          <div className="mt-12 col-start-3 lg:col-start-2 col-end-9 lg:col-end-9 md:col-end-24 md:row-start-2 md:pb-24 md:pt-10 ">
            <div className="mb-8">
              <p className="font-sans text-md font-bold text-green">
                Any inquires?{" "}
              </p>
              <p className="font-sans ">
                For futher inquiries please contact Marc for more information.
              </p>
            </div>
            <a
              href="mailto:marc@helaxa.com"
              className="border-2 border-black bg-white md:bg-lightgrey text-xs py-2 px-6 uppercase inline-block hover:border-lightgreen transition duration-300 ease-in-out hover:text-white hover:bg-lightgreen"
            >
              Contact <span className="font-bold">Marc Verbeeck</span>
            </a>
          </div>{" "}
          {/* Details*/}
          <div className="col-start-11 lg:col-start-10 md:col-start-2 col-end-23 xl:col-end-24 lg:col-end-25 sm:col-end-24 my-auto">
            <ul className="grid grid-cols-3 w-full text-sm font-bold gap-4 sm:grid-cols-2 sm:text-center">
              <li>AISI 304</li>
              <li>AISI 304L</li>
              <li>AISI 316</li>
              <li>AISI 316L</li>
              <li>AISI 316TI</li>
              <li>AISI 321</li>
              <li>AISI 430</li>
              <li>AISI 420</li>
              <li>AISI 309</li>
              <li>AISI 301 </li>
              <li>AISI 441</li>
              <li>AISI 444</li>
              <li>AISI 434</li>
              <li>DUPLEX</li>
              <li>SUPERDUPLEX</li>
              <li>Aluminium</li> <li>Titanium</li>
              <li>...</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}

export default Stockholder;
