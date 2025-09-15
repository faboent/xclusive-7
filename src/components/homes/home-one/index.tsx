import HeaderOne from "@/layouts/headers/HeaderOne"
import Banner from "./Banner"
import About from "./About"
import ChooseArea from "./ChooseArea"
import Service from "./Service"
import Team from "./Team"
import WorkArea from "./WorkArea"
import Blog from "./Blog"
import CtaArea from "../../common/CtaArea"
import FooterOne from "@/layouts/footers/FooterOne"
import SkillArea from "./SkillArea"
import PricingPlan from "./PricingPlan"
import Project from "./Project"
import Testimonial from "./Testimonial"
import FAQ from "./FAQ"
import MediaGallery from "./MediaGallery"
import EventCard from "./EventCard"
import ContentHub from "./ContentHub"
import TestimonialsSection from "./TestimonialsSection"
import Products from "./Products"

const HomeOne = () => {
   return (
      <>
         <HeaderOne />
         <Banner />
         <MediaGallery />
         <EventCard />
         <ContentHub />
         <Blog />
         <TestimonialsSection />
         <Products />
         {/* <About />
         <ChooseArea />
         <Service />
         <Team />
         <WorkArea />
         <Testimonial />
         <FAQ />
       
         <Project />
         <PricingPlan />
         <SkillArea />
         <CtaArea /> */}
         <FooterOne />
      </>
   )
}

export default HomeOne
