import { useState, useEffect } from "react";
import { db } from "../data/db";
const assetsCaborDetail = `${process.env.PUBLIC_URL}/images/CaborDetail`;

const Card = (props) => {
  const LogoSupporter = (props) => {
    const logo = props.logo ? props.logo : "undefined";
    return (
      <div className="hidden sm:block w-14 h-14 lg:w-20 lg:h-20 xl:w-28 xl:h-28 rounded-full">
        <img
          className="w-full h-full rounded-full"
          src={`${assetsCaborDetail}/supporter/${logo}.png`}
          alt=""
        />
      </div>
    );
  };

  const Player = (props) => {
    return (
      <div className="w-full flex flex-col justify-center items-center">
        <p className="text-xl lg:text-2xl lg:text-3xl xl:text-5xl text-center">
          {props.player}
        </p>
        <p
          className={`${
            !props.player
              ? "text-xl lg:text-2xl lg:text-3xl xl:text-5xl text-center"
              : "lg-text-xl xl:text-2xl"
          }`}
        >
          {props.faculty}
        </p>
      </div>
    );
  };

  return (
    <div className="my-7 sm:my-10 lg:my-20">
      <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-t-3xl">
        <div className="flex flex-col sm:flex-row items-center justify-between px-8 py-4 lg:text-xl xl:text-2xl">
          <p className="py-2">{props.data.date}</p>
          {props.data.isFinished && (
            <p className="px-10 py-2 rounded-xl bg-birdong text-white">
              Selesai
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center px-2 sm:px-8 py-4 sm:py-12 mt-1 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-b-3xl">
        <LogoSupporter logo={props.data.logo1} />
        <div className="flex flex-col items-center w-full sm:flex-1 mx-3 lg:mx-8 xl:space-y-3">
          <div className="flex flex-col sm:flex-row w-full mb-5 sm:mb-0 justify-center items-center">
            <Player player={props.data.player1} faculty={props.data.faculty1} />
            <p className="mx-8 my-3 text-xl lg:text-xl xl:text-3xl">
              VS
            </p>
            <Player player={props.data.player2} faculty={props.data.faculty2} />
          </div>
          <p className="opacity-50 lg:text-xl xl:text-2xl uppercase">
            {props.data.phase}
          </p>
          <p className="lg-text-xl xl:text-2xl uppercase">{props.data.venue}</p>
          {props.data.isFinished && props.data.winner && (
            <p className="lg-text-xl xl:text-2xl">
              Pemenang: {props.data.winner}
            </p>
          )}
        </div>
        <LogoSupporter logo={props.data.logo2} />
      </div>
    </div>
  );
};

const CaborDetail = (props) => {
  const id = props.match.params.id;
  const [caborHeader, setCaborHeader] = useState({});
  const [caborData, setCaborData] = useState([]);
  const [showCategory, setShowCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setCaborHeader((await db.collection("dataCabor").doc(id).get()).data());
      await db
        .collection("dataCabor")
        .doc(id)
        .collection("schedule")
        .get()
        .then((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => doc.data());
          setCaborData(data);
          if (data[0]) {
            let category = data[0].category;
            if (!selectedCategory) {
              setSelectedCategory(data[0].category);
            } else {
              category = selectedCategory;
            }
            setSchedule(
              data.filter((item) => item.category === category)[0].data
            );
          }
        });
    };
    getData();
  }, [id, selectedCategory]);

  const showCategoryHandler = () => {
    setShowCategory((prevState) => !prevState);
  };

  const selectCategoryHandler = (category) => {
    setSelectedCategory(category);
    setShowCategory(false);
  };

  return (
    <div className="pt-14 lg:pt-0 relative bg-merah min-w-full px-5 overflow-hidden">
      <div className="flex items-center h-full lg:min-h-screen">
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
            <h1 className="md:mb-2 lg:mb-4 xl:mb-8 font-bold sm:text-2xl md:text-4xl lg:text-5xl uppercase">
              {id}
            </h1>
            <p className="hidden lg:block lg:text-xl">
              {caborHeader.description}
            </p>
          </div>
        </div>
        <img
          className="relative ml-auto w-1/2"
          src={`${assetsCaborDetail}/cover-${id}.png`}
          alt=""
        />
      </div>
      <img
        className="z-0 absolute w-3/4 right-0"
        src={`${assetsCaborDetail}/rumah.png`}
        alt=""
      />
      <div className="flex flex-col justify-center md:px-20 pt-8">
        {selectedCategory && (
          <div
            className={`z-10 relative bg-white sm:min-w-max sm:w-1/3 ${
              showCategory
                ? "rounded-t-3xl"
                : "bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-3xl"
            } py-3 lg:text-xl xl:text-2xl`}
            style={{
              boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div
              className="flex justify-between cursor-pointer"
              onClick={showCategoryHandler}
            >
              <p className="px-6 py-3 opacity-50">{selectedCategory}</p>
              <div className="flex justify-center px-4 border-l border-black border-opacity-60">
                <img
                  className={`py-3 ${
                    showCategory ? "transition transform rotate-180" : ""
                  }`}
                  style={{ width: "60%" }}
                  src={`${assetsCaborDetail}/dropdown.svg`}
                  alt=""
                />
              </div>
            </div>
            {showCategory && (
              <div
                className="absolute w-full bg-white rounded-b-3xl mt-3 pb-3"
                style={{ boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)" }}
              >
                {caborData.length &&
                  caborData.map((data) => (
                    <p
                      key={data.category}
                      className="px-6 py-3 opacity-50 cursor-pointer"
                      onClick={() => selectCategoryHandler(data.category)}
                    >
                      {data.category}
                    </p>
                  ))}
              </div>
            )}
          </div>
        )}
        <div className="self-center w-full font-sansPro">
          {schedule.map((data, index) => (
            <Card key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { CaborDetail };
