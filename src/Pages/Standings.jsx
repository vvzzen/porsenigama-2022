import { db } from "../Components/Standings";
import { useState, useEffect } from "react";

const Standings = () => {
  const [standingsData, setStandingsData] = useState([]);

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
  return (
    <div className="min-h-screen">
      <h1 className="font-bold pt-24 text-center text-4xl">Klasemen</h1>
      <div className="w-screen flex justify-center my-12 text-center">
        <table>
          <thead>
            <tr className="text-medium">
              <th className="px-6 border-2">no</th>
              <th className="px-6 border-2">Fakultas/Sekolah</th>
              <th className="px-6 border-2">Emas</th>
              <th className="px-6 border-2">Perak</th>
              <th className="px-6 border-2">Perunggu</th>
              <th className="px-6 border-2">total</th>
            </tr>
          </thead>
          <tbody>
            {standingsData.map((faculty, index) => (
              <tr key={faculty.name}>
                <td className="px-6 border">{index + 1}</td>
                <td className="px-6 border text-left">{faculty.name}</td>
                <td className="px-6 border">{faculty.gold}</td>
                <td className="px-6 border">{faculty.silver}</td>
                <td className="px-6 border">{faculty.bronze}</td>
                <td className="px-6 border">{faculty.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export { Standings };
