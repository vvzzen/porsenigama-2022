import { MedPartSponsorLogo } from './MedPartSponsor';
import { dataSponsor, dataMedpart } from '../../data/dataMedPartSponsor';


const SectionMedpartSponsor = () => {
    return(
        <div className="relative">
            {/* <div className="bg-kuning bg-opacity-0">

        
            </div> */}
            <div className="relative bg-krem">
                <div className="absolute w-full bg-repeat"></div> 
                {/* sponsor */}
                <div className="pb-8 pt-36 md:px-24 px-4">
                    <div className="relative bg-white bg-opacity-50 shadow-2xl pt-16 pb-12 px-8 rounded-20xl md:mb-12" style={{border:'solid white 10px'}}>
                        <h2 className="absolute md:-top-36 md:left-24 md:text-8xl -top-24 text-5xl font-nuku text-oren ml-10 md:ml-0">Sponsor</h2>
                        <div className="relative z-50 flex flex-wrap md:gap-8 gap-4 justify-evenly md:mx-16 ">
                            {dataSponsor.map((sponsor, index) =>
                                <div className="self-center">
                                <MedPartSponsorLogo
                                    key={index}
                                    name={sponsor.name}
                                    img={sponsor.img}
                                    width={sponsor.lebar}
                                    height={sponsor.tinggi}
                                />
                                </div>
                            )}
                        </div>
                        {/* <div className="w-12 w-16 w-20 w-24 w-28 w-32 w-36 w-40 w-44 w-48 h-12 h-16 h-20 h-24 h-28 h-32 h-36 h-40 h-44 h-48 hidden" /> */}
                        {/* <div className="md:w-12 md:w-16 md:w-20 md:w-24 md:w-28 md:w-32 md:w-36 md:w-40 md:w-44 md:w-48 md:h-12 md:h-16 md:h-20 md:h-24 md:h-28 md:h-32 md:h-36 md:h-40 md:h-44 md:h-48 hidden" /> */}
                    </div>

                </div>

                {/* Media Partner */}
                <div className="pb-8 pt-36 md:px-24 px-4">
                    <div className="relative shadow-2xl pt-16 pb-12 px-8 rounded-20xl bg-white  bg-opacity-50" style={{border:'solid white 10px'}}>
                        <h2 className="absolute mt-6 md:-top-48 md:left-24 md:text-8xl -top-48 text-5xl font-nuku text-abu mr-8 md:mr-0">Media Partner</h2>
                        <div className="relative flex flex-wrap md:gap-8 gap-4 justify-evenly md:mx-16 align-middle">
                            {dataMedpart.map((mediaPartner, index) =>
                                <div className="self-center">
                                    <MedPartSponsorLogo
                                        key={index}
                                        name={mediaPartner.name}
                                        img={mediaPartner.img}
                                        width={mediaPartner.lebar}
                                    />
                                </div>
                                )}
                        </div>
                    </div>
                </div>

            </div>
            </div>
    )

}

export { SectionMedpartSponsor }