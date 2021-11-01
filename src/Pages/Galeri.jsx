import { LazyLoadImage } from 'react-lazy-load-image-component'
import { datafoto } from '../data/datafoto'
import 'react-lazy-load-image-component/src/effects/blur.css';

const Galeri = () =>{
 
    return(
    <div className="bg-birdong">
        <div className="bg-cover h-screen" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/galeri/atas.png)`}}></div>
            <div className="flex flex-wrap justify-center md:gap-x-1.5 md:gap-y-0 gap-4">
                     <button className="transition ease-in-out duration-500 filter hover:grayscale transform hover:scale-95"  >
                        <LazyLoadImage effect = "blur" className="relative md:w-auto w-72 md:h-60 h-auto w-64 md:rounded rounded-xl shadow" src={`${process.env.PUBLIC_URL}/images/galeri/${datafoto.foto}`}/>
                     </button>   
            </div>
    </div>
// onClick={()=> openFoto(galeri)}
    )
}

export { Galeri };