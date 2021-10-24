const MedPartSponsorLogo = (props) =>{
    return(
        <div className={`rounded-full opacity-100 md:w-${props.width} w-${Math.floor(props.width / 5) * 4} h-auto`}>
            <img src={`${process.env.PUBLIC_URL}/images/medPartSponsor/${props.img}`} alt={props.name} />
        </div>
    )
}

export { MedPartSponsorLogo }