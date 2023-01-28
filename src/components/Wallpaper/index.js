import React, { useRef, useEffect } from 'react'
import wallPaperVideo from '../../images/spinning-polygons-video.mp4';

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
    <div>
        <video 
            ref={videoRef} 
            style={{
                width: "100%"
            }} 
            autoPlay
            muted="muted"
        >
            <source src={wallPaperVideo} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
  )
}

export default Wallpaper