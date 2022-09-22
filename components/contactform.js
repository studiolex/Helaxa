import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";

const Contactform = ({ color }) => {
  const [state, handleSubmit] = useForm("xjvlvqrd");

  return (
    <>
      <div className="col-start-3 col-end-12">
        <div>
          <Image
            src="/images/home/slitting.png"
            alt="Picture of Coil Slitting"
            width={754}
            height={411}
          />
        </div>
      </div>
      <div className="col-start-13 col-end-22">
        <h2>Contact</h2>
        <div>
          <form className="grid grid-cols-2" onSubmit={handleSubmit}>
            <p className="col-start-1 col-end-1">
              Are you interested to work with us or got any questions?
            </p>
            <div className="flex flex-col col-start-2 cold-end-2">
              <label htmlFor="name">Your name</label>
              <input
                required
                placeholder="Your name"
                name="name"
                type="text"
                id="name"
                className="border-b-2 border-black bg-transparant"
              ></input>
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="mail">Your E-mail</label>
              <input
                required
                placeholder="Your E-mail"
                name="mail"
                type="email"
                id="mail"
                className="border-b-2 border-black bg-transparant"
              ></input>
              <ValidationError
                prefix="Email"
                field="mail"
                errors={state.errors}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message">Project description</label>
              <textarea
                required
                rows="4"
                placeholder="Tell something more about your project.."
                name="message"
                id="message"
                className="border-b-2 border-black bg-transparant"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className=" text-green font-bold font-mono  mb-10 border-4 border-green py-2 px-8"
            >
              Send project
            </button>
            <ValidationError errors={state.errors} />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contactform;
