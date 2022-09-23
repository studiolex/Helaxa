import Warehouse from "../public/icons/warehouse_green.svg";
import Established from "../public/icons/established_green.svg";
import VideobuttonPlay from "../public/icons/video_button_play.svg";
import VideobuttonPause from "../public/icons/video_button_pause.svg";

import ReactPlayer from "react-player/youtube";
import { useState, useRef } from "react";

export default function Header() {
  const [playVideo, setPlayVideo] = useState(false);
  const videoButton = useRef(null);
  const videoRef = useRef();

  const handlePlayVideo = (e) => {
    e.preventDefault();
    console.log("gedrukt");
    setPlayVideo(true);
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlayVideo(true);
    } else {
      setPlayVideo(false);
      videoRef.current.pause();
    }
  };

  return (
    <article className=" min-h-[100vh] flex flex-col justify-center">
      {/* Title */}
      <div className="grid grid-cols-24 my-auto py-6 lg:py-20 sm:py-16 xs:py-10">
        <div className="col-start-3  xl:col-start-2 col-end-25 lg:col-end-24 mt-[4rem]">
          <h1 className="text-3xl font-bold font-mono text-black md:text-2xl">
            Helaxa, <span className="text-green">your</span> stainless steel
            partner,
            <br className="lg:hidden" /> providing the service you{" "}
            <span className="text-green">deserve</span>
            <span className="ml-1">.</span>
          </h1>
        </div>
      </div>
      <div className=" grid grid-cols-[1fr_1.05fr] lg:grid-cols-2 bg-lightgrey md:flex md:flex-col">
        {/* Image */}
        <div className="lg:col-span-1 relative">
          <div className="relative w-full h-full">
            <video
              ref={videoRef}
              controls={false}
              poster="images/home/placeholder.png"
              width="100%"
              height="100%"
              onClick={handlePlayVideo}
            >
              <source src="videos/helaxa_video.MP4" type="video/mp4"></source>
              <p>Sorry your browser doesn&apos;t support this video</p>
            </video>
          </div>
          <div
            onClick={handlePlayVideo}
            ref={videoButton}
            className="playbutton bg-green absolute rounded-full p-2 -right-14 top-[40%] md:top-auto md:-bottom-14 md:right-4 bg-green/50 opacity-100 hover:opacity-90 transition duration-300 ease-in-out cursor-pointer"
          >
            {playVideo && (
              <p>
                <VideobuttonPause />
              </p>
            )}
            {!playVideo && (
              <p>
                <VideobuttonPlay />
              </p>
            )}
          </div>
        </div>
        {/* Information */}
        <div className="flex py-8 md:py-20 pl-24 sm:px-6 md:px-8  pr-[10vw] xl:pr-[12%] h-full flex-col justify-center space-y-10 lg:space-y-6 md:space-y-12">
          <p className="text-sm leading-loose">
            <span className=" italic font-semibold">Founded in 2008,</span> with
            allround service being the number one priority. Helaxa&apos;s
            machinery,{" "}
            <a
              href="#waterjet"
              className="underline italic font-semibold hover:text-lightgreen transition duration-300 ease-in-out cursor-pointer"
            >
              the biggest waterjet in Europe
            </a>{" "}
            -{" "}
            <span className="italic">
              leader in cutting every material in the perfect shape and size -
            </span>
            additioned with a{" "}
            <a
              href="#slitting"
              className="underline italic font-semibold hover:text-lightgreen transition duration-300 ease-in-out cursor-pointer"
            >
              coil slitting machine,
            </a>{" "}
            to cut coils in narrow bands from 15mm x 650mm we delivery you
            personal and professional service.
          </p>
          <div className="flex items-center md:flex  sm:w-full md:space-x-6 sm:space-x-0">
            <a
              className="text-sm font-bold uppercase inline-block sm:hidden md:bg-green md:border-2 md:border-green md:text-white md:text-center py-2 md:px-16"
              onClick={handlePlayVideo}
            >
              {playVideo && (
                <p className="inline-block border-b-2 border-darkgrey text-darkgrey md:border-b-0">
                  Pause video
                </p>
              )}
              {!playVideo && (
                <p className="text-green inline-block border-b-2 border-green md:border-b-0 md:text-lightgrey">
                  Watch video{" "}
                </p>
              )}
            </a>
            <a
              href="#slitting"
              className="text-sm uppercase text-center md:border-2 md:border-black md:bg-lightgrey py-2 md:px-16 sm:w-full mx-auto"
            >
              <p className="border-b-[.08rem] border-black inline-block md:border-0">
                {" "}
                Our services
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-24 my-auto py-8 md:py-12">
        {/* Spotlight */}
        <div className="col-start-3  xl:col-start-2 col-end-23 xl:col-end-24 grid grid-cols-4 md:grid-cols-[2fr_2fr_1fr] mb-auto ">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <div className="">
                <Warehouse />
              </div>
              <p className="font-extrabold text-2xl uppercase tracking-wider">
                8000m2
              </p>
            </div>
            <p className="relative text-darkgrey">Warehousing</p>
          </div>
          <div className="space-y-1 md:justify-self-center">
            <div className="flex items-center space-x-2">
              <Established />

              <p className="font-extrabold text-2xl uppercase tracking-wider">
                2008
              </p>
            </div>
            <p className="text-darkgrey">Established</p>
          </div>
          <a href="#slitting" className="col-start-3 col-end-5 container ">
            <div className="chevron"></div>
            <div className="chevron"></div>
            <div className="chevron"></div>
          </a>
        </div>
      </div>
    </article>
  );
}
