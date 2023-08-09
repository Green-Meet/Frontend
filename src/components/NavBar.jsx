import { React, useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
// isAuthenticated context
import { AuthContext } from "../App";
// toastify
import { toast } from "react-toastify";

// Icons
import { FaRegUser } from "react-icons/fa";

function NavBar() {
  // context isAuthenticat
  const context = useContext(AuthContext);
  // state of the menu
  const [menuOpen, setMenuOpen] = useState(false);
  // logout user if he clicked on 'Deconnexion'
  const handleClick = (cl) => {
    if (cl.name !== "Déconnexion") {
      // close menu
      setMenuOpen(false);
      return;
    }
    fetch("logout")
      .then((res) => {
        context.setIsAuthenticated(false);
        toast.success("Tu es déconnecté");
      })
      .catch((err) => toast.error(err));
  };

  const pages = [
    { name: "Accueil", href: "/" },
    { name: "Les actions", href: "/actions" },
    { name: "Créer mon action", href: "/addAction" },
  ];
  const connexionLinks = context.isAuthenticated
    ? [
        { name: "Déconnexion", href: "" },
        {
          name: (
            <div className="flex flex-row">
              <div className="mr-2 text-xl">{<FaRegUser />}</div>

              {context.userInfo.last_name}
            </div>
          ),
          href: "/profile",
        },
      ]
    : [
        { name: "Connexion", href: "/login" },
        { name: "S'enregistrer", href: "/register" },
      ];
  const navLinks = pages.map((page, index) => {
    return (
      <Link
        key={index}
        className="text-white font-semibold hover:text-gmlime-light ease-in-out transform translate hover:transition-all duration-500"
        to={page.href}
        onClick={() => handleClick(page)}
      >
        {page.name}
      </Link>
    );
  });
  const navConnexion = connexionLinks.map((cl, index) => (
    <Link
      key={index}
      className="text-white font-semibold hover:text-gmlime-light ease-in-out transform translate hover:transition-all duration-500"
      to={cl.href}
      onClick={() => handleClick(cl)}
    >
      {cl.name}
    </Link>
  ));

  return (
    <div className="sticky z-10 top-0 bg-gray-800">
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navLinks={navLinks}
        navConnexion={navConnexion}
      />
      {menuOpen && (
        <MobileMenu>
          <div className="flex flex-col space-y-2">
            <a
              className="text-white font-semibold hover:text-gmlime-light"
              href="#contenu"
              onClick={() => setMenuOpen(false)}
            >
              Aller au contenu
            </a>
            {navLinks}
          </div>
          <div className="flex flex-col space-y-2 py-5">{navConnexion}</div>
        </MobileMenu>
      )}
    </div>
  );
}

const Navbar = ({ menuOpen, setMenuOpen, navLinks, navConnexion }) => (
  <div className="flex items-center justify-between h-16">
    <div className="flex items-center">
      <Link to="/" onClick={() => setMenuOpen(false)}>
        <img src="../../img/logo4.jpeg" className="h-16 w-28 m-0 p-0" />
      </Link>
    </div>
    <nav className="hidden lg:block mr-10">
      <div className="flex flex-row space-x-32 text-white">
        <div className="space-x-10">
          <a
            className="text-white font-semibold hover:text-gmlime-light ease-in-out transform translate hover:transition-all duration-500"
            href="#contenu"
          >
            Aller au contenu
          </a>

          {navLinks}
        </div>
        <div className="space-x-7 flex flex-row">{navConnexion}</div>
      </div>
    </nav>
    <button
      type="button"
      aria-label="Toggle mobile menu"
      onClick={() => setMenuOpen(!menuOpen)}
      className="rounded lg:hidden focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50"
    >
      <MenuAlt4Svg menuOpen={menuOpen} />
    </button>
  </div>
);

const MobileMenu = ({ children }) => (
  <nav className="p-4 flex flex-col space-y-3 lg:hidden">{children}</nav>
);

const MenuAlt4Svg = ({ menuOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={` text-white mr-10 transition duration-100 ease h-8 w-8 ${
      menuOpen ? "transform rotate-90" : ""
    }`}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
      clipRule="evenodd"
    />
  </svg>
);

export default NavBar;
