import React, {useState} from 'react'
import './Venue.css'
import { v4 as uuidv4 } from "uuid";

// Ini fungsi tombol slidernya 
function BtnSlider({ direction, moveSlide }) {
    console.log(direction, moveSlide);
    return (
      <svg
        onClick={moveSlide}
        className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
      >
        <image 
          href={direction === "next" ? `${process.env.PUBLIC_URL}/images/Sec5/right-circle.png` : '/images/Sec5/left-circle.png' }
          className = "slide-img"
        ></image>
      </svg>
    );
}


//Kalau mau edit jumlah gambar, tinggal ubah array dataslidernya
const dataSlider = [
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem"
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem"
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem"
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
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
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >   
                        <img
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




