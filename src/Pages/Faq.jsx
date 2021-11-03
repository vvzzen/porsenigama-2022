import { faqList } from "../data/faqList"

const Faq = () => {
  return (
    <div className="bg-kuning min-h-screen faq py-12 mt-10" style={{ background: `url(${process.env.PUBLIC_URL}/images/faq/bg-faq.png)` }} >
      <div className="flex justify-center relative">
        <img
          src={`${process.env.PUBLIC_URL}/images/faq/frame-pojok-biru 1.png`}
          className="w-12 h-12 relative bottom-4 left-4"
          alt=""
        />
        <h2 className="text-7xl font-nuku text-center mb-16 text-krem tracking-wider px-4" style = {{
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
                      }}>Faq</h2>
        <img
          src={`${process.env.PUBLIC_URL}/images/faq/frame-pojok-biru 2.png`}
          className="w-12 h-12 transform transalate-y-full relative top-12 right-4"
          alt=""
        />
      </div>
      <div className="md:w-1/2 w-3/4 mx-auto">
        {faqList.map((faq, index) =>
          <details key={index}>
            <summary className="border border-gray-800 md:text-2xl text-lg md:h-24 min-h-28 bg-krem p-4 font-sansPro cursor-pointer">
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