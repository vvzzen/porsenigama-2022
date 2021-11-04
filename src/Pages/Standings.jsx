import { db } from "../data/db";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Standings = () => {
  const [standingsData, setStandingsData] = useState([]);
  const [standingsRef, setStandingsRef] = useState([]);
  const [filter, setFilter] = useState('0');

  const filterlib = ["Badminton", "badminton", "sepak", "panahan", "esports", "judo", "karate",
                      "taekwondo", "silat", "catur", "panjat", "bridge", "puisi", "monolog",
                      "band", "lukis", "makeup", "keroncong", "vocal", "naskah", "foto",
                      "tari"]

  const history = useHistory();

  useEffect(() => {
    const medalsData = db.collection("standings").orderBy("name").onSnapshot((snap) => {
      let data = snap.docs.map((doc) => doc.data());
      data = data.sort((a, b) => {
        if (a.gold < b.gold) {
          return 1;
        } else if (a.gold > b.gold) {
          return -1;
        } else {
          if (a.silver < b.silver) {
            return 1;
          } else if (a.silver > b.silver) {
            return -1;
          } else {
            if (a.bronze < b.bronze) {
              return 1;
            } else if (a.bronze > b.bronze) {
              return -1;
            } else {
              return 0;
            }
          }
        }
      });
      setStandingsData(data);
      return medalsData();
    });
  }, []);

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

  useEffect(() => {
    const medalsData = db.collection("standings").doc(filterlib[Number(filter)]).onSnapshot((doc) => {
      let data = doc.data();
      setStandingsRef(data);
      return medalsData();     
    });
  }, [filter]);

  const goBack = () => {
    history.push(`${process.env.PUBLIC_URL}/`);
  };

  const optionClick = () => {
    setFilter(document.getElementById("filterli").value);
  }

  useEffect(() => {
    console.log(standingsRef);
  }, [standingsRef])

  return (
    <div className="min-h-screen font-nuku tracking-wide bg-krem relative overflow-hidden">
      <img
        src={`${process.env.PUBLIC_URL}/images/Standings/Bg.png`}
        alt=""
        className="absolute"
      />
      <div className="h-4 md:hidden"></div>
      <div
        className="hidden md:flex"
        style={{
          height: "50vh",
        }}
      ></div>
      <h1
        className="font-bold pt-24 text-center text-5xl md:text-fourteenvh tracking-wider relative text-biru"
        style={{
          textShadow: [
            "-1px -1px 0 #FBE5D2",
            "-0.5px -1px 0 #FBE5D2",
            "0px -1px 0 #FBE5D2",
            "0.5px -1px 0 #FBE5D2",
            "1px -1px 0 #FBE5D2",
            "1.5px -0.5px 0 #FBE5D2",
            "2px 0px 0 #FBE5D2",
            "2.5px 0.5px 0 #FBE5D2",
            "3px 1px 0 #FBE5D2",
            "3.5px 1.5px 0 #FBE5D2",
            "4px 2px 0 #FBE5D2",
            "4.5px 3.5px 0 #FBE5D2",
            "5px 3px 0 #FBE5D2",
            "-1px 0px 0 #FBE5D2",
            "-1px 1px 0 #FBE5D2",
            "-0.5px 1.5px 0 #FBE5D2",
            "0px 2px 0 #FBE5D2",
            "0.5px 2.5px 0 #FBE5D2",
            "1px 1px 0 #FBE5D2",
            "1.5px 1.5px 0 #FBE5D2",
            "2px 2px 0 #FBE5D2",
            "2.5px 2.5px 0 #FBE5D2",
            "3px 3px 0 #FBE5D2",
            "3.5px 3.5px 0 #FBE5D2",
            "4px 4px 0 #FBE5D2",
            "4.5px 4.5px 0 #FBE5D2",
            "5px 5px 0 #FBE5D2",
            "1px 3px 0 #FBE5D2",
            "1.5px 3.5px 0 #FBE5D2",
            "2px 4px 0 #FBE5D2",
            "2.5px 4.5px 0 #FBE5D2",
            "3px 5px 0 #FBE5D2",
          ],
        }}
      >
        Klasemen
      </h1>
      <div className="h-4 md:hidden"></div>
      <div
        className="hidden md:flex"
        style={{
          height: "50vh",
        }}
      ></div>
      <div className = 'flex justify-end mx-12'>
        <select id="filterli" className="dropdown relative font-sansPro font-semibold text-xs md:text-threevh" onClick={optionClick}>
          <option value="0">Keseluruhan</option>
          <option value="1">Badminton</option>
          <option value="2">Sepak Bola</option>
          <option value="3">Panahan</option>
          <option value="4">E-Sports</option>
          <option value="5">Judo</option>
          <option value="6">Karate</option>
          <option value="7">Taekwondo</option>
          <option value="8">Silat</option>
          <option value="9">Catur</option>
          <option value="10">Panjat Tebing</option>
          <option value="11">Bridge</option>
          <option value="12">Puisi</option>
          <option value="13">Monolog</option>
          <option value="14">Band</option>
          <option value="15">Melukis</option>
          <option value="16">Kreasi Makeup</option>
          <option value="17">Keroncong</option>
          <option value="18">Vocal Group</option>
          <option value="19">Naskah Lakon</option>
          <option value="20">Fotografi</option>
          <option value="21">Seni Tari</option>
        </select>
      </div>
      <div className="w-full flex justify-center my-12 text-center relative">
        <table className="text-xs md:text-fivevh mx-12">
          <thead>
            <tr>
              <th
                className="px-6 border-3 border-ungugaje"
                style={{ "borderTop": "none", "borderLeft": "none" }}
              ></th>
              <th
                className="px-6 border-3 border-ungugaje"
                align="center"
                style={{ "borderTop": "none" }}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/Standings/Mendali gold.png`}
                  alt="Tabel perolehan medali emas"
                  className="transform scale-150 md:scale-100 md:w-1/2 md:h-1/2"
                />
              </th>
              <th
                className="px-6 border-3 border-ungugaje"
                align="center"
                style={{ "borderTop": "none" }}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/Standings/Mendali silver.png`}
                  alt="Tabel perolehan medali emas"
                  className="transform scale-150 md:scale-100 md:w-1/2 md:h-1/2"
                />
              </th>
              <th
                className="px-6 border-3 border-ungugaje"
                align="center"
                style={{ "borderTop": "none" }}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/Standings/Mendali bronze.png`}
                  alt="Tabel perolehan medali emas"
                  className="transform scale-150 md:scale-100 md:w-1/2 md:h-1/2"
                />
              </th>
              <th
                className="px-6 border-3 border-ungugaje"
                style={{ "borderTop": "none" }}
              >
                total
              </th>
            </tr>
          </thead>
          {(() => {
            if (filter === '0') {
              return (
                <tbody>
                  {standingsData.map((faculty, index) => (
                    <tr key={faculty.name}>
                      <td
                        className="px-6 border-3 text-left border-ungugaje font-sansPro font-bold"
                        style={{ "borderLeft": "none", "borderBottom": "none" }}
                      >
                        {faculty.name}
                      </td>
                      <td
                        className="px-6 border-3 border-ungugaje"
                        style={{ "borderBottom": "none" }}
                      >
                        {faculty.gold}
                      </td>
                      <td
                        className="px-6 border-3 border-ungugaje"
                        style={{ "borderBottom": "none" }}
                      >
                        {faculty.silver}
                      </td>
                      <td
                        className="px-6 border-3 border-ungugaje"
                        style={{ "borderBottom": "none" }}
                      >
                        {faculty.bronze}
                      </td>
                      <td
                        className="px-6 border-3 border-ungugaje"
                        style={{ "borderBottom": "none" }}
                      >{`${faculty.silver + faculty.gold + faculty.bronze}`}</td>
                    </tr>
                  ))}
                </tbody>
              )
            } else {
              return (
                <tbody>
                  {standingsData.map((faculty, index) => (
                    <tr key={faculty.name}>
                      <td
                        className="px-6 border-3 text-left border-ungugaje font-sansPro font-bold"
                        style={{ "borderLeft": "none", "borderBottom": "none" }}
                      >
                        {faculty.name}
                      </td>
                      <td
                        className="px-6 border-3 border-ungugaje"
                        style={{ "borderBottom": "none" }}
                      >
                        {(filter === '1' && faculty.badminton !== undefined && faculty.badminton.gold !== undefined) ? faculty.badminton.gold
                        : (filter === '2' && faculty.sepak !== undefined && faculty.sepak.gold !== undefined) ? faculty.sepak.gold
                        : (filter === '3' && faculty.archery !== undefined && faculty.archery.gold !== undefined) ? faculty.archery.gold
                        : (filter === '4' && faculty.esport !== undefined && faculty.esport.gold !== undefined) ? faculty.esport.gold
                        : (filter === '5' && faculty.judo !== undefined && faculty.judo.gold !== undefined) ? faculty.judo.gold
                        : (filter === '6' && faculty.karate !== undefined && faculty.karate.gold !== undefined) ? faculty.karate.gold                  
                        : (filter === '7' && faculty.taekwondo !== undefined && faculty.taekwondo.gold !== undefined) ? faculty.taekwondo.gold
                        : (filter === '8' && faculty.silat!== undefined && faculty.silat.gold !== undefined) ? faculty.silat.gold
                        : (filter === '9' && faculty.catur !== undefined && faculty.catur.gold !== undefined) ? faculty.catur.gold
                        : (filter === '10' && faculty.panjat !== undefined && faculty.panjat.gold !== undefined) ? faculty.panjat.gold
                        : (filter === '11' && faculty.bridge !== undefined && faculty.bridge.gold !== undefined) ? faculty.bridge.gold
                        : (filter === '12' && faculty.puisi !== undefined && faculty.puisi.gold !== undefined) ? faculty.puisi.gold
                        : (filter === '13' && faculty.monolog !== undefined && faculty.monolog.gold !== undefined) ? faculty.monolog.gold
                        : (filter === '14' && faculty.band !== undefined && faculty.band.gold !== undefined) ? faculty.band.gold
                        : (filter === '15' && faculty.lukis !== undefined && faculty.lukis.gold !== undefined) ? faculty.lukis.gold
                        : (filter === '16' && faculty.makeup !== undefined && faculty.makeup.gold !== undefined) ? faculty.makeup.gold
                        : (filter === '17' && faculty.keroncong !== undefined && faculty.keroncong.gold !== undefined) ? faculty.keroncong.gold
                        : (filter === '18' && faculty.vocal !== undefined && faculty.vocal.gold !== undefined) ? faculty.vocal.gold
                        : (filter === '19' && faculty.naskah !== undefined && faculty.naskah.gold !== undefined) ? faculty.naskah.gold
                        : (filter === '20' && faculty.foto !== undefined && faculty.foto.gold !== undefined) ? faculty.foto.gold
                        : (filter === '21' && faculty.tari !== undefined && faculty.tari.gold !== undefined) ? faculty.tari.gold
                        : 0 }
                      </td>
                      <td
                        className="px-6 border-3 border-ungugaje"
                        style={{ "borderBottom": "none" }}
                      >
                        {(filter === '1' && faculty.badminton !== undefined && faculty.badminton.silver !== undefined) ? faculty.badminton.silver
                        : (filter === '2' && faculty.sepak !== undefined && faculty.sepak.silver !== undefined) ? faculty.sepak.silver
                        : (filter === '3' && faculty.archery !== undefined && faculty.archery.silver !== undefined) ? faculty.archery.silver
                        : (filter === '4' && faculty.esport !== undefined && faculty.esport.silver !== undefined) ? faculty.esport.silver
                        : (filter === '5' && faculty.judo !== undefined && faculty.judo.silver !== undefined) ? faculty.judo.silver
                        : (filter === '6' && faculty.karate !== undefined && faculty.karate.silver !== undefined) ? faculty.karate.silver                  
                        : (filter === '7' && faculty.taekwondo !== undefined && faculty.taekwondo.silver !== undefined) ? faculty.taekwondo.silver
                        : (filter === '8' && faculty.silat!== undefined && faculty.silat.silver !== undefined) ? faculty.silat.silver
                        : (filter === '9' && faculty.catur !== undefined && faculty.catur.silver !== undefined) ? faculty.catur.silver
                        : (filter === '10' && faculty.panjat !== undefined && faculty.panjat.silver !== undefined) ? faculty.panjat.silver
                        : (filter === '11' && faculty.bridge !== undefined && faculty.bridge.silver !== undefined) ? faculty.bridge.silver
                        : (filter === '12' && faculty.puisi !== undefined && faculty.puisi.silver !== undefined) ? faculty.puisi.silver
                        : (filter === '13' && faculty.monolog !== undefined && faculty.monolog.silver !== undefined) ? faculty.monolog.silver
                        : (filter === '14' && faculty.band !== undefined && faculty.band.silver !== undefined) ? faculty.band.silver
                        : (filter === '15' && faculty.lukis !== undefined && faculty.lukis.silver !== undefined) ? faculty.lukis.silver
                        : (filter === '16' && faculty.makeup !== undefined && faculty.makeup.silver !== undefined) ? faculty.makeup.silver
                        : (filter === '17' && faculty.keroncong !== undefined && faculty.keroncong.silver !== undefined) ? faculty.keroncong.silver
                        : (filter === '18' && faculty.vocal !== undefined && faculty.vocal.silver !== undefined) ? faculty.vocal.silver
                        : (filter === '19' && faculty.naskah !== undefined && faculty.naskah.silver !== undefined) ? faculty.naskah.silver
                        : (filter === '20' && faculty.foto !== undefined && faculty.foto.silver !== undefined) ? faculty.foto.silver
                        : (filter === '21' && faculty.tari !== undefined && faculty.tari.silver !== undefined) ? faculty.tari.silver
                        : 0 }
                      </td>
                      <td
                        className="px-6 border-3 border-ungugaje"
                        style={{ "borderBottom": "none" }}
                      >
                        {(filter === '1' && faculty.badminton !== undefined && faculty.badminton.bronze !== undefined) ? faculty.badminton.bronze
                        : (filter === '2' && faculty.sepak !== undefined && faculty.sepak.bronze !== undefined) ? faculty.sepak.bronze
                        : (filter === '3' && faculty.archery !== undefined && faculty.archery.bronze !== undefined) ? faculty.archery.bronze
                        : (filter === '4' && faculty.esport !== undefined && faculty.esport.bronze !== undefined) ? faculty.esport.bronze
                        : (filter === '5' && faculty.judo !== undefined && faculty.judo.bronze !== undefined) ? faculty.judo.bronze
                        : (filter === '6' && faculty.karate !== undefined && faculty.karate.bronze !== undefined) ? faculty.karate.bronze                  
                        : (filter === '7' && faculty.taekwondo !== undefined && faculty.taekwondo.bronze !== undefined) ? faculty.taekwondo.bronze
                        : (filter === '8' && faculty.silat!== undefined && faculty.silat.bronze !== undefined) ? faculty.silat.bronze
                        : (filter === '9' && faculty.catur !== undefined && faculty.catur.bronze !== undefined) ? faculty.catur.bronze
                        : (filter === '10' && faculty.panjat !== undefined && faculty.panjat.bronze !== undefined) ? faculty.panjat.bronze
                        : (filter === '11' && faculty.bridge !== undefined && faculty.bridge.bronze !== undefined) ? faculty.bridge.bronze
                        : (filter === '12' && faculty.puisi !== undefined && faculty.puisi.bronze !== undefined) ? faculty.puisi.bronze
                        : (filter === '13' && faculty.monolog !== undefined && faculty.monolog.bronze !== undefined) ? faculty.monolog.bronze
                        : (filter === '14' && faculty.band !== undefined && faculty.band.bronze !== undefined) ? faculty.band.bronze
                        : (filter === '15' && faculty.lukis !== undefined && faculty.lukis.bronze !== undefined) ? faculty.lukis.bronze
                        : (filter === '16' && faculty.makeup !== undefined && faculty.makeup.bronze !== undefined) ? faculty.makeup.bronze
                        : (filter === '17' && faculty.keroncong !== undefined && faculty.keroncong.bronze !== undefined) ? faculty.keroncong.bronze
                        : (filter === '18' && faculty.vocal !== undefined && faculty.vocal.bronze !== undefined) ? faculty.vocal.bronze
                        : (filter === '19' && faculty.naskah !== undefined && faculty.naskah.bronze !== undefined) ? faculty.naskah.bronze
                        : (filter === '20' && faculty.foto !== undefined && faculty.foto.bronze !== undefined) ? faculty.foto.bronze
                        : (filter === '21' && faculty.tari !== undefined && faculty.tari.bronze !== undefined) ? faculty.tari.bronze
                        : 0 }
                      </td>
                      <td
                        className="px-6 border-3 border-ungugaje"
                        style={{ "borderBottom": "none" }}
                      >
                        {(filter === '1' && faculty.badminton !== undefined && faculty.badminton.total !== undefined) ? faculty.badminton.total
                        : (filter === '2' && faculty.sepak !== undefined && faculty.sepak.total !== undefined) ? faculty.sepak.total
                        : (filter === '3' && faculty.archery !== undefined && faculty.archery.total !== undefined) ? faculty.archery.total
                        : (filter === '4' && faculty.esport !== undefined && faculty.esport.total !== undefined) ? faculty.esport.total
                        : (filter === '5' && faculty.judo !== undefined && faculty.judo.total !== undefined) ? faculty.judo.total
                        : (filter === '6' && faculty.karate !== undefined && faculty.karate.total !== undefined) ? faculty.karate.total                  
                        : (filter === '7' && faculty.taekwondo !== undefined && faculty.taekwondo.total !== undefined) ? faculty.taekwondo.total
                        : (filter === '8' && faculty.silat!== undefined && faculty.silat.total !== undefined) ? faculty.silat.total
                        : (filter === '9' && faculty.catur !== undefined && faculty.catur.total !== undefined) ? faculty.catur.total
                        : (filter === '10' && faculty.panjat !== undefined && faculty.panjat.total !== undefined) ? faculty.panjat.total
                        : (filter === '11' && faculty.bridge !== undefined && faculty.bridge.total !== undefined) ? faculty.bridge.total
                        : (filter === '12' && faculty.puisi !== undefined && faculty.puisi.total !== undefined) ? faculty.puisi.total
                        : (filter === '13' && faculty.monolog !== undefined && faculty.monolog.total !== undefined) ? faculty.monolog.total
                        : (filter === '14' && faculty.band !== undefined && faculty.band.total !== undefined) ? faculty.band.total
                        : (filter === '15' && faculty.lukis !== undefined && faculty.lukis.total !== undefined) ? faculty.lukis.total
                        : (filter === '16' && faculty.makeup !== undefined && faculty.makeup.total !== undefined) ? faculty.makeup.total
                        : (filter === '17' && faculty.keroncong !== undefined && faculty.keroncong.total !== undefined) ? faculty.keroncong.total
                        : (filter === '18' && faculty.vocal !== undefined && faculty.vocal.total !== undefined) ? faculty.vocal.total
                        : (filter === '19' && faculty.naskah !== undefined && faculty.naskah.total !== undefined) ? faculty.naskah.total
                        : (filter === '20' && faculty.foto !== undefined && faculty.foto.total !== undefined) ? faculty.foto.total
                        : (filter === '21' && faculty.tari !== undefined && faculty.tari.total !== undefined) ? faculty.tari.total
                        : 0 }
                      </td>
                    </tr>
                  ))}
                </tbody>
              )
            }
          })()}
        </table>
      </div>
      {/* <div>
        {standingsRef}
      </div> */}
      <button
        className="cursor-pointer transform scale-50 md:scale-100 transition duration-300 md:hover:scale-105 ml-4 md:ml-20"
        onClick={goBack}
      >
        <img src={`${process.env.PUBLIC_URL}/images/News/Back.svg`} alt="" />
      </button>
      <div className="h-4 md:h-20"></div>
    </div>
  );
};
export { Standings };
