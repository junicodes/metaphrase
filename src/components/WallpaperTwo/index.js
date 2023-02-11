import React from 'react'
import "./Wallpapertwo.css";
import FirstFile from "../../images/V3-rocket.gif";
import SecondFile from "../../images/Group-1536-1.png";
import ThirdFile from "../../images/Group-1537@2x-2-768x585.png"
import FourthFile from "../../images/V3-rocket.gif"

const WallpaperTwo = () => {
  return (
    <div className={`bg-white w-full h-[1000px]`}>
        <div className='flex justify-between w-full px-28 py-10'>
            <div className='w-1/2 relative'>
                <div 
                    style={{
                        width: "95%",
                        height: "420px",
                    }}
                >
                    <img 
                        src={FirstFile} 
                        className="w-full h-full" alt="Wallpaper images" 
                    />
                </div>
                <div 
                    style={{
                        width: "55%",
                        height: "265px",
                    }}
                    className='-mt-[150px] -ml-[20px] absolute z-10'
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                >
                    <img 
                        src={SecondFile} 
                        className="w-full h-full" alt="Wallpaper images" 
                    />
                </div>
                <div 
                    style={{
                        width: "95%",
                        height: "420px",
                    }}
                    className='-ml-[70px] absolute'
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                >
                    <img 
                        src={ThirdFile} 
                        className="w-full h-full" alt="Wallpaper images" 
                    />
                </div>
                <div 
                    style={{
                        width: "55%",
                        height: "265px",
                    }}
                    className='-top-[-580px] ml-[250px] absolute'
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                >
                    <img 
                        src={FourthFile} 
                        className="w-full h-full" alt="Wallpaper images" 
                    />
                </div>
            </div>
            <div className='w-1/2'>
                <div className='flex flex-col justify-start mt-44 px-10'>
                    <h3 className='text-[40px] font-medium text-left'>We’re here to guide the</h3>
                    <h3 className='text-[40px] font-medium text-left'>world’s leading enterprises</h3>
                    <h3 className='text-[40px] font-medium text-left'>and intellectual property</h3>
                    <h3 className='text-[40px] font-medium text-left'>owners in the next</h3>
                    <h3 className='text-[40px] font-medium text-left'>iteration of consumer</h3>
                    <h3 className='text-[40px] font-medium text-left'>behavior.</h3>
                </div>

                <div className='flex flex-col justify-start mt-10 px-10'>
                    <p className='text-xl text-gray-700 font-normal text-left'>
                        At Vayner3, we’re not interested in short-
                    </p>
                    <p className='text-xl text-gray-700 font-normal text-left'>
                        term thinking. We believe in blockchain-
                    </p>
                    <p className='text-xl text-gray-700 font-normal text-left'>
                        based enterprise and are excited to play
                    </p>
                    <p className='text-xl text-gray-700 font-normal text-left'>
                        an active role in creating the future.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WallpaperTwo