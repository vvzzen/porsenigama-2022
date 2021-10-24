import React from 'react'
import Carousel1 from './Carousel1'

const Section1 = () => {
    return (
        <>
            <div className = 'h-36'></div>
            <div className = 'h-screen w-full relative z-50 bg-biru'>
                <div className="flex justify-center">
                    <Carousel1 />
                </div>
            </div>
        </>
    )
}

export { Section1 }
