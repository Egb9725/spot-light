import React, { useState } from "react";
import Logo from "../../assets/Logo-2Vxz3k_0.png";
import { IoMdSearch } from "react-icons/io";
import { RiShoppingBag4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai"; // Import the close icon

interface NavbarProps {
  handleOrderPopup: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ handleOrderPopup }) => {
  // State to toggle search overlay visibility
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Function to handle search overlay toggle
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="bg-white dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <div>
            <a href="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-15 h-12" />
            </a>
          </div>

          {/* Search Button */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <button
                onClick={toggleSearch}
                className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-black py-1 px-4 rounded-full flex items-center gap-3 group"
              >
                <IoMdSearch className="text-gray-900 group-hover:text-primary" />
              </button>
            </div>

            {/* Order Button */}
            <button
              onClick={handleOrderPopup}
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

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-95 z-50 flex items-center justify-center">
          <div className="container mx-auto px-4 flex flex-col items-center">
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search..."
              className="w-full max-w-xl py-3 px-4 border-b border-gray-400 text-xl focus:outline-none text-center"
            />

            {/* Close Button */}
            <button
              onClick={toggleSearch}
              className="absolute top-5 right-5 text-gray-500 hover:text-gray-700 text-2xl"
            >
              <AiOutlineClose />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
