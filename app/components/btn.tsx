const Btn = () => {
    return(
        <>
       { /* colorPallet: 
            Pastel Brown: bg-[#c8a876]
       */}
        <div className=" flex flex-1 place-content-center py-10">
       <div 
        id="contact"
        className=" w-1/2 h-12 items-center justify-center 
        bg-[#c8a876] text-white font-medium rounded-full
         hover:bg-[#c09858]  transition duration-200 sm:mt-40 md:w-1/3 place-content-center">

        <a 
        href="https://wa.me/550285999069335"
        className=" rounded font-bold text-white text-center items-center text-xl  "
        >
        <h2>
         Marcar um horário
         </h2>
         </a>
         </div>
         </div>
        </>
    );
};

export default Btn;