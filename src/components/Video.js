import React from "react";
import video from "../img/file2.mp4";
import pub from "../img/pub.webm";

const Video = () => {
  return (
    <div>
      <div className="bg-hero-pattern3 bg-no-repeat bg-cover h-[400px] md:h-[585px] truncate">
        <div className="relative flex items-center justify-center h-full ">
          <video
            src={video}
            autoPlay
            loop
            className=" mix-blend-screen absolute w-full"
          />
          <video
            src={pub}
            autoPlay
            loop
            controls
            className="z-50 w-[380px] md:w-[750px] h-auto rounded-xl border-[#13B67A] border-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Video;
