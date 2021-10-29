import { useState, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import ReactPlayer from "react-player";

const Book = () => {
  const [page, setPage] = useState(0);
  const book = useRef();

  const width = window.innerWidth;
  const scale = width > 1545 ? 1 : width / 1545;
  const widthBook = width > 1545 ? "1148px" : "";

  const lastPage = scale === 1 ? 10 : 6;

  return (
    <div className="flex items-center justify-center h-full py-40 px-5">
      <button
        className="mr-16 w-28 transform transition duration-300 md:hover:scale-110"
        onClick={() => book.current.pageFlip().flipPrev()}
      >
        <img
          src={
            page === 0
              ? `${process.env.PUBLIC_URL}/images/Sec4/arah_kiri_mati.svg`
              : `${process.env.PUBLIC_URL}/images/Sec4/arah_kiri_hidup.svg`
          }
          alt=""
        />
      </button>
      <div
        className="z-50 flex items-center justify-center"
        style={{ width: widthBook }}
      >
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
          {[...Array(2 * 6).keys()]
            .filter((x) => {
              if (scale !== 1 && x !== 0 && x % 2 === 0) {
                return false;
              }
              return true;
            })
            .map((x) => {
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
        className="ml-16 w-28 transform transition duration-300 md:hover:scale-110"
        onClick={() => book.current.pageFlip().flipNext()}
      >
        <img
          src={
            page === lastPage
              ? `${process.env.PUBLIC_URL}/images/Sec4/arah_kanan_mati.svg`
              : `${process.env.PUBLIC_URL}/images/Sec4/arah_kanan_hidup.svg`
          }
          alt=""
        />
      </button>
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
          className="absolute top-40 right-24"
          src={`${process.env.PUBLIC_URL}/images/Sec4/bulan.svg`}
          alt=""
        />
        <Book />
      </div>
    </div>
  );
};

export { Section4 };
