import './Home.css';
import Header from "../../components/Header"
import Wallpaper from '../../components/Wallpaper';
import { useState, useEffect } from "react";

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
      <div>
        <div className={`${(scrollPosition > 50) ? "fixed bg-white py-0 animate__animated animate__fadeIn" : "absolute py-3"} w-full z-50`}>
         <Header scrollPosition={scrollPosition} />
        </div>
        <Wallpaper />
      </div>
      <div className='w-full h-96 border'>
        Net screen One
      </div>
      <div className='w-full h-96 border'>
        Net screen Two
      </div>
    </div>
  );
}

export default Home;
