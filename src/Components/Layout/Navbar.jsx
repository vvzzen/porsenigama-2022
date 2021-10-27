import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar flex justify-between  bg-red-700">
      <div   className="flex justify-center align-center content-center ml-8">
        <img src="images/Title/logo porseni traced.svg" alt="" className="transform md:scale-110 lg:scale-150"/>
      </div>
      <div>  
        <div className="flex justify-center gap-x-12 py-6 text-medium md:text-lg lg:text-xl mr-8">
          <div>
            <Link to="/">Beranda</Link>
          </div>
          <div>
            <Link to="/klasemen">Klasemen</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
