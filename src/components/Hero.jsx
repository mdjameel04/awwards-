import React, { useRef, useState } from 'react'

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const totalVideos = 4;

  const currentVideoRef = useRef(null);
  const nextVideoRef = useRef(null);

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  let upcomingVideos = (currentIndex % totalVideos) + 1;
  if (upcomingVideos > totalVideos) upcomingVideos = 1;

  const handleMiniVideoClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideos);
  };

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        {/* Mini preview video */}
        <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
          <div
            onClick={handleMiniVideoClick}
            className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
          >
            <video
              ref={nextVideoRef}
              src={getVideoSrc(upcomingVideos)}
              muted
              loop
              className="size-64 origin-center scale-150 object-cover object-center"
              onLoadedData={handleVideoLoad}
            />
          </div>
        </div>

        {/* Hidden video for preload */}
        <video
          ref={currentVideoRef}
          src={getVideoSrc(currentIndex)}
          loop
          className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
          onLoadedData={handleVideoLoad}
        />

        {/* Main background video */}
        <video
          src={getVideoSrc(currentIndex === totalVideos ? 1 : currentIndex)}
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 size-full object-cover object-center"
        />

        {/* Overlay content */}
        <h1 className=" special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75 ">
          G<b>A</b>MING
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="hero-heading ">redefine</h1>
            <p className=' mb-5 max-w-64  text-blue-100'> enter the metagame Layer <br/> Unleash the play</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

