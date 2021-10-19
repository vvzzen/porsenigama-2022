import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-center gap-x-12 py-6 text-medium text-xl">
        <div>
          <Link to="/">Beranda</Link>
        </div>
        <div>
          <Link to="/klasemen">Klasemen</Link>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
