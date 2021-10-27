import React from "react";
import Jadwal from "./Jadwal";

const Section6 = () => {
  return (
    <>
    <div className="hidden lg:block relative bg-krem">
        <h2 className="hidden lg:block text-8xl font-nuku text-merah my-16"> Pertandingan Terdekat </h2>
        <div className="h-96">
          <Jadwal />
        </div>
    </div>
    </>
  );
};

export { Section6 };
