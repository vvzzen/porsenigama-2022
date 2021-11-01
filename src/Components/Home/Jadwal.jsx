import './Jadwal.css'
import { dataJadwal } from '../../data/dataJadwalTanding';
import Carousel from 'react-elastic-carousel'
import React from 'react';


const box = "gradient-box w-56 h-56 lg:w-52 bg-krem2 border border-oren2 rounded-3xl relative"
const title = "bg-gradient-to-r from-krem via-krem3 to-krem3  p-2 bg-krem3 rounded-3xl mx-6 my-4 border-white border"
const cont2 = "mx-2 h-20 mb-12 grid grid-cols-5 justify-item-center text-center content-center"
const cont3 = "grid grid-row-2 col-span-2 font-bold justify-item-center "
const events = "text-sm lg:text-2xl font-nuku w-full text-center"
// const photo = "text-center w-11/12 relative border-50% rounded-full"
// const frame = "w-full absolute top-0 right-0 rounded-lg"


export function Tes({cabor, party1 ,img1, party2,img2, jam, tanggal, tempat,category}){
    return(
        <div className="relative mb-8">
        <div className = {box}>
            <div className = {title}>
                <div>
                    <p className= {events +" cabor"}>
                        {cabor}
                    </p>
                </div>
            </div>
            <p className="font-bold font-sansPro">{category}</p>
            <div className = {cont2}> 
                <div className= {cont3 } >
                    <p className="overflow-hidden text-sm"> {party1} </p>
                    {/* <div className="relative grid justify-item-center mt-2" >
                        <img alt="" className= {photo} src={`${process.env.PUBLIC_URL}/images/Sec6/${img1} `}></img>
                        <img alt="" className= {frame} src={`${process.env.PUBLIC_URL}/images/Sec6/left-frame.png `}></img>
                    </div> */}
                </div>
                <div className ="vs text-3xl font-nuku ">
                    VS
                </div>
                <div className= {cont3} >
                    <p className="overflow-hidden text-sm"> {party2} </p>
                    {/* <div className="relative grid justify-item-center mt-2" >
                        <img alt="" className= {photo} src={`${process.env.PUBLIC_URL}/images/Sec6/${img2} `}></img>
                        <img alt="" className= {frame} src={`${process.env.PUBLIC_URL}/images/Sec6/right-frame.png `}></img>
                    </div> */}
                </div>
            </div>
        </div>
        <div className="gradient border-white border -right-3 -bottom-8 rounded-full bg-opacity-100 w-24 h-20 absolute grid text-center text-sm content-center font-sansPro">
            <p className="text-merah"> {jam} </p>
            <p className="text-biru"> {tanggal} </p>
            <p className="text-merah"> {tempat} </p>
        </div>
        </div>
        
    )
}

const button =  "relative item-center w-12 bg-biru h-12 translate-x-1/2 rounded-full"

class Jadwal extends React.Component {
    constructor(props) {
        super(props)
        this.breakPoints = [
          { width: 1, itemsToShow: 1 },
          { width: 550, itemsToShow: 2 },
          { width: 800, itemsToShow: 3 },
          { width: 850, itemsToShow: 4 },
          { width: 1450, itemsToShow: 5 },
        ]
    }
    render(){
    return(
        <div className="lg:mx-20">
            {/* <div className="hidden xl:grid grid-cols-5 justify-items-center">
                {dataJadwal.map((card, index) =>
                <Tes
                    cabor= {card.cabor}
                    party1= {card.party1}
                    img1= {card.img1}
                    party2 = {card.party2}
                    img2 = {card.img2}
                    jam = { card.jam}
                    tanggal = {card.tanggal}
                    tempat = {card.tempat}
                />
            )}
            </div> */}
            <div className="relative grid grid-cols-9 justify-item-center">
                <button 
                    className ={button + " button"}
                    onClick={() => this.carousel.slidePrev()}>
                    <img 
                        src={`${process.env.PUBLIC_URL}/images/Sec6/left-arrow.png`} 
                        style={{ 
                            position:"absolute",
                            top:"50%",
                            left:"50%",
                            transform: "translate(-50%,-50%)",
                            height:"2rem"}}
                        alt="" />
                </button>
                <Carousel className="col-span-7"breakPoints={this.breakPoints} ref={ref => (this.carousel = ref)}>
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
                        category = {card.category}
                        />
                    )}
                </Carousel>
                <button className={button + " button"}  
                        onClick={() => this.carousel.slideNext() 
                        }> 
                        <img 
                            src={`${process.env.PUBLIC_URL}/images/Sec6/right-arrow.png`} 
                            style={{ 
                                position:"absolute",
                                top:"50%",
                                left:"50%",
                                transform: "translate(-50%,-50%)",
                                height:"2rem"}}
                            alt="" />
                </button>
            </div>
        </div>
    )
    }
}

export default Jadwal;