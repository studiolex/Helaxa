import Link from "next/link";
import Footerlogo from "../public/icons/footer_logo.svg";
import Studiolex from "../public/icons/studiolex.svg";

const items = [
  {
    name: "Slitting",
    href: "/#slitting",
  },
  {
    name: "Waterjet",
    href: "/#waterjet",
  },
  {
    name: "Stockholder",
    href: "/#stockholder",
  },
  {
    name: "Contact",
    href: "/#contact",
  },
];

function Footer() {
  return (
    <footer className=" items-center  py-20 lg:py-12 lg:pb-4 bg-lightgrey sm:bg-white sm:my-4">
      <div className="grid grid-cols-24">
        <ul className="col-start-3 xl:col-start-2 col-end-23 xl:col-end-24 grid grid-cols-3 w-full h-full items-center grid-rows-2 lg:grid-rows-3 lg:grid-cols-[2fr_1fr] sm:flex sm:flex-col sm:space-y-16">
          <div className="flex flex-col justify-between h-full lg:col-start-1 lg:row-start-1">
            <Footerlogo />
          </div>{" "}
          <div className="flex flex-col items-end sm:items-center leading-loose font-bold row-start-1 row-span-2 col-start-3 lg:row-start-1 lg:row-span-0 lg:col-start-2 lg:row-span-2 lg:justify-center sm:text-center">
            {items.map((item) => (
              <Link href={item.href} key={item.name}>
                <a className="hover:text-darkgrey transition ease-in-out duration-300">
                  {item.name}
                </a>
              </Link>
            ))}
          </div>{" "}
          <div className="flex flex-col text-center font-medium  text-darkgrey row-start-1 row-span-2 col-start-2 lg:col-start-1 lg:text-left lg:row-start-2 lg:row-span-1 leading-loose lg:leading-normal sm:leading-loose sm:text-center">
            <a
              href="https://goo.gl/maps/oaAbQRMrLoXk1gk6A"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lightgreen transition ease-in-out duration-300"
            >
              Postbaan 68, 2910 Essen, Belgium
            </a>
            <a
              href="mailto:info@helaxa.com"
              className="hover:text-lightgreen transition ease-in-out duration-300"
            >
              info@helaxa.com
            </a>
            <a
              href="callto:+3232371740"
              className="hover:text-lightgreen transition ease-in-out duration-300"
            >
              +32 3 237 17 40
            </a>
          </div>
          <a
            href="https://www.studiolex.io"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-auto col-start-1 lg:row-start-3 lg:col-span-2 lg:justify-center"
          >
            <p className="mr-1">Created by {""}</p>
            {""}
            <Studiolex />
          </a>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
