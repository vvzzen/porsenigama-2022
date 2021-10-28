import './Jadwal.css'
import { dataJadwal } from '../../data/dataJadwalTanding';

const box = "gradient-box w-44 lg:w-52 bg-krem2 border border-oren2 rounded-3xl relative"
const cont1 = "w-32 lg:w-40 bg-gradient-to-r from-krem via-krem3 to-krem3  p-2 bg-krem3 rounded-3xl mx-6 my-4 border-white border"
const cont2 = "mx-2 h-20 mb-12 grid grid-cols-3 justify-item-center text-center content-center"
const cont3 = "grid grid-row-2 font-bold justify-item-center"
const events = "text-2xl font-nuku w-full text-center"
const photo = "text-center w-11/12 relative border-50% rounded-full"
const frame = "w-full absolute top-0 right-0 rounded-lg"


export function Tes({cabor, party1 ,img1, party2,img2, jam, tanggal, tempat}){
    return(
        <div className="relative">
        <div className = {box}>
            <div className = {cont1}>
                <div>
                    <p className= {events +" cabor"}>
                        {cabor}
                    </p>
                </div>
            </div>
            <div className = {cont2}> 
                <div className= {cont3 } >
                    <p> {party1} </p>
                    <div className="relative grid justify-item-center mt-2" >
                        <img alt="" className= {photo} src={`${process.env.PUBLIC_URL}/images/Sec6/${img1} `}></img>
                        <img alt="" className= {frame} src={`${process.env.PUBLIC_URL}/images/Sec6/left-frame.png `}></img>
                    </div>
                </div>
                <div className ="vs text-3xl font-nuku ">
                    VS
                </div>
                <div className= {cont3} >
                    <p> {party2} </p>
                    <div className="relative grid justify-item-center mt-2" >
                        <img alt="" className= {photo} src={`${process.env.PUBLIC_URL}/images/Sec6/${img2} `}></img>
                        <img alt="" className= {frame} src={`${process.env.PUBLIC_URL}/images/Sec6/right-frame.png `}></img>
                    </div>
                </div>
            </div>
        </div>
        <div className="gradient border-white border -right-3 -bottom-8 rounded-full bg-opacity-100 w-16 h-16 absolute grid text-center text-xxs content-center">
            <p className="text-merah"> {jam} </p>
            <p className="text-biru"> {tanggal} </p>
            <p className="text-merah"> {tempat} </p>
        </div>
        </div>
        
    )
}



export const Jadwal = (props) =>{
    return(
        <div className="grid grid-cols-5 justify-items-center mx-20">
            {dataJadwal.map((card, index) =>
                <Tes
                    cabor= {card.cabor}
                    party1= {card.party1}
                    img1= {card.img1}
                    party2 = {card.party2}
                    img2 = {card.img2}
                    jam = {card.jam}
                    tanggal = {card.tanggal}
                    tempat = {card.tempat}
                />
            )}
        </div>
    )
}

export default Jadwal;