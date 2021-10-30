import { faqList } from "../data/faqList"

const Faq = () => {
  return (
    <div className="bg-kuning min-h-screen faq py-12" style={{ background: `url(${process.env.PUBLIC_URL}/images/faq/bg-faq.png)` }} >
      <div className="flex justify-center relative">
        <img
          src={`${process.env.PUBLIC_URL}/images/faq/frame-pojok-biru 1.png`}
          className="w-12 h-12 relative bottom-4 left-4"
          alt=""
        />
        <h2 className="text-7xl font-nuku font-bold text-center mb-16 text-red-100 text-shadow-black px-4">Faq</h2>
        <img
          src={`${process.env.PUBLIC_URL}/images/faq/frame-pojok-biru 2.png`}
          className="w-12 h-12 transform transalate-y-full relative top-12 right-4"
          alt=""
        />
      </div>
      <div className="md:w-1/2 w-3/4 mx-auto">
        {faqList.map((faq, index) =>
          <details key={index}>
            <summary className="border border-gray-800 md:text-2xl text-lg md:h-24 min-h-28 bg-red-100 p-4 font-sansPro">
              <span className="text-merah pl-2">{faq.quetion}</span>
            </summary>
            <div className="text-base font-sansPro font-light bg-white bg-opacity-30 backdrop-filter backdrop-blur p-4 whitespace-pre-line break-words md:break-normal">
              <p>{faq.answer}</p>
            </div>
          </details>
        )}
      </div>
    </div>
  )
}

export { Faq }