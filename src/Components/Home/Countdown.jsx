import {useState} from 'react'

export default function Countdown (props) {
	const [timerSeconds, setSeconds] = useState("--")	
	const [timerMinutes, setMinutes] = useState("--")	
	const [timerHours, setHours] = useState("--")	
	const [timerDays, setDays] = useState("--")
		
	
	let countDownDate = new Date(new Date(`${props.date} gmt+7`).toLocaleString("en-US", {timeZone: "Asia/Jakarta"})).getTime();
	
	let startCountDown = setInterval( function() {
	
        let now = new Date(new Date().toLocaleString("en-US", {timeZone: "Asia/Jakarta"})).getTime();
		let distance = countDownDate - now;
    
		let days = Math.floor(distance / (1000 * 60 * 60 * 24));
		if (days < 10){
			days = "0" + days;
		}
	    
		let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		if (hours < 10){
			hours = "0" + hours;
		}
	    
		let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
		if (minutes < 10){
			minutes = "0" + minutes;
		}
	    
		let seconds = Math.floor((distance % (1000 * 60)) / 1000)
		if (seconds < 10){
			seconds = "0" + seconds;
		}
		
		setDays(days)
		setHours(hours)
		setMinutes(minutes)
		setSeconds(seconds)
		if (distance < 0){
			clearInterval(startCountDown);
			setDays("00")
			setHours("00")
			setMinutes("00")
			setSeconds("00")
		}

	}, 1000)

	return(
        <>
            {/* <div className='grid grid-cols-5 justify-items-end z-10 font-nuku w-2/3'>
                <div className="absolute" style = {{'maxWidth': '100% ', 'height': 'auto', 'border-radius': '100%', 'background': 'red' }}>ass</div>
            </div> */}
            <div className='flex font-nuku cursor-default text-biru justify-center md:text-6xl ml-4 md:ml-28 '>
                <div className='text-kuning' style = {{
                    "textShadow": [
                        "-1px -1px 0 #1E234C",
                        "-0.5px -1px 0 #1E234C",
                        "0px -1px 0 #1E234C",
                        "0.5px -1px 0 #1E234C",
                        "1px -1px 0 #1E234C",
                        "1.5px -0.5px 0 #1E234C",
                        "2px 0px 0 #1E234C",
                        "2.5px 0.5px 0 #1E234C",
                        "3px 1px 0 #1E234C",
                        "3.5px 1.5px 0 #1E234C",
                        "4px 2px 0 #1E234C",
                        "4.5px 3.5px 0 #1E234C",
                        "5px 3px 0 #1E234C",
                        "-1px 0px 0 #1E234C",
                        "-1px 1px 0 #1E234C",
                        "-0.5px 1.5px 0 #1E234C",
                        "0px 2px 0 #1E234C",
                        "0.5px 2.5px 0 #1E234C",
                        "1px 1px 0 #1E234C",
                        "1.5px 1.5px 0 #1E234C",
                        "2px 2px 0 #1E234C",
                        "2.5px 2.5px 0 #1E234C",
                        "3px 3px 0 #1E234C",
                        "3.5px 3.5px 0 #1E234C",
                        "4px 4px 0 #1E234C",
                        "4.5px 4.5px 0 #1E234C",
                        "5px 5px 0 #1E234C",
                        "1px 3px 0 #1E234C",
                        "1.5px 3.5px 0 #1E234C",
                        "2px 4px 0 #1E234C",
                        "2.5px 4.5px 0 #1E234C",
                        "3px 5px 0 #1E234C",
                    ],
                }}>{`${timerHours+(timerDays*60)}`}:{timerMinutes}:{timerSeconds} </div><p>&ensp;to go</p>                               
            </div>
        </>
    )
}