import { imagesFull, title } from '../data/dataBerita';
import { useLocation, useHistory } from 'react-router-dom'


const News = () => {
    const location = useLocation() 

    const history = useHistory();

    const goBack = () => {
        history.push(`${process.env.PUBLIC_URL}/`);
    };

    let newsNo = location.state.newsNo 

    return (
        <>
        <div className='text-3xl md:text-6xl font-nuku bg-oren md:ml-24 pb-6 pt-12 text-white rounded-b-3xl text-center absolute w-full md:w-1/3'>
            {title[newsNo]}
        </div>
        <img src={`${process.env.PUBLIC_URL}/images/News/Group 55.svg`} alt="" className='transform scale-50 absolute hidden md:flex' style={{'left' : '41%', 'top' : '20%'}} />
        <div className="md:min-h-screen min-w-full text-center flex flex-wrap gap-y-2 md:gap-y-4 font-nuku py-12 md:py-28" style={{
            'backgroundImage': `url('${process.env.PUBLIC_URL}/images/News/Group 51.png')`
        }}>
            <div className='md:w-1/3 md:ml-24 mx-4 md:mr-0'>
                {(() => {
                    if (newsNo === 0) {
                        return <p className="font-sans text-justify text-xs md:text-xl md:px-0 mt-20 md:mt-24 tracking-wider">&emsp;&emsp;Pekan Olahraga dan Seni Universitas Gadjah Mada (Porsenigama) merupakan suatu ajang kejuaraan olahraga dan seni yang dilaksanakan atas dasar Rancangan Kegiatan Awal Tahun (RKAT) atau program kerja Forum Komunikasi (FORKOM) UKM Universitas Gadjah Mada. Kegiatan ini bertujuan untuk menumbuhkan kreativitas dan sportivitas dalam perlombaan yang adil di kalangan mahasiswa UGM. Porsenigama 2021 mengangkat tema “Gelora Ombak” yang dapat menjadi slogan untuk mendorong kreativitas dan inovasi generasi muda untuk menjadi sang juara. Tahun ini, Porsenigama memiliki tagline berupa Semarak Baru Porsenigama, Bersinergi Maju Melegenda.<br></br><br></br>
                        </p>;
                    } else {
                        return <p></p>;
                    }
                })()}
            </div>
            <div className='flex-1 md:ml-16 md:mr-24 mx-2'>
                <img src={imagesFull[newsNo]} alt="" className='justify-self-center w-full' />
            </div>
            {(() => {
                if (newsNo === 0) {
                    return <p className="font-sans text-justify text-xs md:text-xl mx-4 mt-4 md:mt-0 md:mx-24 tracking-wider md:px-0">
                        Porsenigama 2021 diselenggarakan secara bauran yaitu daring dan luring. Metode daring dilaksanakan secara live streaming melalui platform Youtube dan Instagram. Sedangkan metode luring dilaksanakan bagi cabang perlombaan yang tidak memerlukan kontak fisik antar peserta dengan tetap mematuhi protokol kesehatan yang ketat. Peserta lomba Porsenigama 2021 merebutkan gelar juara umum Porsenigama yang disimbolkan dengan Piala Bergilir yang diturunkan dari pemenang porsenigama sebelumnya.<br></br><br></br>
                        Cabang perlombaan Porsenigama 2021 terdiri dari cabang olahraga dan cabang seni. Cabang olahraga terdiri dari sepak bola, panjat tebing, panahan, bulu tangkis, bridge, catur, judo, taekwondo, karate, pencak silat, dan e-sport. Sedangkan cabang seni terdiri dari seni lukis, fotografi, band, tari, vocal group, naskah lakon, menulis puisi, makeup creation, keroncong, dan monolog. Setiap perlombaan selalu mendapat semangat dan dukungan tanpa henti oleh suporter tiap fakultas. Adanya suporter selalu berhasil membuat para atlet dan seniman menunjukan penampilan terbaiknya.<br></br><br></br>
                        Dengan berbagai macam cabang perlombaan yang  diselenggarakan, siapkah kamu untuk mengarungi gelora ombak Porsenigama? Kami tunggu partisipasimu di Porsenigama 2021 yang akan diselenggarakan 30 Oktober 2021 hingga 20 November 2021 nanti.
                    </p>;
                } else {
                    return <p></p>;
                }
            })()}
            <button className='cursor-pointer transform scale-50 md:scale-100 transition duration-300 md:hover:scale-105 ml-4 md:ml-20 md:mt-20'
                onClick={goBack}
            >
                <img src={`${process.env.PUBLIC_URL}/images/News/Back.svg`} alt="" />
            </button>
        </div>
        </>
    )
}

export { News }
