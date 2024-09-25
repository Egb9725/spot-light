import React from "react"; 
import Logo from "../../assets/logo.png"; 
import { IoMdSearch } from "react-icons/io"; 
import { RiShoppingBag4Line } from "react-icons/ri"; 


interface NavbarProps {
  handleOrderPopup: () => void; 
}

// Définition du composant Navbar
const Navbar: React.FC<NavbarProps> = ({ handleOrderPopup }) => {
  return (
    <div className=" bg-white  dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          
          {/* Logo */}
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-15 h-12" />
            </a>
          </div>

          {/* Barre de recherche */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input type="text" className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 "/>
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* Bouton de commande */}
            <button
              onClick={handleOrderPopup} // Appel de la fonction handleOrderPopup lors du clic
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-black py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <RiShoppingBag4Line className="text-xl text-black drop-shadow-sm cursor-pointer" />
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar; 