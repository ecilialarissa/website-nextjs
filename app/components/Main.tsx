/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import Image from "next/image";

const Main = () => {
    return(
<>
{/*  Nossos Serviços  */}

<section className="py-10" id="services">
    <div className="container mx-auto px-4 py-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-20 text-center"> Nosso Serviços </h2>

        <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-8 ">
          
          {/*Serviço 1 */}
        <div className="flex flex-wrap items-center justify-between p-0">
         <div className=" w-[95%] bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 hover:shadow-lg">
            <Image src="/servicos1.jpg"  
            className=" h-64 object-cover "
            alt="img"
            width={950}
            height={600} 
            quality={70}
            />
            
            <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Lorem ipsum </h3>
                <p className="text-gray-700 text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            </div> 
            </div>
        {/*FIM do Serviço 1 */}

          {/*Serviço 2 */}
          <div className=" w-[95%] bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 hover:shadow-lg">
            <Image src="/servicos2.jpg"  
            className=" h-64 object-cover "
            alt="img"
            width={950}
            height={600} 
            quality={70}
            />
            
            <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Lorem ipsum </h3>
                <p className="text-gray-700 text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            </div> 
        {/*FIM do Serviço 2 */}

          {/*Serviço 3 */}
          <div className=" w-[95%] bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 hover:shadow-lg">
            <Image src="/servicos3.jpg"  
            className=" h-64 object-cover "
            alt="img"
            width={950}
            height={600} 
            quality={70}
            />
            
            <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Lorem ipsum </h3>
                <p className="text-gray-700 text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            </div> 
        {/*FIM do Serviço 3 */}

          {/*Serviço 4 */}
          <div className=" w-[95%] bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 hover:shadow-lg">
            <Image src="/servicos4.jpg"  
            className=" h-64 object-cover "
            alt="img"
            width={950}
            height={600} 
            quality={70}
            />
            
            <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Lorem ipsum </h3>
                <p className="text-gray-700 text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            </div> 
        {/*FIM do Serviço 4 */}

          {/*Serviço 5 


          <div className=" w-[95%] bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 hover:shadow-lg">
            <Image src="/servicos1.jpg"  
            className=" h-64 object-cover "
            alt="img"
            width={950}
            height={600} 
            quality={70}
            />
            
            <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Lorem ipsum </h3>
                <p className="text-gray-700 text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            </div> 
        {/*FIM do Serviço 5 */}

          {/*Serviço 6 
          <div className=" w-[95%] bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 hover:shadow-lg">
            <Image src="/servicos1.jpg"  
            className=" h-64 object-cover "
            alt="img"
            width={950}
            height={600} 
            quality={70}
            />
            
            <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Lorem ipsum </h3>
                <p className="text-gray-700 text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            </div> 
        {/*FIM do Serviço 6 */}

            {/* Btn2-Marque um Horário */}


        </div>
    </div>

</section>


</> 
);
};

export default Main; 