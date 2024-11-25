import { useGradientUpdater } from "../../hooks/useGradientUpdater"
import Carousel from './Glimpse'
 import HomeAbout from './HomeAbout'
import JoinOur from './JoinOur'
import OurEvents from './OurEvents'
import TestimonialsCarousel from './Testimonials'
 import UpperSection from './UpperSection'
function LandingPage() {
  return (
    <>
    
     <div className="overflow-x-hidden min-h-screen relative bg-gray-900 after:content-[''] relative z-[15]

        ">
              <div
            className="absolute  top-0 right-0 w-full h-full blur-3xl z-[0]"
            style={{
              // background: "rgb(23,20,27)",
              background:
                "radial-gradient(circle, rgba(23,20,27,1) 0%, rgba(58,94,121,1) 66%, rgba(42,58,78,1) 90%)",
            }}
          />
          <UpperSection/>
           <HomeAbout/>
          <OurEvents/>
          <TestimonialsCarousel/>
           <Carousel/>
          <JoinOur/>

        </div>
    </>
  )
}

export default LandingPage;
