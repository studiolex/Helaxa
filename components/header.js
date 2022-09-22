import Warehouse from "../public/icons/warehouse_green.svg";
import Established from "../public/icons/established_green.svg";
import Videobutton from "../public/icons/video_button.svg";
// import myVideo from "../public/video/helaxa_video.mp4";

import ReactPlayer from "react-player/youtube";
import { useState, useRef } from "react";
// import ReactPlayer from 'react-player/lazy'

export default function Header() {
  const [playVideo, setPlayVideo] = useState(false);
  const videoButton = useRef(null);

  const handlePlayVideo = (e) => {
    e.preventDefault();
    console.log("gedrukt");
    setPlayVideo(true);
  };

  return (
    <article className=" min-h-[100vh] flex flex-col justify-center">
      {/* Title */}
      <div className="grid grid-cols-24 my-auto py-6 md:py-12">
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
      <div className=" grid grid-cols-[.7fr_.7fr_1.2fr] lg:grid-cols-2 bg-lightgrey md:flex md:flex-col">
        {/* Image */}
        <div className="col-span-2 lg:col-span-1 relative">
          <div className="relative ">
            {/* <ReactPlayer
              //   url="https://youtu.be/XOKuAy6Gfr8"
              //   url="/video/helaxa_video.MP4"
              url={myVideo}
              width="100%"
              height="100%"
              className="absolute top-0 left-0"
              //   controls={false}
              playing={playVideo}
              //   light="../public/images/home/stockholder_horizontal.png"
            /> */}

            <video
              controls
              src="video/helaxa_video.MP4"
              poster="images/home/stockholder_horizontal.png"
              width="100%"
              height="100%"
            >
              <p>Sorry your browser doesn`&apos`t support this video</p>
            </video>
          </div>
          <div
            onClick={handlePlayVideo}
            ref={videoButton}
            className="playbutton bg-green absolute rounded-full p-2 -right-14 top-[40%] bg-green/50 "
          >
            <Videobutton />
          </div>
        </div>
        {/* Information */}
        <div className="flex py-8 pl-24  pr-[26%] xl:pr-[12%] h-full flex-col justify-center space-y-10">
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit arcu
            enim, tellus eget euismod senectus enim suspendisse id. Stocholder
            vitae amet tellus urna. Porta ac viverra eget egestas nec non tellus
            vel. At neque enim lacus, venenatis.
          </p>
          <div className="grid grid-cols-2">
            <a className="text-sm font-bold uppercase pb-1">Watch video</a>
            <a href="#slitting" className="text-sm uppercase text-center pb-1">
              Our services
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
