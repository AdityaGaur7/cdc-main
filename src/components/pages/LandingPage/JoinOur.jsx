import { useGradientUpdater } from "../../hooks/useGradientUpdater";
import { motion } from "framer-motion";


 const UPLIFT_DELIVERY = [
  {
    id: "up_1",
    icon: "./socialicons/instagram.png",
    title: "1.2K+",
    description:
    "Instagram",
    link:"https://www.instagram.com/cdc.mmmut/",
  },
  {
    id: "up_2",
    icon: "https://www.vhv.rs/file/max/9/98181_linkedin-transparent-png.png",
    title: "2K+",
    description:
      "LinkedIn",
      link:"https://www.linkedin.com/company/codechef-mmmut-chapter",
  },
  {
    id: "up_3",
    icon: "https://static.vecteezy.com/system/resources/previews/017/221/781/non_2x/telegram-logo-transparent-free-png.png",
    title: "1.1K+",
    description:
      "Telegram",
      link:"https://www.instagram.com/cdc.mmmut/",
  },
  {
    id: "up_4",
    icon: "https://www.pngkit.com/png/full/2-21145_youtube-logo-transparent-png-pictures-transparent-background-youtube.png",
    title: "250+",
    description:
    "Youtube",
    link:"https://www.youtube.com/@cdcmmmut",
  },
];




const JoinOur = () => {
  const gradientRefs = useGradientUpdater();

  return (
    <section className="lg:py-[65px] py-10 px-4 mx-auto h-auto  z-20 relative">
      <div className="max-w-[1200px] mx-auto">
        <h3 className="text-center text-white font-bold xl:text-[50px] lg:text-4xl text-3xl leading-[1.25] z-20 ">
          Join Our community
        </h3>
        <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 xs:grid-cols-2 xxs:grid-cols-2 xxl:gap-10 xl:gap-8 lg:gap-6 gap-4 lg:mt-10 md:mt-8 mt-6 mx-auto">
          {UPLIFT_DELIVERY?.map(
            ({ id, title, icon, description ,link}, index) => {
              return (
                <motion.div
                  key={id}
                  className={` bg-[linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(13,157,188,1) 0%, rgba(12,13,235,1) 34%, rgba(16,11,41,1) 73%)] rounded-[45px] p-[3px]  max-w-56
                 `}
                  ref={(el) => (gradientRefs.current[index] = el)}
                  initial={{
                    opacity: 0,
                    y: 30,
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
                    scale: 1.05,
                  }}
                >
                   <a href={link}>
                  <div className={`rounded-[45px] bg-jet flex flex-col items-center h-full lg:p-4 md:p-3 p-2 
                  `}>
                   
                    <h4 className=" md:text-6xl  text-white font-montserrat mt-5 mb-4    font-bold xl:text-[64px]  text-4xl">
                      {title}
                    </h4>
                    <div className="flex flex-row justify-center items-center gap-1.5" >
                    <p className="lg:text-base text-lg font-source-sans font-bold text-white">
                      {description}
                    </p>
                     <img className="w-9" src={icon} alt="" />
                  </div>
                  </div>
                  </a>
                </motion.div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default JoinOur;