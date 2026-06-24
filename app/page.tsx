import Hero from "@/components/home/Hero";
import BrandMessage from "@/components/home/BrandMessage";
import Stats from "@/components/home/Stats";
import Problem from "@/components/home/Problem";
import Solution from "@/components/home/Solution";
import Method from "@/components/home/Method";
import Services from "@/components/home/Services";
import BeforeAfter from "@/components/home/BeforeAfter";
import Voices from "@/components/home/Voices";
import FounderMessage from "@/components/home/FounderMessage";
import HomeFAQ from "@/components/home/HomeFAQ";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandMessage />
      <Stats />
      <Problem />
      <Solution />
      <Method />
      <Services />
      <BeforeAfter />
      <Voices />
      <FounderMessage />
      <HomeFAQ />
      <CTA />
    </>
  );
}
