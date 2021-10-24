import { useState, useEffect, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import ReactPlayer from "react-player";

const Countdown = () => {
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
  );
};

const Book = () => {
  const [page, setPage] = useState(0);
  const lastPage = 10;
  const book = useRef();

  return (
    <>
      <div className="flex items-center justify-center h-full pt-72 pb-32">
        <button
          className="w-28 h-28 ml-10"
          style={{
            backgroundImage:
              page === 0
                ? `url(${process.env.PUBLIC_URL}/images/Sec2/arah_kiri_mati.svg)`
                : `url(${process.env.PUBLIC_URL}/images/Sec2/arah_kiri_hidup.svg)`,
            backgroundRepeat: `no-repeat`,
          }}
          onClick={() => book.current.pageFlip().flipPrev()}
        />
        <div className="z-50 flex items-center justify-center w-2/3">
          <img
            className="absolute"
            src={`${process.env.PUBLIC_URL}/images/Sec2/buku_tengah.svg`}
            alt=""
          ></img>
          <HTMLFlipBook
            className="overflow-hidden"
            width={572}
            height={769}
            ref={book}
            onFlip={() =>
              setPage(book.current.pageFlip().getCurrentPageIndex())
            }
          >
            {[...Array(2 * 6).keys()].map((x) => {
              if (x % 2) {
                return (
                  <div key={x} className="flex items-center justify-center">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/Sec2/buku_kanan.svg`}
                      alt=""
                    ></img>
                    <ReactPlayer
                      className="absolute -ml-6"
                      url={`${process.env.PUBLIC_URL}/videos/Sec2/inporse${
                        ((x % 2) + x) / 2
                      }.mp4`}
                      controls={true}
                      width={460}
                      height={575}
                    />
                  </div>
                );
              }
              return (
                <div key={x} className="flex items-center justify-center">
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
                </div>
              );
            })}
          </HTMLFlipBook>
        </div>
        <button
          className="w-28 h-28 mr-10"
          style={{
            backgroundImage:
              page === lastPage
                ? `url(${process.env.PUBLIC_URL}/images/Sec2/arah_kanan_mati.svg)`
                : `url(${process.env.PUBLIC_URL}/images/Sec2/arah_kanan_hidup.svg)`,
            backgroundRepeat: `no-repeat`,
          }}
          onClick={() => book.current.pageFlip().flipNext()}
        />
      </div>
    </>
  );
};

const Section2 = () => {
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
          <Countdown />
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
        <Book />
      </div>
      <img src={`${process.env.PUBLIC_URL}/images/Sec2/bg_end.svg`} alt="" />
    </>
  );
};

export { Section2 };
