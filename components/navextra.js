import Link from "next/link";
import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";

import Mail from "../public/icons/mail_bold.svg";
import Phone from "../public/icons/phone_bold.svg";

export default function Navextra() {
  return (
    <>
      <div className="text-xs font-bold text-right md:space-x-6 xs:mt-auto md:flex md:justify-end w-full xs:justify-around xs:text-green xs:text-sm xs:text-center xs:space-x-0 xs:items-center">
        <a
          href="mailto:info@helaxa.com"
          className="flex justify-end  md:items-center md:space-x-2 xs:flex-col-reverse"
        >
          <p className="hover:text-lightgreen transition ease-in-out duration-300">
            info@helaxa.com
          </p>
          <div className="hidden md:flex xs:mb-2">
            <Mail />
          </div>
        </a>{" "}
        <p className="hidden md:flex xs:text-black">|</p>
        <a
          href="callto:+32 3 237 17 40"
          className="flex justify-end  md:items-center md:space-x-2 xs:flex-col-reverse "
        >
          <p className="hover:text-lightgreen transition ease-in-out duration-300">
            +32 3 237 17 40
          </p>
          <div className="hidden md:flex xs:mb-2">
            <Phone />
          </div>
        </a>
      </div>
    </>
  );
}
