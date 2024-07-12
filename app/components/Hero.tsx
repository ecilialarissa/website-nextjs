/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";



const Hero = () => {
    return(
    <>
<div className="relative w-full h-[screen] " id="home" > {/* Hero da Home  - Incluindo Botao Contact */}
    <div className="absolute inset-0 opacity-70  w-full ">
        <img src="img1.jpg" 
        alt="Background Hero Image" 
        className="object-cover object-center w-full h-full"
        
    />

    </div>
    <div className="relative inset-9 flex flex-col justify-between
                   ">
        <div className="
                        xl:w-4/6  ">
        <Image
        src="/logo-hero.png"
        className=" mb-20 "
        alt="LOGO"
        width={350}  
        height={110}
        quality={90}
    />
        </div>
        
    </div>
</div>


        










        </>
    );
};

export default Hero; 