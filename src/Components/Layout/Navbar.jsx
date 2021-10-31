import { Link } from "react-router-dom";
import "./Navbar.css";
import { useEffect, useState } from "react";
import useScrollListener from "./hooks/useScrollListener.jsx";

const Navbar = () => {
  const [navClassList, setNavClassList] = useState([]);
  const scroll = useScrollListener();

  // update classList of nav on scroll
  useEffect(() => {
    const _classList = [];

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      _classList.push("nav-bar--hidden");

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  return (
    <nav className={navClassList.join(" ") + " navbar fixed z-100 w-full flex justify-between bg-red-700 font-sans text-white"}>
      <div className="flex justify-center align-center content-center ml-2 md:ml-8">
        <img src={`${process.env.PUBLIC_URL}/images/Title/logo porseni traced.svg`} alt="logo porseni gan" className="transform md:scale-110" />
      </div>
      <div>
        <div className="flex justify-center gap-x-12 py-3 text-sm md:text-base lg:text-lg mr-8">
          <div>
            <Link to="/2021/porsenigama">Beranda</Link>
          </div>
          {/* <div>
            <Link to="/2021/porsenigama/faq">Faq</Link>
          </div> */}
          {/* <div>
            <Link to="/2021/porsenigama/klasemen">Klasemen</Link>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
