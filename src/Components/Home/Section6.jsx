import React from "react";
import Jadwal from "./Jadwal";

const Section6 = () => {
  return (
    <div className="pt-10 relative bg-krem">
        <h2 className="hidden lg:block text-8xl font-nuku text-merah my-16"> Pertandingan Hari Ini </h2>
        <div className="pb-20">
          <Jadwal />
        </div>
    </div>
  );
 
};

export { Section6 };
