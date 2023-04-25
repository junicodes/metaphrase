import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Header from "../../components/Header-2";
import "../Learn/Learn.css";
import { jobs } from "./constant";

const Jobs = () => {
  // Local State
  const [scrollPosition, setScrollPosition] = useState(0);

  // Effects
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  // Functions
  const handleScroll = () => setScrollPosition(window?.scrollY);
  return (
    <div div className="App" onScroll={handleScroll}>
      <div
        className={`${
          scrollPosition > 50
            ? "fixed bg-black py-0 animate__animated animate__fadeIn"
            : "absolute py-3"
        } w-full z-50`}
      >
        <Header scrollPosition={scrollPosition} />
      </div>

      {/* Jobs */}
      <div className="mt-40 mx-20 text-left">
        <div className="text-4xl font-semibold mb-5">VaynerMedia LLC</div>
        <div className="text-lg">
          VaynerMedia is a full-service digital agency built for the now. We
          partner with clients to drive their business outcomes with
          best-in-class video production, media planning & distribution,
          influencer marketing and everything in between. Our people aren't just
          our greatest asset; they're family. We're writers, artists, comedians,
          entrepreneurs, foodies, photographers, and data junkies. We live and
          breathe emerging tech, and we are always growing.
          <br />
          <br />
          Curious? What will you teach us? Check out the jobs below:
        </div>
        <div>
          <div className="text-2xl font-semibold my-5">
            Current Job Openings
          </div>
          {jobs?.map((job, index) => (
            <div key={index} className="mb-5">
              <div className="mb-3 font-semibold text-xl">{job?.title}</div>
              <div className="text-[#0942B0] font-semibold text-xl">
                {job?.desc}
              </div>
              <div className="font-light text-[#75757]">{job?.location}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
