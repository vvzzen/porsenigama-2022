import React from 'react'

const PengumpulanKar = () => {
    return (
        <div className='md:h-vh'>
            <img src={`${process.env.PUBLIC_URL}/images/pengumpulan karya/burung pengumpulan.png`} alt="hiasan bagan pengumpulan" className = 'absolute z-0 mt-4 md:mt-0' style = {{
                'MozUserSelect': 'none',
                'WebkitUserSelect': 'none',
                'userSelect':' none',
                'pointerEvents': 'none'
            }}/>
            <div className='md:h-1/5'></div>
            <div className="block z-40 text-5xl md:text-8xl text-kuning font-nuku justify-center w-full relative">
                <h2
                    className="relative z-40 text-center cursor-default hidden md:flex md:justify-center"
                    style = {{
                        "textShadow": [
                            "-2px -2px 0 #F16224",
                            "-3px -3px 0 #F16224",
                            "-3px -2px 0 #F16224",
                            "-2px -3px 0 #F16224",
                            "-3px -1px 0 #F16224",
                            "-3px -0px 0 #F16224",
                            "3px 1px 0 #F16224",
                            "3px 2px 0 #F16224",
                            "3px 2px 0 #F16224",
                            "-1px 5px 0 #F16224",
                            "0px 5px 0 #F16224",
                            "1px 5px 0 #F16224",
                            "3px 5px 0 #F16224",
                            "-2px 3px 0 #F16224",
                            "-2px 2px 0 #F16224",
                            "-2px 1px 0 #F16224",
                            "-2px 4px 0 #F16224",
                            "3px -3px 0 #F16224",
                            "0px 4px 3px rgba(0,0,0,0.8)",
                            "4px 18px 3px rgba(0,0,0,0.6)",
                            "0px 8px 13px rgba(0,0,0,0.6)",
                            "8px 18px 3px rgba(0,0,0,0.4)",
                            "0px 18px 23px rgba(0,0,0,0.4)", 
                            "18px 18px 3px rgba(0,0,0,0.2)",                   
                        ],
                    }}
                >
                PENGUMPULAN KARYA
                </h2>
                <h2
                    className="relative z-40 text-center cursor-default md:hidden"
                    style = {{
                        "textShadow": [
                            "-2px -2px 0 #F16224",
                            "-3px -3px 0 #F16224",
                            "-3px -2px 0 #F16224",
                            "-2px -3px 0 #F16224",
                            "-3px -1px 0 #F16224",
                            "-3px -0px 0 #F16224",
                            "3px 1px 0 #F16224",
                            "3px 2px 0 #F16224",
                            "3px 2px 0 #F16224",
                            "-1px 5px 0 #F16224",
                            "0px 5px 0 #F16224",
                            "1px 5px 0 #F16224",
                            "3px 5px 0 #F16224",
                            "-2px 3px 0 #F16224",
                            "-2px 2px 0 #F16224",
                            "-2px 1px 0 #F16224",
                            "-2px 4px 0 #F16224",
                            "3px -3px 0 #F16224",
                            "0px 4px 3px rgba(0,0,0,0.8)",
                            "0px 8px 13px rgba(0,0,0,0.6)",
                            "0px 18px 23px rgba(0,0,0,0.4)",                   
                        ],
                    }}
                >
                PENGUMPULAN KARYA
                </h2>
                <div className="md:h-10 w-full"></div>
            </div>
            <div className='md:h-15vh'></div>
            <div className="mx-15x flex flex-row justify-between items-stretch font-nuku mt-4 md:mt-0">
                <button
                className="z-10 w-20 h-20 text-3xl sm:w-36 sm:h-36 transform transition duration-300 scale-110 hover:scale-125"
                style={{
                    backgroundImage: `url('${process.env.PUBLIC_URL}/images/pengumpulan karya/seni.png')`,
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
                <div className="h-2"></div>
                </button>
                <button
                className="z-10 w-20 h-20 text-3xl sm:w-36 sm:h-36 transform transition duration-300 scale-110 hover:scale-125"
                style={{
                    backgroundImage: `url('${process.env.PUBLIC_URL}/images/pengumpulan karya/olah.png')`,
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
                <div className="md:h-1"></div>
                </button>
            </div>
            <div className = 'h-20 md:h-12'></div>
        </div>
    )
}

export {PengumpulanKar}
