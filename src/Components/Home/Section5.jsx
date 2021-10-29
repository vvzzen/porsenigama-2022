import React from "react";
import Venue from "./Venue";

const Section5 = () => {
  return (
    <>
      <div className="w-full relative bg-biru">
        <h2 className="hidden lg:block text-8xl font-nuku text-kuning bg-biru">
          Venue
        </h2>
        <div className="bg-biru pb-20 lg:pb-40">
          <Venue />
        </div>
      </div>
      <img
        className="w-full relative z-50 bg-krem -mt-1"
        src={`${process.env.PUBLIC_URL}/images/Sec5/bg_end.svg`}
        alt=""
      />
    </>
  );
};

export { Section5 };
