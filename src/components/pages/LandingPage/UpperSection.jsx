



const UpperSection = () => {
  

  return (
    <>
    <header className="text-white flex flex-col z-20">

      
      
      
      <div className="flex flex-col items-center justify-center  max-w-[80vw]  mx-auto text-center font-montserrat flex-1 relative z-10 mt-[100px] px-4">
          {/* <!-- Top Left Image --> */}
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="Top Left" className="absolute -top-20 -left-7 w-16 h-22 "/>
        {/* <!-- Top Right Image --> */}
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="Top Right" className="absolute -top-20 -right-7  w-16  h-20"/>
        {/* <!-- Bottom Left Image --> */}
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Bottom Left" className="absolute bottom-40 left-2  w-16  h-22"/>
        {/* <!-- Bottom Right Image --> */}
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg" alt="Bottom Right" className="absolute bottom-40 right-2  w-16  h-20"/>

        
        <div className="flex flex-col items-center">
            <h1 className="text-white font-bold xl:text-[64px] lg:text-6xl text-4xl leading-[1.25] z-20 relative whitespace-nowrap">
              <div className="flex justify-center items-center w-full">
             <code className="gradi-theme-text">&lt;</code>
                <span
                  className="inline-block w-full animate-typing overflow-hidden border-r-4 border-white text-[30px] sm:text-[50px]"
                  onAnimationEnd={(e) => {
                    e.target.classList.remove("animate-typing");
                  }}
                >
                  {" "}
                  Code <span className="gradi-theme-text">
                    Create
                  </span> Conquer{" "}
                </span>
                <code className="gradi-theme-text">/&gt;</code>
              </div>
            </h1>
          </div>

        <p className="lg:text-xl md:text-lg font-source-sans text-white mt-[30px] w-2/3 z-20">
                      Welcome to CDC a community of passionate developers and coders.Step into a space where your curiosity drives
                      exploration and your code shapes the future.
                     </p>
        <p className="lg:text-2xl md:text-lg  text-white font-semibold text-base my-[46px] z-20">
         {"<Bytes of Brilliance Compiled/>"}
        </p>
        <form className="w-full">
          <div className="flex flex-col md:flex-row  justify-center items-center gap-[14px] md:max-w-[610px] mx-auto z-20">
            {/* <button type="submit" className=" bg-risd-blue rounded-lg lg:min-h-[56px] min-h-[50px] text-nowrap text-base px-10 font-semibold hover:scale-105 transition-all ease-in-out duration-300 z-20">
               Get Started
            </button> */}
             <button className="button-92" role="button">Get Started</button>
          </div>
        </form>
      </div>



     


      </header>
   </>
  );
};

export default UpperSection;
