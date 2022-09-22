import { useForm, ValidationError } from "@formspree/react";
import Contactperson from "../components/contactperson.js";

function Contact() {
  const [state, handleSubmit] = useForm("xjvlvqrd");

  return (
    <article
      id="contact"
      className="pt-20 mt-16 md:mt-0 md:pt-12 xs:pt-14 xs:mt-10 mb-28 lg:mb-20 md:mb-12 sm:mb-4 background lg:bg-white"
    >
      <h2 className="hidden">Contact</h2>
      <section className="grid grid-cols-24 justify-center items-center ">
        <div className="col-start-3 xl:col-start-2 col-end-16 xl:col-end-17 lg:col-end-18 md:col-end-20 sm:col-end-24">
          <div className="text-left">
            <p className="font-bold uppercase text-green">Contact</p>
            <h1 className="text-3xl font-bold font-mono text-black mb-10">
              Let’s connect and get to know eachother.
            </h1>
          </div>
        </div>
      </section>{" "}
      <section className="grid grid-cols-24 justify-center items-center ">
        <div className="col-start-3 col-end-25 xl:col-start-2">
          <div>
            <h2 className="font-bold uppercase text-green hidden">Team</h2>
          </div>

          <article className="flex my-12">
            <Contactperson
              function="Sales / Slitting"
              name="Marc Verbeeck"
              mail="marc@helaxa.com"
              phone="+32 3 237 17 40"
              image=""
            />
            <Contactperson
              function="Waterjet"
              name="Marc van 'T Westeinde"
              mail="westeinde@helaxa.com"
              phone="+32 3 326 18 40"
              image=""
            />
            <Contactperson
              function="Administration"
              name="Linda Weekers"
              mail="linda@helaxa.com"
              phone="+32 3 237 17 40"
              image=""
            />
            <Contactperson
              function="PR & Marketing"
              name="Virginia De Groof"
              mail="helena@helaxa.com"
              phone="+32 3 237 17 40"
              image=""
            />
            <Contactperson
              function="Finance"
              name="Helena Verbeeck"
              mail="helena@helaxa.com"
              phone="+32 3 237 17 40"
              image=""
            />
          </article>
        </div>
      </section>
    </article>
  );
}

export default Contact;
