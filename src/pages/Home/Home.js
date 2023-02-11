import './Home.css';
import Header from "../../components/Header"
import Wallpaper from '../../components/Wallpaper';
import { useState, useEffect } from "react";
import WallpaperTwo from '../../components/WallpaperTwo';

function Home() {

  // Local State 
  const [scrollPosition, setScrollPosition] = useState(0);

  // Effects
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [scrollPosition]);
  
  // Functions
  const handleScroll = () => setScrollPosition(window?.scrollY);

  return (
    <div className="App" onScroll={handleScroll}>
      <div className={`${(scrollPosition > 50) ? "fixed bg-white py-0 animate__animated animate__fadeIn" : "absolute py-3"} w-full z-50`}>
        <Header scrollPosition={scrollPosition} />
      </div>
      <Wallpaper />
      <WallpaperTwo />
      <div className='w-full h-96 border'>
        Net screen Two
      </div>
    </div>
  );
}

export default Home;
