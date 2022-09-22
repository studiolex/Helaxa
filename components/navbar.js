import Link from "next/link";
import { Fragment } from "react";
import { Disclosure, Transition } from "@headlessui/react";

import Logo from "../public/icons/navigation_logo.svg";
import Navitems from "../components/navitems.js";
import Navextra from "../components/navextra.js";

function Navbar() {
  return (
    <>
      {" "}
      <Disclosure as="div" className="w-full">
        <nav className="nav grid grid-cols-24 w-full fixed bg-white/90 z-[12]">
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
              <Disclosure.Button as={Fragment} className="hidden xs:flex">
                <button>Open menu</button>
              </Disclosure.Button>
            </ul>
          </div>
        </nav>{" "}
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
            className="mobilenav hidden xs:flex xs:flex-col  w-full h-screen fixed z-[11] items-center justify-center xs:pb-12 bg-white/90"
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
