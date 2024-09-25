import React from "react";
import footerLogo from "../../assets/footer.png"; // Assurez-vous d'utiliser votre image pour le logo
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

// Composant Footer
const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black">
      <div className="container flex flex-col items-center py-8">
        
        {/* Logo de la marque */}
        <div className="flex justify-center items-center mb-4">
          <img src={footerLogo} alt="Logo" className="w-12 h-12" /> {/* Taille ajustée pour correspondre à l'image */}
        </div>

        {/* Texte inspirant */}
        <div className="text-center mb-6">
          <h2 className="text-lg font-bold">A brand that strives to inspire and push creative culture forward.</h2>
          <p className="mt-2 max-w-2xl mx-auto">
            We approach our work with the mentality that every product made is a learning experience to improve our craft. 
            We are practitioners and purveyors of creative culture and are inspired by its various forms from art, design, 
            fashion, music, film, food, and more.
          </p>
        </div>

        {/* Icônes des réseaux sociaux */}
        <div className="flex justify-center items-center gap-4 mb-6">
         <a href="#" aria-label="Facebook">
            <FaFacebook className="text-3xl" />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram className="text-3xl" />
          </a>
          
          <a href="#" aria-label="YouTube">
            <FaYoutube className="text-3xl" />
          </a>
          <a href="#" aria-label="TikTok">
            <FaTiktok className="text-3xl" />
          </a>
          <a href="#" aria-label="Twitter">
            <FaSquareXTwitter className="text-3xl" />
          </a>
        </div>
      </div>
      <div>
            {/* Sélecteur de pays/région */}
            <div className="mt-6">
                <label htmlFor="region" className="block font-medium">Country/region</label>
                <select id="region" className="mt-2 px-4 py-2 border rounded-lg text-black bg-white" >
                    <option>United States (CAD $)</option>
                    <option>Canada</option>
                    <option>France</option>
                </select>

                {/* Icônes des moyens de paiement */}
                <div className="mt-6 flex justify-center md:justify-end w-full">
                    <div className="flex gap-4">
                        <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR_FrTaaaGEk9eULQpb355SxtAFizG5jleBqp_1q8j2dgMxqfHT" alt="Visa" className="h-5" />
                        <img src="https://res.cloudinary.com/doq50mquo/image/upload/v1727261904/bmys1hrfdthp2sxnpu63.svg" alt="MasterCard" className="h-5" />
                        <img src="https://res.cloudinary.com/doq50mquo/image/upload/v1727262022/l1dxptodzxigvv5tbecb.jpg" alt="Amex" className="h-5" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-5" />
                    </div>
                </div>

                {/* Texte de copyright */}
                <div className="mt-6  text-gray-500">
                    © 2024, theme-spotlight-demo Powered by Shopify
                </div>
            </div>

        </div>
    </footer>
  );
};

export default Footer;
