import { motion } from "framer-motion";
import { useGradientUpdater } from "../../hooks/useGradientUpdater"
const OurEvents = () => {
  return (
    <section className="lg:pb-[65px] pb-10 text-white relative px-4 h-auto mx-auto z-20
    ">
      <div className="max-w-[1200px] mx-auto z-20">
      <h3 className="text-center text-white font-bold xl:text-[50px] lg:text-4xl text-3xl leading-[1.25] z-20  lg:mb-6">
          Our Events
        </h3>
        <div className="grid xxl:gap-y-[30px] xl:gap-y-6 gap-y-4 items-start lg:mt-[55px] mt-9 ">
              <motion.div
               className=" rounded-3xl px-[3px]   overflow-hidden"
               initial={{
                 opacity: 0,
                 y: 80,
               }}
               whileInView={{
                 opacity: 1,
                 y: 0,
               }}
               transition={{
                 duration: 0.5,
                 ease: "easeInOut",
               }}
               whileHover={{
                 scale: 1.02,
               }}
              >
                 <div className=" max-w-[1200px] mx-auto px-6 py-2  text-white rounded-lg shadow-lg flex items-center space-x-4 lg:mt-[40px] mt-6 bg-[rgba(255,255,255,0.1)]
                  ">
      <div className="flex-shrink-0">
        <img
          className="w-28 h-36 rounded-lg"
          src="https://files.oaiusercontent.com/file-MEVTX4x7v9ifQHYPiTABZAx2?se=2024-11-01T07%3A28%3A19Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D3228b06d-93ce-41fe-945b-7d81a3548f7a.webp&sig=2SjBBHtqveBY3argt7oQ004bEaIDGu1dK2uYqxjrhtQ%3D" // replace with your image URL
          alt="Syntax Siege Logo"
        />
      </div>
      <div>
        <h2 className="md:text-3xl sm:text-xl xs:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r">
        <span className="gradi-event-text">SYNTAX SIEGE</span>
        </h2>
        <p className="mt-1 text-white  md:text-xl xs:text-sm xxs:text-xs">
          The Coders & Developers Club MMMUT fosters a strong coding culture by empowering students with continuous learning, tech awareness, and active contest involvement. Collaborating with faculty and alumni, we equip members with industry skills.
        </p>
      </div>
    </div>
    </motion.div>    

    

    <motion.div
             className=" rounded-3xl px-[3px]   overflow-hidden"
             initial={{
               opacity: 0,
               y: 80,
             }}
             whileInView={{
               opacity: 1,
               y: 0,
             }}
             transition={{
               duration: 0.5,
               ease: "easeInOut",
             }}
             whileHover={{
               scale: 1.02,
             }}
              >
    <div className=" bg-[rgba(255,255,255,0.1)] lg:mt-[40px] mt-6   max-w-[1200px] mx-auto px-6 py-2  text-white rounded-lg shadow-lg flex items-center space-x-4 z-50">
     
      <div>
        <h2 className=" flex flex-row-reverse md:text-3xl sm:text-xl xs:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r">
          <span className="gradi-event-text">CODE CASCADE</span>
        </h2>
        <p className="mt-1 text-white md:text-xl xs:text-sm xxs:text-xs">
          The Coders & Developers Club MMMUT fosters a strong coding culture by empowering students with continuous learning, tech awareness, and active contest involvement. Collaborating with faculty and alumni, we equip members with industry skills.
        </p>
      </div>
      <div className="flex-shrink-0">
        <img
          className="w-28 h-36 rounded-lg"
          src="https://files.oaiusercontent.com/file-MEVTX4x7v9ifQHYPiTABZAx2?se=2024-11-01T07%3A28%3A19Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D3228b06d-93ce-41fe-945b-7d81a3548f7a.webp&sig=2SjBBHtqveBY3argt7oQ004bEaIDGu1dK2uYqxjrhtQ%3D" // replace with your image URL
          alt="Syntax Siege Logo"
        />
      </div>
    </div>
    </motion.div>
    
     
     
    <motion.div
                className=" rounded-3xl px-[3px]   overflow-hidden"
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.02,
                }}
              >
     <div className="bg-[rgba(255,255,255,0.1)] lg:mt-[40px] mt-6  max-w-[1200px] mx-auto px-6 py-2  text-white rounded-lg shadow-lg flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img
          className="w-28 h-36 rounded-lg"
          src="https://files.oaiusercontent.com/file-MEVTX4x7v9ifQHYPiTABZAx2?se=2024-11-01T07%3A28%3A19Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D3228b06d-93ce-41fe-945b-7d81a3548f7a.webp&sig=2SjBBHtqveBY3argt7oQ004bEaIDGu1dK2uYqxjrhtQ%3D" // replace with your image URL
          alt="Syntax Siege Logo"
        />
      </div>
      <div>
        <h2 className="md:text-3xl sm:text-xl xs:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r">
        <span className="gradi-event-text">GAME OF CODES</span>
        </h2>
        <p className="mt-1  text-white  md:text-xl xs:text-sm xxs:text-xs">
          The Coders & Developers Club MMMUT fosters a strong coding culture by empowering students with continuous learning, tech awareness, and active contest involvement. Collaborating with faculty and alumni, we equip members with industry skills.
        </p>
      </div>
    </div>
    </motion.div>
    

    <motion.div
                className=" rounded-3xl px-[3px]  overflow-hidden "
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.02,
                }}
              >
     <div className="lg:mt-[40px] mt-6   bg-[rgba(255,255,255,0.1)]  max-w-[1200px] mx-auto px-6 py-2 text-white rounded-lg shadow-lg flex items-center space-x-4">
     
      <div>
        <h2 className=" flex flex-row-reverse md:text-3xl sm:text-xl xs:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ">
        <span className="gradi-event-text">GENESIS</span>
        </h2>
        <p className="mt-1  text-white  md:text-xl xs:text-sm xxs:text-xs">
          The Coders & Developers Club MMMUT fosters a strong coding culture by empowering students with continuous learning, tech awareness, and active contest involvement. Collaborating with faculty and alumni, we equip members with industry skills.
        </p>
      </div>
      <div className="flex-shrink-0">
        <img
          className="w-28 h-36 rounded-lg"
          src="https://files.oaiusercontent.com/file-MEVTX4x7v9ifQHYPiTABZAx2?se=2024-11-01T07%3A28%3A19Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D3228b06d-93ce-41fe-945b-7d81a3548f7a.webp&sig=2SjBBHtqveBY3argt7oQ004bEaIDGu1dK2uYqxjrhtQ%3D" // replace with your image URL
          alt="Syntax Siege Logo"
        />
      </div>
    </div>
              </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurEvents;
