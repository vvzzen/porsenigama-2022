import { faqList } from "../data/faqList"


const Faq = () => {
  return (
    <div className="bg-kuning min-h-screen faq py-12">
      <h2 className="text-7xl font-nuku font-bold text-center pb-16 text-red-100 text-shadow-black">Faq</h2>

      <div className="md:w-1/2 w-3/4 mx-auto">
        { faqList.map((faq) => 
          <details>
            <summary className="border border-gray-800 text-2xl  h-24 bg-red-100 p-4 font-sansPro">
              <span className="text-merah pl-2">{faq.quetion}</span>
            </summary>
            <div className="text-lg font-sansPro bg-grey-100 bg-opacity-50 backdrop-filter backdrop-blur p-2 ">
              <p>{faq.answer}</p>
            </div>
          </details>
        
        
        )}
      </div>
    </div>
  )
}

export { Faq }