import React from "react";
import Jadwal from "./Jadwal";
import {BrowserRouter as Router} from 'react-router-dom';

const Section6 = () => {
  return (
    <div className="pt-10 relative bg-krem">
        <h2 className="hidden lg:block text-8xl font-nuku text-merah my-16"> Pertandingan Terdekat </h2>
        <div className="pb-20">
          <Jadwal />
        </div>
    </div>
  );
 
};

export { Section6 };
