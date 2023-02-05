import React, { useRef, useEffect } from 'react'
import wallPaperVideo from '../../images/spinning-polygons-video.mp4';
import WallpaperImage from "../../images/Subtraction-3@2x.png";
import "./Wallpaper.css";

const Wallpaper = () => {

  const videoRef = useRef();

  useEffect(() => {
    console.log(videoRef?.current, videoRef?.current?.currentTime)
    // videoRef.current && videoRef.current.play()
    if(videoRef?.current) {
        const interval = setInterval(() => {
            (videoRef?.current?.currentTime >= 19) && videoRef?.current?.play();
        }, 1000);
    }
    
  }, [videoRef?.current?.currentTime]);
  
  return (
    <div className='w-full relative'>
        <div className='absolute' style={{
          width: "200vw",
          height: "100vh",
          overflow: "hidden"
        }}>
          <img style={{
          }} src={WallpaperImage} className="w-full h-full" alt="Wallpaper images" />
        </div>
        <video 
            ref={videoRef} 
            style={{
              width: "200vw",
              height: "100vh",
              outline: "0px"
            }} 
            loop
            autoPlay
            muted
        >
            <source src={wallPaperVideo} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
  )
}

export default Wallpaper