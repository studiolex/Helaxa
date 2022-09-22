import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import Scrollspy from "react-scrollspy";
import { useRouter } from "next/router";

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

export default function Navitems() {
  return (
    <>
      <Scrollspy
        items={["slitting", "waterjet", "stockholder", "contact"]}
        currentClassName="active"
        className="flex items-center text-xs space-x-8 sm:space-x-4 xs:mt-auto xs:flex-col xs:space-x-0 xs:space-y-8"
      >
        {items.map((item) => (
          <Disclosure.Button
            key={item.name}
            as="a"
            href={item.href}
            className="uppercase xs:normal-case text-black font-bold text-xs xs:text-3xl text-center xs:font-sans xs:font-light hover:text-lightgreen transition ease-in-out duration-300 "
          >
            <p className="relative w-max menulink ">
              <span>{item.name}</span>
              <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-[.1rem] bg-lightgreen"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-[.1rem] bg-lightgreen"></span>
            </p>{" "}
          </Disclosure.Button>
        ))}
      </Scrollspy>
    </>
  );
}
