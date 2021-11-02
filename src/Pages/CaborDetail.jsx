import { useState } from "react";
import { caborList, casenList } from "../data/dataCabor";

const Card = (props) => {
  return (
    <div className="my-20">
      <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-t-3xl">
        <div className="flex items-center justify-between px-8 py-4 text-2xl">
          <p className="py-2">{props.data.date}</p>
          {props.data.isFinished && (
            <p className="px-10 py-2 rounded-xl bg-birdong text-white">
              Selesai
            </p>
          )}
        </div>
      </div>
      <div className="mt-1 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-b-3xl">
        <div className="flex items-center px-8 py-12">
          <div
            className="rounded-full bg-white"
            style={{ width: "6%", height: "80%" }}
          >
            {/* Logo Supporter */}
          </div>
          <div className="ml-8 space-y-3" style={{ width: "60%" }}>
            <p className="text-5xl uppercase">{props.data.title}</p>
            <p className="opacity-50 text-2xl uppercase">{props.data.phase}</p>
          </div>
          <div className="ml-8 space-y-3 text-2xl" style={{ width: "34%" }}>
            <p className="uppercase">{props.data.venue}</p>
            {props.data.isFinished && <p>Pemenang: {props.data.winner}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

const CaborDetail = (props) => {
  const id = props.match.params.id;
  const data = [...caborList, ...casenList];
  const item = data.filter((i) => i.title === id)[0];
  const [showCategory, setShowCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    item.schedule[0].category
  );
  const assetsCaborDetail = `${process.env.PUBLIC_URL}/images/CaborDetail`;

  const showCategoryHandler = () => {
    setShowCategory((prevState) => !prevState);
  };

  const selectCategoryHandler = (category) => {
    setSelectedCategory(category);
    setShowCategory(false);
  };

  const schedule = item.schedule.filter(
    (data) => data.category === selectedCategory
  )[0].data;

  return (
    <div className="relative bg-merah min-w-full px-5 overflow-hidden">
      <div className="flex items-center h-full min-h-screen">
        <img
          style={{ width: "3%" }}
          src={`${assetsCaborDetail}/jpn-${id}.png`}
          alt=""
        />
        <div className="relative" style={{ width: "45%" }}>
          <img src={`${assetsCaborDetail}/circle-biru.svg`} alt="" />
          <div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
            style={{ width: "70%" }}
          >
            <h1 className="mb-8 font-bold text-5xl uppercase">{item.title}</h1>
            <p className="text-xl">{item.description}</p>
          </div>
        </div>
        <img
          className="relative ml-auto w-1/2"
          src={`${assetsCaborDetail}/cover-${item.title}.png`}
          alt=""
        />
      </div>
      <img
        className="z-0 absolute right-0"
        src={`${assetsCaborDetail}/rumah.png`}
        alt=""
      />
      <div className="flex flex-col justify-center px-20 pt-8">
        <div
          className={`z-10 relative w-1/5 bg-white ${
            showCategory ? "rounded-t-3xl" : "bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-3xl"
          } py-3 text-2xl`}
        >
          <div
            className="flex justify-between cursor-pointer"
            onClick={showCategoryHandler}
          >
            <p className="px-6 py-3 opacity-50">{selectedCategory}</p>
            <div className="flex justify-center px-4 border-l border-black border-opacity-60">
              <img
                className={`py-3 ${showCategory ? "transition transform rotate-180" : ""}`}
                style={{ width: "60%" }}
                src={`${assetsCaborDetail}/dropdown.svg`}
                alt=""
              />
            </div>
          </div>
          {showCategory && (
            <div className="absolute w-full bg-white rounded-b-3xl mt-3 pb-3">
              {item.schedule.map((schedule) => (
                <p
                  key={schedule.category}
                  className="px-6 py-3 opacity-50 cursor-pointer"
                  onClick={() => selectCategoryHandler(schedule.category)}
                >
                  {schedule.category}
                </p>
              ))}
            </div>
          )}
        </div>
        <div className="self-center w-full font-sansPro">
          {schedule.map((data, index) => (
            <Card key={index} data={data} />
          ))}
          {!schedule.length && (
            <div className="relative h-96 flex items-center justify-center">
              <p>Data does not exist!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { CaborDetail };
