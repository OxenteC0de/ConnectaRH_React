import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-[#530092] text-white">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        {/* Logo Section */}
        <Link to="/home" className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo ConnectaRH" className="h-30 w-auto" />
          <p className="text-2xl font-bold">
            <span className="text-indigo-500 via-purple-500">
              Connecta
            </span>
            <span className="text-yellow-500  font-bold">RH</span>
          </p>
        </Link>

        {/* Links */}
        <div className="flex gap-8 text-lg">
          <Link
            to="/contato"
            className="hover:text-purple-200 transition-colors duration-200"
          >
            Contato
          </Link>
          <Link
            to="/produto"
            className="hover:text-purple-200 transition-colors duration-200"
          >
            Produto
          </Link>
          <Link
            to="/sobre"
            className="hover:text-purple-200 transition-colors duration-200"
          >
            Sobre
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
