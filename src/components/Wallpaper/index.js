import React, { useRef, useEffect, useState } from 'react'
import wallPaperVideo from '../../images/spinning-polygons-video.mp4';
import WallpaperImage from "../../images/Subtraction-3@2x.png";
import "./Wallpaper.css";
import TypeIt from "typeit-react";

const Wallpaper = () => {
  // Ref
  const videoRef = useRef();

  useEffect(() => {
    // videoRef.current && videoRef.current.play()
    if(videoRef?.current) {
        const interval = setInterval(() => {
            (videoRef?.current?.currentTime >= 19) && videoRef?.current?.play();
        }, 1000);

        return () => interval;
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
        <div className='absolute w-full bottom-20 px-14 animate__animated animate__fadeIn'>
          <h2 className='text-left text-6xl font-bold'
          >A Web3 consultancy</h2>
          <div className='flex'>
            <p className='text-xl font-bold'>built by&nbsp;</p>
            <p className='text-xl font-bold'>
              <TypeIt
                options={{ loop: true, speed: 3, cursor: false }}
                getBeforeInit={instance => {
                  instance
                    .type('<span>crypto-native strategists</span>')
                    .pause(750)
                    .delete()
                    .pause(500)
                    .type('<span>NFT enthusiasts</span>')
                    .pause(750)
                    .delete()
                    .pause(500)
                    .type('<span>creators</span>')
                    .pause(750)
                    .delete()
                    .pause(500)
                    .type('<span>blockchain experts</span>')
                    .pause(750)
                    .delete()
                    .pause(500)
                    .type('<span>analysts</span>')
                    .pause(750)
                    .delete()
                    .pause(500)
                    .type('<span>degens</span>')
                    .pause(750)
                    .delete()
                    .pause(500)
                    .type('<span> marketers</span>')
                    .pause(750)
                    .delete()
                    .pause(500)

                  // Remember to return it!
                  return instance;
                }}
              />
            </p>
          </div>
        </div>
    </div>
  )
}

export default Wallpaper