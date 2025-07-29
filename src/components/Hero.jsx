import React, { useRef, useState } from 'react'



const Hero = () => {
    const [ currentIndex, setCurrentIndex] = useState(1)
    const [hasClicked , sethasClicked] = useState(false);
const [isLoaded, setisLoaded] = useState(true); 
const [loadedVideos, setloadedVideos] = useState(0);
const totalvideos =4 ;

const nextvideoRef = useRef(null)
    const getVideoSrc = (index)=> `videos/hero-${index}.mp4`
const handleVideoLoad =()=>{
 setisLoaded((prev) => prev +1)
}
const upcomingVideos = (currentIndex % totalvideos) + 1; 
 const handleMinivdClick =() =>{

    sethasClicked(true);
    setCurrentIndex(upcomingVideos)
 }

  return (
    <div className=' relative h-dvh w-screen overflow-x-hidden'>
      <div id='video-frame' className=' relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
<div>
    <div className=' mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg '>
 <div onClick={handleMinivdClick} className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100' >
  <video  
  ref={nextvideoRef}
  src={getVideoSrc(upcomingVideos) }
  muted 
  loop

  id='current-video'
  className='size-64 origin-center scale-150 object-cover object-center'
  onLoadedData={handleVideoLoad}
  />


    </div>
    </div>

   <video
   ref={nextvideoRef}
    src={getVideoSrc(currentIndex)}
    loop
    id='next-video'
    className='absolute-center invisible absolute z-20 size-64 object-cover object-center'
    onLoadedData={handleVideoLoad}
   />
   <video
   
   src={getVideoSrc(currentIndex === totalvideos -1 ? 1 :currentIndex)}
   autoPlay
   loop 
   muted
   className='absolute left-0 top-0 size-full object-cover object-center'
   />


    </div>
    </div>
    </div>
  )
}

export default Hero
