import { useState, useEffect } from "react";

const Section2 = () => {
  const [days, setDays] = useState("--");
  const [hours, setHours] = useState("--");
  const [minutes, setMinutes] = useState("--");
  const [seconds, setSeconds] = useState("--");

  const dueTime = Date.parse("30 Oct 2021 18:29:59 GMT+7");

  useEffect(() => {
    const countdown = setInterval(() => {
      const now = Date.now();
      const delta = dueTime - now;
      if (delta <= 0) {
        clearInterval(countdown);
        setDays("00");
        setHours("00");
        setMinutes("00");
        setSeconds("00");
        return;
      }

      let d = Math.floor(delta / 8.64e7);
      if (d < 10) {
        d = `0${d}`;
      }
      setDays(d);

      let h = Math.floor((delta % 8.64e7) / 3.6e6);
      if (h < 0) {
        h = `0${h}`;
      }
      setHours(h);

      let m = Math.floor((delta % 3.6e6) / 6e4);
      if (m < 0) {
        m = `0${m}`;
      }
      setMinutes(m);

      let s = Math.floor((delta % 6e4) / 1e3);
      if (s < 0) {
        s = `0${s}`;
      }
      setSeconds(s);

      console.log(d, h, m, s);
    }, 1000);

    return () => {
      clearInterval(countdown);
    };
  }, [dueTime]);

  return (
    <>
      <div className="relative">
        <img
          className="absolute -top-20 right-0"
          src={`${process.env.PUBLIC_URL}/images/Sec2/pohon_merah_kanan.png`}
          alt=""
        />
        <img
          className="relative -mt-1"
          src="images/Sec2/kotak_catur.svg"
          alt=""
        />
        <div className="relative pt-20 pb-4 px-32">
          <img
            className="z-10 absolute top-72 left-0"
            src={`${process.env.PUBLIC_URL}/images/Sec2/pohon_merah_kiri.png`}
            alt=""
          />
          <p className="px-12 ml-4 pb-3.5 rounded-full bg-merah w-max">
            <p className="font-sansPro text-krem text-sixtyfour">coming soon</p>
          </p>
          <div className="flex space-x-1 py-48">
            <div className="z-50 flex items-center justify-center relative w-60">
              <img
                className="absolute"
                src={`${process.env.PUBLIC_URL}/images/Sec2/bg_hitungmundur.svg`}
                alt=""
              />
              <span className="relative font-nuku text-onefourfour text-krem">
                {days}
              </span>
            </div>
            <div className="z-50 flex items-center justify-center relative w-60">
              <img
                className="absolute"
                src={`${process.env.PUBLIC_URL}/images/Sec2/bg_hitungmundur.svg`}
                alt=""
              />
              <span className="relative font-nuku text-onefourfour text-krem">
                {hours}
              </span>
            </div>
            <div className="z-50 flex items-center justify-center relative w-60">
              <img
                className="absolute"
                src={`${process.env.PUBLIC_URL}/images/Sec2/bg_hitungmundur.svg`}
                alt=""
              />
              <span className="relative font-nuku text-onefourfour text-krem">
                {minutes}
              </span>
            </div>
            <div className="z-50 flex items-center justify-center relative w-60">
              <img
                className="absolute"
                src={`${process.env.PUBLIC_URL}/images/Sec2/bg_hitungmundur.svg`}
                alt=""
              />
              <span className="relative font-nuku text-onefourfour text-krem">
                {seconds}
              </span>
            </div>
          </div>
          <div className="absolute right-0 top-96 right-60">
            <p className="table-caption font-nuku text-sixty text-left uppercase ">
              Kasih maskot disini???
            </p>
          </div>
        </div>
      </div>
      <div className="relative bg-sec2 bg-no-repeat h-full -ml-1">
        <img
          className="absolute top-72 right-24"
          src={`${process.env.PUBLIC_URL}/images/Sec2/bulan.svg`}
          alt=""
        />
        <div className="flex items-center justify-center h-full py-72">
          <img className="mr-20"
            src={`${process.env.PUBLIC_URL}/images/Sec2/arah_kiri_mati.svg`}
            alt=""
          />
          <div className="z-50 flex -space-x-28">
            <div className="flex items-center justify-center">
              <img
                src={`${process.env.PUBLIC_URL}/images/Sec2/buku_kiri.svg`}
                alt=""
              ></img>
              <img
                className="absolute mr-10"
                src={`${process.env.PUBLIC_URL}/images/Sec2/porsenipedia_judul_frame.png`}
                alt=""
              />
              <img
                className="z-50 absolute mr-10"
                src={`${process.env.PUBLIC_URL}/images/Sec2/porsenipedia_judul_teks.png`}
                alt=""
              />
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/images/Sec2/buku_tengah.svg`}
              alt=""
            ></img>
            <div className="flex items-center justify-center">
              <img
                src={`${process.env.PUBLIC_URL}/images/Sec2/buku_kanan.svg`}
                alt=""
              ></img>
              <img
                className="absolute -ml-5"
                src={`${process.env.PUBLIC_URL}/images/Sec2/porsenipedia_konten.svg`}
                alt=""
              />
              <p className="absolute text-2xl w-60 font-bold text-left">
                disini artikel atau apalah kontennya porsenipedia
              </p>
            </div>
          </div>
          <img className="ml-20"
            src={`${process.env.PUBLIC_URL}/images/Sec2/arah_kanan_hidup.svg`}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export { Section2 };
