import { imagesFull, title } from '../data/dataBerita';
import { useLocation, useHistory } from 'react-router-dom'


const News = () => {
    const location = useLocation() 

    const history = useHistory();

    const goBack = () => {
        history.push("/");
    };

    let newsNo = location.state.newsNo 

    return (
        <div className="md:min-h-screen min-w-full text-center grid gap-y-6 md:gap-y-12 font-nuku text-5xl md:text-8xl md:px-28 py-12 md:py-28" style={{ 
            'backgroundImage': "url('images/News/Group 51.png')"
        }}>
            {title[newsNo]} 
            <img src={imagesFull[newsNo]} alt="" className='justify-self-center w-full' />
            {(() => {
                if (newsNo === 0) {
                    return <p className="font-sans text-justify text-base md:text-2xl md:mx-40 px-8 md:px-0">Pekan Olahraga dan Seni Universitas Gadjah Mada (Porsenigama) merupakan suatu ajang kejuaraan olahraga dan seni yang dilaksanakan atas dasar Rancangan Kegiatan Awal Tahun (RKAT) atau program kerja Forum Komunikasi (FORKOM) UKM Universitas Gadjah Mada. Kegiatan ini bertujuan untuk menumbuhkan kreativitas dan sportivitas dalam perlombaan yang adil di kalangan mahasiswa UGM. Porsenigama 2021 mengangkat tema “Gelora Ombak” yang dapat menjadi slogan untuk mendorong kreativitas dan inovasi generasi muda untuk menjadi sang juara. Tahun ini, Porsenigama memiliki tagline berupa Semarak Baru Porsenigama, Bersinergi Maju Melegenda.<br></br><br></br>
                        Porsenigama 2021 diselenggarakan secara bauran yaitu daring dan luring. Metode daring dilaksanakan secara live streaming melalui platform Youtube dan Instagram. Sedangkan metode luring dilaksanakan bagi cabang perlombaan yang tidak memerlukan kontak fisik antar peserta dengan tetap mematuhi protokol kesehatan yang ketat. Peserta lomba Porsenigama 2021 merebutkan gelar juara umum Porsenigama yang disimbolkan dengan Piala Bergilir yang diturunkan dari pemenang porsenigama sebelumnya.<br></br><br></br>
                        Cabang perlombaan Porsenigama 2021 terdiri dari cabang olahraga dan cabang seni. Cabang olahraga terdiri dari sepak bola, panjat tebing, panahan, bulu tangkis, bridge, catur, judo, taekwondo, karate, pencak silat, dan e-sport. Sedangkan cabang seni terdiri dari seni lukis, fotografi, band, tari, vocal group, naskah lakon, menulis puisi, makeup creation, keroncong, dan monolog. Setiap perlombaan selalu mendapat semangat dan dukungan tanpa henti oleh suporter tiap fakultas. Adanya suporter selalu berhasil membuat para atlet dan seniman menunjukan penampilan terbaiknya.<br></br><br></br>
                        Dengan berbagai macam cabang perlombaan yang  diselenggarakan, siapkah kamu untuk mengarungi gelora ombak Porsenigama? Kami tunggu partisipasimu di Porsenigama 2021 yang akan diselenggarakan 30 Oktober 2021 hingga 20 November 2021 nanti.
                    </p>;
                } else {
                    return <p></p>;
                }
            })()}
            <button className = 'cursor-pointer transform scale-75 md:scale-100 transition duration-300 md:hover:scale-105'
                onClick={goBack}
            >
                <img src={`${process.env.PUBLIC_URL}/images/News/Back.svg`} alt="" />
            </button>
        </div>
    )
}

export { News }
