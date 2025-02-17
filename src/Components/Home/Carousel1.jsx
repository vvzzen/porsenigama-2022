import React from 'react'
import './Carousel1.css'

//array nya diubah sesuai yg mau ditampilin
const images = ['images/Sec1/Gambar pake pohon.png', 'images/Sec1/Gambar.png', 'images/Sec1/Gambar copy.png']
const title = ['FT mengalahkan FMIPA dalam cabor sepakbola', 
              'test2', 
              'test3']
const content = ['Hari ini adalah hari yang cerah untuk membunuh seseorang dengan menggunakan rancun tikus dan boraks. Berolahraga sangat baik dilakukan pada pagi dan sore hari saat sinar matahari memancarkan sinar redupnya.', 
                'test2', 
                'test3']
const link = ['https://drive.google.com/drive/folders/1KnE-BgbKC6WHKF73ktBtGmeUTm46dXB1?usp=sharing',
              'https://drive.google.com/drive/folders/1_ljN1RuxX7jDI8GxS_wkYJPlTQWpJHJu?usp=sharing',
              'localhost:3000']

const Carousel1 = () => {
  const [currentImage, setCurrentImage] = React.useState(0);
  const [currentTitle, setCurrentTitle] = React.useState(title[0]);
  const [currentContent, setCurrentContent] = React.useState(content[0]);
  const [currentLink, setCurrentLink] = React.useState(link[0]);

  const refs = images.reduce((acc, val, i) => {
    acc[i] = React.createRef();
    return acc;
  }, {});

  const scrollToImage = i => {
    // First let's set the index of the image we want to see next
    setCurrentImage(i);
    // Now, this is where the magic happens. We 'tagged' each one of the images with a ref,
    // we can then use built-in scrollIntoView API to do eaxactly what it says on the box - scroll it into
    // your current view! To do so we pass an index of the image, which is then use to identify our current
    // image's ref in 'refs' array above.
    refs[i].current.scrollIntoView({
      //     Defines the transition animation.
      behavior: 'smooth',
      //      Defines vertical alignment.
      block: 'nearest',
      //      Defines horizontal alignment.
      inline: 'start',
    });
  };

  // Some validation for checking the array length could be added if needed
  const totalImages = images.length;
  const num = currentImage;

  // Below functions will assure that after last image we'll scroll back to the start,
  // or another way round - first to last in previousImage method.
  const nextImage = () => {
    document.getElementById('textBerita').classList.toggle('fade');
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
      setCurrentTitle(title[0]);
      setCurrentContent(content[0]);
      setCurrentLink(link[0]);
    } else {
      scrollToImage(currentImage + 1);
      setCurrentTitle(title[num + 1]);
      setCurrentContent(content[num + 1]);
      setCurrentLink(link[num + 1]);
    }
    setTimeout(() => { document.getElementById('textBerita').classList.toggle('fade'); }, 500);
  };

  const previousImage = () => {
    document.getElementById('textBerita').classList.toggle('fade');
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
      setCurrentTitle(title[totalImages - 1]);
      setCurrentContent(content[totalImages - 1]);
      setCurrentLink(link[totalImages - 1]);
    } else {
      scrollToImage(currentImage - 1);
      setCurrentTitle(title[num - 1]);
      setCurrentContent(content[num - 1]);
      setCurrentLink(link[num - 1]);
    }
    setTimeout(() => { document.getElementById('textBerita').classList.toggle('fade'); }, 500);
  };

  // Tailwind styles. Most importantly notice position absolute, this will sit relative to the carousel's outer div.
  const arrowStyle = 'absolute mt-7 z-10 h-10 w-10 flex items-center justify-center transform scale-75 transition duration-300 hover:scale-100';

  // Let's create dynamic buttons. It can be either left or right. Using
  // isLeft boolean we can determine which side we'll be rendering our button
  // as well as change its position and content.
  const sliderControl = isLeft => (
    <button
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={`${arrowStyle} ${isLeft ? '-left-20' : '-right-20'}`}
      style={{ top: '40%' }}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? 'left' : 'right'}`}>
        <img src={`${isLeft ? 'images/Sec1/Kiri.svg' : 'images/Sec1/Kanan.svg'}`} alt={`${isLeft ? 'Berita Kiri' : 'Berita Kanan'}`} /> 
      </span>
    </button>
  );

  const readMore = () => {
      window.open(
       currentLink
      )  
  };

  return (
  // Images are placed using inline flex. We then wrap an image in a div
  // with flex-shrink-0 to stop it from 'shrinking' to fit the outer div.
  // Finally the image itself will be 100% of a parent div. Outer div is
  // set with position relative, so we can place our cotrol buttons using
  // absolute positioning on each side of the image.
    <div className="p-12 flex justify-center w-3/4 items-center">
      <div className="relative w-full">
        <div className="carousel shadow-csel1">
          {sliderControl(true)}
          {images.map((img, i) => (
            <div className="w-full flex-shrink-0" key={img} ref={refs[i]}>
              <img src={img} className="w-full object-contain" />
            </div>
          ))}
          <div className = 'w-full h-full flex justify-end absolute items-center'>          
            <div id = 'textBerita' className = 'w-1/3 text-white text-right mr-8 cursor-default flex-shrink-0'>
              <div className = 'w-full font-sans font-bold text-4xl mt-12 object-contain'>
                {currentTitle}
              </div>
              <div className = 'w-full font-sansPro text-md mt-2 object-contain'>
                {currentContent}                  
              </div> 
              <button className = 'text-yellow-500 cursor-pointer font-sansPro text-md' onClick={readMore}>
                READ MORE...
              </button>
            </div>
          </div>
          {sliderControl()}
        </div>
      </div>
    </div>
  );
};

export default Carousel1