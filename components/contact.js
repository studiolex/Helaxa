import { useForm, ValidationError } from "@formspree/react";
import Team from "../components/team.js";

function Contact() {
  const [state, handleSubmit] = useForm("xjvlvqrd");

  return (
    <article
      id="contact"
      className="pt-20 mt-16 md:mt-0 md:pt-12 xs:pt-14 xs:mt-10 mb-28 lg:mb-20 md:mb-12 sm:mb-4 background lg:bg-white"
    >
      <Team
        contacts={[
          {
            function: "Sales / Slitting",
            name: "Marc Verbeeck",
            mail: "marc@helaxa.com",
            phone: "+32 3 237 17 40",
            image: "/images/contact/contact_marc.png",
          },
          {
            function: "Waterjet",
            name: "Marc van 'T Westeinde",
            mail: "westeinde@helaxa.com",
            phone: "+32 3 326 18 40",
            image: "/images/contact/contact_westeinde.png",
          },
          {
            function: "Administration",
            name: "Linda Weekers",
            mail: "linda@helaxa.com",
            phone: "+32 3 237 17 40",
            image: "/images/contact/contact_linda.png",
          },
          {
            function: "PR & Marketing",
            name: "Virginia De Groof",
            mail: "virginia@helaxa.com",
            phone: "+32 3 237 17 40",
            image: "/images/contact/contact_virginia.png",
          },
          {
            function: "Finance & Accountancy",
            name: "Helena verbeeck",
            mail: "helena@helaxa.com",
            phone: "+32 3 237 17 40",
            image: "/images/contact/contact_virginia.png",
          },
        ]}
      />
    </article>
  );
}

export default Contact;
