import React, {useState} from 'react'
import './Venue.css'
import { v4 as uuidv4 } from "uuid";

// Ini fungsi tombol slidernya 
function BtnSlider({ direction, moveSlide }) {
    console.log(direction, moveSlide);
    const btn = "" ;
    return (
      <button
        onClick={moveSlide}
        className = {direction === "next" ? `${btn} btn-slide next` : `${btn} btn-slide prev`}
      >
        <img
          src={direction === "next" ? `${process.env.PUBLIC_URL}/images/Sec5/right-circle.png` : '/images/Sec5/left-circle.png' }
          className =  "slide-img hidden md:flex"
          alt =""
        ></img>
        <img
          src= {`${process.env.PUBLIC_URL}/images/Sec5/button-slide.png`}
          className = "slide-img flex md:hidden"
          alt =""
        ></img>
      </button>
    );
}


//Kalau mau edit jumlah gambar, tinggal ubah array dataslidernya
const dataSlider = [
  {
    id: uuidv4(),
    title: "auditoriumfk",
    subTitle: "Lorem"
  },
  {
    id: uuidv4(),
    title: "kinanthi",
    subTitle: "Lorem"
  },
  {
    id: uuidv4(),
    title: "pascasarjanafk",
    subTitle: "Lorem"
  }
];


export function Venue() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    // const moveDot = index => {
    //     setSlideIndex(index)
    // }

    return (
        <div className="relative h-96 md:h-screen">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >   
                        <img
                        alt =""
                        src={process.env.PUBLIC_URL + `/images/Sec5/Imgs/img${index + 1}.jpg`} 
                        />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>


            {/* Buat simpenan kalau mau pakai dot */}
            {/* <div className="container-dots">
                {Array.from({length: 6}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div> */}
        </div>
    )
}

export default Venue;




