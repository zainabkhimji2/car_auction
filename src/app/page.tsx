import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import FeaturedAuctions from "@/components/FeaturedAuctions";
import PricingPlans from "@/components/pricinPlan";
import Testimonials from "@/components/testimonalsection";
import HowItWorks from "@/components/worksection";
import Statistics from "@/components/statics";
import CtaFooter from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedAuctions />
      <PricingPlans/>
      <Testimonials/>
      <HowItWorks/>
      <Statistics/>
      <CtaFooter/>
    </>
  );
}
