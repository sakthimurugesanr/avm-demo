import React from "react";
import sampleVideo from "../assets/sample.mov";

const VideoSection = () => {
  return (
    <div className="w-full flex justify-center items-center px-4 py-10">
      <video
        src={sampleVideo}
        autoPlay
        loop
        muted
        playsInline
        className="w-full max-w-5xl rounded-2xl shadow-lg"
      />
    </div>
  );
};

export default VideoSection;
