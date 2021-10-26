import { useState, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import ReactPlayer from "react-player";

const Book = () => {
  const [page, setPage] = useState(0);
  const lastPage = 10;
  const book = useRef();

  return (
    <div className="flex items-center justify-center h-full pt-72 pb-32">
      <button
        className="w-28 h-28 ml-10"
        style={{
          backgroundImage:
            page === 0
              ? `url(${process.env.PUBLIC_URL}/images/Sec4/arah_kiri_mati.svg)`
              : `url(${process.env.PUBLIC_URL}/images/Sec4/arah_kiri_hidup.svg)`,
          backgroundRepeat: `no-repeat`,
        }}
        onClick={() => book.current.pageFlip().flipPrev()}
      />
      <div className="z-50 flex items-center justify-center w-2/3">
        <img
          className="absolute"
          src={`${process.env.PUBLIC_URL}/images/Sec4/buku_tengah.svg`}
          alt=""
        ></img>
        <HTMLFlipBook
          className="overflow-hidden"
          width={572}
          height={769}
          ref={book}
          onFlip={() => setPage(book.current.pageFlip().getCurrentPageIndex())}
        >
          {[...Array(2 * 6).keys()].map((x) => {
            if (x % 2) {
              return (
                <div key={x} className="flex items-center justify-center">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/Sec4/buku_kanan.svg`}
                    alt=""
                  ></img>
                  <ReactPlayer
                    className="absolute -ml-6"
                    url={`${process.env.PUBLIC_URL}/videos/Sec4/inporse${
                      ((x % 2) + x) / 2
                    }.m4v`}
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
                    src={`${process.env.PUBLIC_URL}/images/Sec4/buku_kiri.svg`}
                    alt=""
                  ></img>
                  <img
                    className="absolute mr-10"
                    src={`${process.env.PUBLIC_URL}/images/Sec4/inporse_judul_frame.png`}
                    alt=""
                  />
                  <img
                    className="z-50 absolute mr-10"
                    src={`${process.env.PUBLIC_URL}/images/Sec4/inporse_judul_teks.png`}
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
              ? `url(${process.env.PUBLIC_URL}/images/Sec4/arah_kanan_mati.svg)`
              : `url(${process.env.PUBLIC_URL}/images/Sec4/arah_kanan_hidup.svg)`,
          backgroundRepeat: `no-repeat`,
        }}
        onClick={() => book.current.pageFlip().flipNext()}
      />
    </div>
  );
};

const Section4 = () => {
  return (
    <div className="relative bg-biru">
      <img
        className="absolute w-2/5"
        style={{ top: "-40%" }}
        src={`${process.env.PUBLIC_URL}/images/Sec4/pohon_merah_kiri.png`}
        alt=""
      />
      <div className="relative w-full h-full -ml-1 bg-sec4 bg-no-repeat bg-cover">
        <img
          className="absolute top-72 right-24"
          src={`${process.env.PUBLIC_URL}/images/Sec4/bulan.svg`}
          alt=""
        />
        <Book />
      </div>
    </div>
  );
};

export { Section4 };
