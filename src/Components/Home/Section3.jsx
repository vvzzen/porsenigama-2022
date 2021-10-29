// const Countdown = () => {
//   const [days, setDays] = useState("--");
//   const [hours, setHours] = useState("--");
//   const [minutes, setMinutes] = useState("--");
//   const [seconds, setSeconds] = useState("--");

//   const dueTime = Date.parse("30 Oct 2021 18:29:59 GMT+7");

//   useEffect(() => {
//     const countdown = setInterval(() => {
//       const now = Date.now();
//       const delta = dueTime - now;
//       if (delta <= 0) {
//         clearInterval(countdown);
//         setDays("00");
//         setHours("00");
//         setMinutes("00");
//         setSeconds("00");
//         return;
//       }

//       let d = Math.floor(delta / 8.64e7);
//       if (d < 10) {
//         d = `0${d}`;
//       }
//       setDays(d);

//       let h = Math.floor((delta % 8.64e7) / 3.6e6);
//       if (h < 10) {
//         h = `0${h}`;
//       }
//       setHours(h);

//       let m = Math.floor((delta % 3.6e6) / 6e4);
//       if (m < 10) {
//         m = `0${m}`;
//       }
//       setMinutes(m);

//       let s = Math.floor((delta % 6e4) / 1e3);
//       if (s < 10) {
//         s = `0${s}`;
//       }
//       setSeconds(s);

//       console.log(d, h, m, s);
//     }, 1000);

//     return () => {
//       clearInterval(countdown);
//     };
//   }, [dueTime]);
//   return (
//     <div className="flex space-x-5 w-3/5 py-48">
//       <div className="z-50 flex items-center justify-center relative w-60">
//         <img
//           className="absolute"
//           src={`${process.env.PUBLIC_URL}/images/Sec2/bg_hitungmundur.svg`}
//           alt=""
//         />
//         <span className="relative font-nuku text-krem 2xl:text-onefourfour xl:text-oneten lg:text-sixtyeit md:text-forty">
//           {days}
//         </span>
//       </div>
//       <div className="z-50 flex items-center justify-center relative w-60">
//         <img
//           className="absolute"
//           src={`${process.env.PUBLIC_URL}/images/Sec2/bg_hitungmundur.svg`}
//           alt=""
//         />
//         <span className="relative font-nuku text-krem 2xl:text-onefourfour xl:text-oneten lg:text-sixtyeit md:text-forty">
//           {hours}
//         </span>
//       </div>
//       <div className="z-50 flex items-center justify-center relative w-60">
//         <img
//           className="absolute"
//           src={`${process.env.PUBLIC_URL}/images/Sec2/bg_hitungmundur.svg`}
//           alt=""
//         />
//         <span className="relative font-nuku text-krem 2xl:text-onefourfour xl:text-oneten lg:text-sixtyeit md:text-forty">
//           {minutes}
//         </span>
//       </div>
//       <div className="z-50 flex items-center justify-center relative w-60">
//         <img
//           className="absolute"
//           src={`${process.env.PUBLIC_URL}/images/Sec2/bg_hitungmundur.svg`}
//           alt=""
//         />
//         <span className="relative font-nuku text-krem 2xl:text-onefourfour xl:text-oneten lg:text-sixtyeit md:text-forty">
//           {seconds}
//         </span>
//       </div>
//     </div>
//   );
// };

const Section3 = () => {
  return (
    <div className="relative">
      <img
        className="absolute right-0 w-2/5"
        style={{ top: "3.5%" }}
        src={`${process.env.PUBLIC_URL}/images/Sec3/pohon_merah_kanan.png`}
        alt=""
      />
      <img
        className="z-10 relative w-full -mt-1"
        src={`${process.env.PUBLIC_URL}/images/Sec3/kotak_catur.svg`}
        alt=""
      />
      <div className="z-10 relative flex md:flex-row flex-col items-center w-5/6 mx-auto mt-8">
        <div className="w-full md:w-2/3 xl:w-1/2">
          <p className="font-nuku text-left 2xl:text-onefourfour xl:text-oneten lg:text-7xl md:text-5xl text-4xl whitespace-nowrap text-biru capitalize">
            Our Mascot
          </p>
          <div className="flex space-x-3 py-3">
            <img
              className="xl:w-porciTextXl md:w-porciTextMd w-porciText"
              src={`${process.env.PUBLIC_URL}/images/Sec3/porci_teks.svg`}
              alt=""
            />
            <img
              className="xl:w-porciPlayXl md:w-porciPlayMd w-porciPlay"
              src={`${process.env.PUBLIC_URL}/images/Sec3/play.svg`}
              alt=""
            />
          </div>
          <p className="font-sansPro 2xl:text-twoeight xl:text-2xl lg:text-lg md:text-md text-lg text-left text-biru">
            Porchi, Sang Maskot Porsenigama digambarkan oleh sosok burung elang
            yang memiliki ciri fisik gagah dan kuat Porchi juga memiliki sifat
            yang sangat gigih, berani, tidak kenal lelah, dan selalu berpegang
            teguh pada prinsip.
          </p>
        </div>
        <img
          className="z-10 relative md:w-1/3 sm:w-1/2 w-4/5 lg:ml-28"
          src={`${process.env.PUBLIC_URL}/images/Sec3/porci.png`}
          alt=""
        />
      </div>
      <img
        className="relative"
        src={`${process.env.PUBLIC_URL}/images/Sec3/bg_end.svg`}
        alt=""
      />
    </div>
  );
};

export { Section3 };
