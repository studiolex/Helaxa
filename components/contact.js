import { useForm, ValidationError } from "@formspree/react";
import Team from "../components/team.js";

function Contact() {
  const [state, handleSubmit] = useForm("xjvlvqrd");

  return (
    <article
      id="contact"
      className="pt-28 mt-16  md:mt-0 sm:pt-28 xs:pt-20 xs:mt-10 mb-28 lg:mb-20  sm:mb-6 background lg:bg-white"
    >
      <Team
        contacts={[
          {
            function: "CEO, Sales & Slitting",
            name: "Marc Verbeeck",
            mail: "marc@helaxa.com",
            phone: "+32 3 237 17 40",
            phoneLink: "tel:+32 3 237 17 40",
            image: "/images/contact/contact_marc.jpg",
          },
          {
            function: "Waterjet",
            name: "Marc van 'T Westeinde",
            mail: "westeinde@helaxa.com",
            phone: "+32 3 326 18 40",
            phoneLink: "tel:+32 3 326 18 40",
            image: "/images/contact/contact_westeinde.jpg",
          },
          {
            function: "Administration",
            name: "Linda Weekers",
            mail: "linda@helaxa.com",
            phone: "+32 3 237 17 40",
            phoneLink: "tel:+32 3 237 17 40",
            image: "/images/contact/contact_linda.jpg",
          },
          {
            function: "PR & Marketing",
            name: "Virginia De Groof",
            mail: "virginia@helaxa.com",
            phone: "+32 3 237 17 40",
            phoneLink: "tel:+32 3 237 17 40",
            image: "/images/contact/contact_virginia.jpg",
          },
          {
            function: "Finance & Accountancy",
            name: "Helena verbeeck",
            mail: "helena@helaxa.com",
            phone: "+32 3 237 17 40",
            phoneLink: "tel:+32 3 237 17 40",
            image: "/images/contact/contact_helena.jpg",
          },
        ]}
      />
    </article>
  );
}

export default Contact;
