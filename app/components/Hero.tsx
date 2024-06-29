/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";



const Hero = () => {
    return(
    <>
<div className="relative w-full h-[320px]  " id="home" > {/* Hero da Home  - Incluindo Botao Contact */}
    <div className="absolute inset-0 opacity-70">
        <img src="img1.jpg" 
        alt="Background Hero Image" 
        className="object-cover object-center w-full h-full"
        
    />

    </div>
    <div className="relative inset-9 flex flex-col items-center justify-between
                   ">
        <div className="md:50% sm:content-center 
                        xl:w-4/6 w-3/3 ">
        <Image
        src="/logo-hero.png"
        className=" mb-20"
        alt="LOGO"
        width={350}  
        height={110}
        quality={90}
    />
        <div className=" hover:scale-105 md:ml-6 sm:ml-24">
            <a href="https://wa.me/550285999069335"
            className=" 
             sm: m-0
            px-4 py-3 bg-[#c8a876] text-white font-medium rounded-full
             hover:bg-[#c09858]  transition duration-200  "
            > Marcar um horário 
            </a>
        </div>
        
        </div>
    </div>
</div>


        










        </>
    );
};

export default Hero; 