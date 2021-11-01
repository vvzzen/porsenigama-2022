import React, { useEffect, useState } from "react";
import { db } from "../../data/db";
import "./Jadwal.css";
import Carousel from 'react-elastic-carousel'


const box = "gradient-box w-56 h-56 lg:w-52 bg-krem2 border border-oren2 rounded-3xl relative"
const cont1 = "bg-gradient-to-r from-krem via-krem3 to-krem3  p-2 bg-krem3 rounded-3xl mx-6 my-4 border-white border"
const cont2 = "mx-2 h-20 mb-12 grid grid-cols-3 justify-item-center text-center content-center"
const cont3 = "grid grid-row-2 font-bold justify-item-center"



const Jadwal = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPostsFromFirebase = [];
    const subscriber = db
      .collection("dataJadwal")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getPostsFromFirebase.push({
            ...doc.data(), //spread operator
            key: doc.id, // `id` given to us by Firebase
          });
        });
        setPosts(getPostsFromFirebase);
      });

    // return cleanup function
    return () => subscriber();
  }, []); // empty dependencies array => useEffect only called once

  return (
    <div className="grid-cols-9 grid">
      <button 
          className ={"relative item-center w-12 bg-biru h-12 translate-x-1/2 rounded-full button"}
          onClick={() => posts.carousel.slidePrev()}>
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

      {posts.breakPoints = [
          { width: 1, itemsToShow: 1 },
          { width: 550, itemsToShow: 2 },
          { width: 800, itemsToShow: 3 },
          { width: 850, itemsToShow: 4 },
          { width: 1450, itemsToShow: 3 },  
        ],
      

      posts.length > 0 ? (

        <Carousel className="col-span-7" breakPoints={posts.breakPoints} ref={ref => (posts.carousel = ref)} >
        {posts.map((post) =>         
          <div className="relative" key={post.key}>
            <div className="relative mb-8">
              <div className = {box}>
                  <div className = {cont1}>
                      <div>
                          <p className= "overflow-hidden text-sm lg:text-2xl font-nuku w-full text-center cabor">
                              {post.cabor}
                          </p>
                      </div>
                  </div>
                  <div className = {cont2}> 
                      <div className= {cont3 } >
                          <p className="overflow-hidden text-lg"> {post.party1} </p>
                      </div>
                      <div className ="vs text-3xl font-nuku ">
                          VS
                      </div>
                      <div className= {cont3} >
                          <p className="overflow-hidden text-lg"> {post.party2} </p>
                      </div>
                  </div>
              </div>
              <div className='flex justify-center'>
                  <div className="gradient border-white border -bottom-8 rounded-full bg-opacity-100 w-48 h-20 absolute grid text-center text-lg content-center font-sansPro">
                      <p className="text-merah"> {post.jam} </p>
                      <p className="text-biru"> {post.tanggal} </p>
                      <p className="text-merah"> {post.tempat} </p>
                  </div>
              </div>
              </div>
          </div>)
        } 
        </Carousel>
        
      ) : (
        ""
      )}
      <button className={ "relative item-center w-12 bg-biru h-12 translate-x-1/2 rounded-full button"}  
                        onClick={() => posts.carousel.slideNext() 
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
  );
};

export default Jadwal;
