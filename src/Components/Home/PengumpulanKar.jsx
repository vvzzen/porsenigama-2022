import React from 'react'

const PengumpulanKar = () => {
    return (
        <div>
            <div className="block z-40 text-5xl md:text-8xl text-merah font-nuku justify-center w-full">
                <h2
                    className="relative z-40 text-center cursor-default"
                >
                PENGUMPULAN KARYA
                </h2>
                <div className="h-10 w-full"></div>
            </div>
            <div className="mx-auto flex flex-col lg:flex-row justify-center items-center font-nuku">
                <button
                className="z-10 w-56 h-24 text-3xl sm:w-72 sm:h-32 my-3 sm:my-8 mx-10 sm:text-forty uppercase transform transition duration-300 hover:scale-110"
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/button.svg)`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                }}
                onClick={() =>
                    window.open(
                    "https://drive.google.com/drive/folders/1_ljN1RuxX7jDI8GxS_wkYJPlTQWpJHJu?usp=sharing"
                    )
                }
                >
                CABANG <br></br> OLAHRAGA
                <div className="h-2"></div>
                </button>
                <button
                className="z-10 w-56 h-24 text-3xl sm:w-72 sm:h-32 my-3 sm:my-8 mx-10 sm:text-forty uppercase transform transition duration-300 hover:scale-110"
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/button.svg)`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                }}
                onClick={() =>
                    window.open(
                    "https://drive.google.com/drive/folders/1KnE-BgbKC6WHKF73ktBtGmeUTm46dXB1?usp=sharing"
                    )
                }
                >
                CABANG <br></br> SENI
                <div className="h-1"></div>
                </button>
            </div>
            <div className = 'h-12'></div>
        </div>
    )
}

export {PengumpulanKar}
