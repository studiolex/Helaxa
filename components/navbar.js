import Link from "next/link";
import { Fragment } from "react";
import { Disclosure, Transition } from "@headlessui/react";

import Logo from "../public/icons/navigation_logo.svg";
import Navitems from "../components/navitems.js";
import Navextra from "../components/navextra.js";

import MenuOpen from "../public/icons/menu_opened.svg";
import MenuClosed from "../public/icons/menu_closed.svg";

function Navbar() {
  return (
    <>
      {" "}
      <Disclosure as="div" className="w-full">
        <div className="nav bg-white/90 w-full fixed  z-[12]">
          <nav className=" grid grid-cols-24 ">
            <h1 className="hidden">Navigation</h1>
            <div className="col-start-3  xl:col-start-2 col-end-23  xl:col-end-24 py-2 xs:py-3">
              <ul className="flex items-center justify-between w-full md:grid md:grid-cols-[1fr_2fr] xs:flex">
                <li>
                  <Link href="/">
                    <a>
                      <Logo />
                    </a>
                  </Link>
                </li>
                <div className="xs:hidden md:justify-self-end">
                  <Navitems />{" "}
                </div>{" "}
                <div className="xs:hidden md:row-start-1 md:col-span-2  md:pb-2 md:mb-2">
                  <Navextra />
                </div>
                {/* {({ open }) => ( */}
                <Disclosure.Button className="hidden xs:flex">
                  <span className="sr-only">Open main menu</span>
                  {/* {open ? ( */}
                  <div className="ui-open:hidden ui-not-open:flex flex items-center space-x-2">
                    <p className="font-black text-gold uppercase ">Menu</p>
                    <MenuClosed />
                  </div>
                  {/* ) : ( */}
                  <div className="ui-not-open:hidden ui-open:flex items-center space-x-2">
                    <p className="font-black text-gold uppercase ">Close</p>
                    <MenuOpen />{" "}
                  </div>
                  {/* )}{" "} */}
                </Disclosure.Button>
                {/* )} */}
              </ul>
            </div>
          </nav>{" "}
        </div>
        <Transition
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Disclosure.Panel
            as="ul"
            className="mobilenav hidden xs:flex xs:flex-col  w-full h-screen fixed z-[11] items-center justify-center xs:pb-16 bg-white/90"
          >
            <Navitems />
            <Navextra />
          </Disclosure.Panel>
        </Transition>
      </Disclosure>
    </>
  );
}

export default Navbar;
