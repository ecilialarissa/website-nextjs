/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

"use client";
import React, {useState} from "react";
import Image from "next/image";


const Header:React.FC = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

 return(

  <>
  
  <nav className="md:flex flex-wrap items-center justify-between p-3 bg-[#e8e8e5] grid-cols-2 sm:grid ">
  <Image
        src="/logo-03.png"
        className="mr-2"
        alt="LOGO"
        width={150}  
        height={100} 
    />
    <div className="flex md:hidden justify-end w-full  relative">
        <button id="hamburger" onClick={toggleMenu} >
          <img 
          className={`toggle block ${menuOpen ? " hidden " : " block "  }`}
          src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" 
          width="40" 
          height="40"
          alt="Menu" 
        />
          <img 
          className={`toggle block ${menuOpen ? "block" : "hidden"
            }`   } 
          src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" 
          width="40" 
          height="40"
          alt="close"
          />
        </button>
    </div>
    <div 
className= {`${
    menuOpen ? "block" : "hidden"
    } w-full md:w-auto md:flex text-center text-bold mt-5 md:border-none  `}>
        <a 
        href="#home" 
        className="block md:inline-block hover:text-[#c09858] px-3 py-3 md:border-none md:text-center ">Início
        </a>
        <a 
        href="#services" 
        className="block md:inline-block hover:text-[#c09858] px-3 py-3 md:border-none md:text-center">Serviços
        </a>
        <a 
        href="#contact" 
        className="block md:inline-block hover:text-[#c09858] px-3 py-3 md:border-none md:text-center">Contato
        </a>
        <a 
        href="#gallery" 
        className="block md:inline-block hover:text-[#c09858] px-3 py-3 md:border-none md:text-center">Galeria
        </a>
        
    </div>

    <div className="toggle w-full text-end hidden md:flex md:w-auto px-2 py-2 md:rounded ">
        <a href="https://wa.me/550285999069335">
            <div className=" justify-end ">
                <div className="flex items-center h-10 w-30 rounded-md bg-[#c8a876] hover:bg-[#c5a167] text-white font-medium p-2">
            
                <img className="" src="whatsapp.svg" width="20" height="20" />

                    <p className="flex ml-2" >Fale conosco</p>
                </div>
            </div>
        </a>
    </div>

</nav>

  
  
  </>  



    );
};



export default Header;