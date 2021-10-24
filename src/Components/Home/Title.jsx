import React from 'react'

const Title = () => {
    return (
        <div className = 'z-30 h-full relative md:flex items-center md:items-stretch md:justify-start md:content-end' >
            <div className = 'h-2'></div>
            <div className = 'md:w-45c cursor-default'>
                <div className = 'flex items-stretch justify-center md:ml-28 md:justify-start content-end text-6xl md:text-oneten md:mt-32 text-biru font-nuku' style = {{ "-webkit-text-stroke": "1.5px #F8BF0D" }}> 
                    <div style = {{
                            "text-shadow": [
                            "6px 6px 0 #F8BF0D",
                            "6px 2px 0 #F8BF0D",
                            "3px 8px 0 #F8BF0D",
                            "2px 8px 0 #F8BF0D",
                        ],
                    }}>PO</div><div style = {{
                            "text-shadow": [
                            "6px 6px 0 #F8BF0D",
                            "6px 2px 0 #F8BF0D",
                            "6px 3px 0 #F8BF0D",
                            "6px 4px 0 #F8BF0D",
                            "6px 5px 0 #F8BF0D",
                            "0px 6px 0 #F8BF0D",
                            "-1px 6px 0 #F8BF0D",
                        ],
                    }}>R</div><div style = {{
                            "text-shadow": [
                            "6px 6px 0 #F8BF0D",
                            "6px 2px 0 #F8BF0D",
                            "4px 6px 0 #F8BF0D",
                            "2px 6px 0 #F8BF0D",
                        ],
                    }}>S</div><div style = {{
                            "text-shadow": [
                            "6px 6px 0 #F8BF0D",
                            "6px 2px 0 #F8BF0D",
                            "4px 6px 0 #F8BF0D",
                            "2px 6px 0 #F8BF0D",
                        ],
                    }}>E</div><div style = {{
                            "text-shadow": [
                            "6px 6px 0 #F8BF0D",
                            "6px 2px 0 #F8BF0D",
                            "6px 3px 0 #F8BF0D",
                            "6px 4px 0 #F8BF0D",
                            "6px 5px 0 #F8BF0D",
                            "-1px 6px 0 #F8BF0D",
                            "0px 6px 0 #F8BF0D",
                            "1px 6px 0 #F8BF0D",
                            "2px 6px 0 #F8BF0D",
                            "3px 6px 0 #F8BF0D",
                            "4px 6px 0 #F8BF0D",
                            "5px 6px 0 #F8BF0D",
                        ],
                    }}>NI</div><div style = {{
                        "text-shadow": [
                            "6px 6px 0 #F8BF0D",
                            "6px 2px 0 #F8BF0D",
                            "4px 6px 0 #F8BF0D",
                            "2px 6px 0 #F8BF0D",
                        ],
                    }}>G</div><div style = {{
                        "text-shadow": [
                            "6px 6px 0 #F8BF0D",
                            "6px 2px 0 #F8BF0D",
                            "6px 3px 0 #F8BF0D",
                            "6px 4px 0 #F8BF0D",
                            "6px 5px 0 #F8BF0D",
                            "-1px 6px 0 #F8BF0D",
                            "0px 6px 0 #F8BF0D",
                            "1px 6px 0 #F8BF0D",
                            "2px 6px 0 #F8BF0D",
                            "3px 6px 0 #F8BF0D",
                            "4px 6px 0 #F8BF0D",
                            "5px 6px 0 #F8BF0D",
                        ],
                    }}>AMA</div>
                </div>
                <p className = 'font-sansPro text-left md:ml-28 md:mr-8 md:mt-8 hidden md:flex'>Pekan Olahraga dan Seni Universitas Gadjah Mada (Porsenigama) merupakan suatu ajang kejuaraan olahraga dan seni yang dilaksanakan 
                    atas dasar Rancangan Kegiatan Awal Tahun (RKAT) atau program kerja Forum Komunikasi (FORKOM) UKM Universitas Gadjah Mada. 
                    Porsenigama rutin dilaksanakan setiap tahunnya sebagai wadah penyaluran minat dan bakat mahasiswa Universitas Gadjah Mada (UGM) di 
                    bidang non-akademik, khususnya bidang olahraga dan seni. Porsenigama sendiri bertujuan untuk menumbuhkan kreativitas dan 
                    sportivitas dalam perlombaan yang adil di kalangan mahasiswa UGM. 
                </p>
            </div>
            <div className = 'md:hidden text-sm w-2/5 ml-4 font-sansPro absolute text-justify mt-4'>
                Pekan Olahraga dan Seni Universitas Gadjah Mada merupakan suatu ajang kejuaraan olahraga dan seni yang dilaksanakan 
                atas dasar RKAT FORKOM UKM Universitas Gadjah Mada.
            </div>
            <div className = 'h-full relative overflow-hidden hidden md:flex'>
                <img src="images/Title/Sun.svg" alt="Sun behind Pagoda" className = 'z-30 absolute mt-20 ml-6 transform scale-95 overflow-hidden'/>
                <img src='images/Title/Group 5.svg' alt="Images of Pagoda" className = 'z-50 relative right-10 mt-6 transform scale-95'/>
            </div>
            <img src='images/Title/Group 45.png' alt="Mountain" className = 'z-40 absolute mt-2 md:mt-12'/>
            <div className = 'h-24'></div>
        </div>
    )
}

export { Title }
