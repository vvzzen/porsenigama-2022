import React from 'react'
import Venue from './Venue'

const Section5 = () => {
    return (
        <>
            <div className = ' w-full relative z-50 bg-biru'>
                <h2 className="text-8xl font-nuku text-kuning bg-biru">Venue</h2>
                <div className = 'bg-biru'>
                    <Venue/>
                </div>
            </div>
            <img className = 'w-full relative z-50 bg-krem' src={`${process.env.PUBLIC_URL}/images/Sec2/bg_end.svg`} alt="" />
        </>
    )
}

export { Section5 }
