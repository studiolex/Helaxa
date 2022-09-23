import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import Scrollspy from "react-scrollspy";
import { useRouter } from "next/router";
import Image from "next/image";

import Mail from "../public/icons/mail_bold_green.svg";
import Phone from "../public/icons/phone_bold_green.svg";

export default function Contactperson({ contacts }) {
  // const router = useRouter();
  // const path = router.pathname;

  return (
    <>
      {contacts.map((contact) => (
        <div className="bg-lightgrey mr-12" key={contact.mail}>
          <div>
            <Image
              src={contact.image}
              alt={contact.placeholder}
              width={300}
              height={300}
              // placeholder="blur"
            />
          </div>
          <div className="p-4">
            <div>
              <p className="text-darkgrey text-sm">{contact.function}</p>
              <h3 className="font-bold text-md uppercase">{contact.name}</h3>
            </div>
            <div className="pt-4 pb-2 font-medium flex flex-col divide-y divide-darkgrey">
              <div className="grid items-center grid-cols-[1.7rem_auto] py-2">
                <div className="flex justify-center">
                  <Mail />
                </div>
                <p className="ml-1 text-sm">{contact.mail}</p>
              </div>
              <div className="grid items-center grid-cols-[1.7rem_auto] py-2">
                <div className="flex justify-center">
                  <Phone />
                </div>
                <p className="ml-1 text-sm">{contact.phone}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
