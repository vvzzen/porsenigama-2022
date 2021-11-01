import { db } from "../data/db";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Standings = () => {
  const [standingsData, setStandingsData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const medalsData = db.collection("standings").onSnapshot((snap) => {
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

  const goBack = () => {
    history.push(`${process.env.PUBLIC_URL}/`);
  };

  return (
    <div className="min-h-screen font-nuku tracking-wide bg-krem relative overflow-hidden">
      <img
        src={`${process.env.PUBLIC_URL}/images/Standings/bg.svg`}
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
      <div className="w-full flex justify-center my-12 text-center relative">
        <table className="text-xs md:text-fivevh mx-12">
          <thead>
            <tr>
              <th
                className="px-6 border-3 border-ungugaje"
                style={{ "border-top": "none", "border-left": "none" }}
              ></th>
              <th
                className="px-6 border-3 border-ungugaje"
                align="center"
                style={{ "border-top": "none" }}
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
                style={{ "border-top": "none" }}
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
                style={{ "border-top": "none" }}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/Standings/Mendali bronze.png`}
                  alt="Tabel perolehan medali emas"
                  className="transform scale-150 md:scale-100 md:w-1/2 md:h-1/2"
                />
              </th>
              <th
                className="px-6 border-3 border-ungugaje"
                style={{ "border-top": "none" }}
              >
                total
              </th>
            </tr>
          </thead>
          <tbody>
            {standingsData.map((faculty, index) => (
              <tr key={faculty.name}>
                <td
                  className="px-6 border-3 text-left border-ungugaje"
                  style={{ "border-left": "none", "border-bottom": "none" }}
                >
                  {faculty.name}
                </td>
                <td
                  className="px-6 border-3 border-ungugaje"
                  style={{ "border-bottom": "none" }}
                >
                  {faculty.gold}
                </td>
                <td
                  className="px-6 border-3 border-ungugaje"
                  style={{ "border-bottom": "none" }}
                >
                  {faculty.silver}
                </td>
                <td
                  className="px-6 border-3 border-ungugaje"
                  style={{ "border-bottom": "none" }}
                >
                  {faculty.bronze}
                </td>
                <td
                  className="px-6 border-3 border-ungugaje"
                  style={{ "border-bottom": "none" }}
                >{`${faculty.silver + faculty.gold + faculty.bronze}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
