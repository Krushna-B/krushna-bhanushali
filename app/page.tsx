
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import { Providers } from "./components/Providers";
import AboutMe from "./components/AboutMe";
import MyWork from "./components/MyWork";
import SkillsAccordion   from "./components/SkillsAccordian";
// import TechStackGrid     from "./components/TechStackGrid";
import Footer from "./components/Footer";
import Contact from "./components/Contact";



export default function Home() {
  return (
  <>
    <Providers>
      <NavBar/>
    </Providers>

    <HeroSection/>
    
    <AboutMe/>

    <MyWork/>
    <SkillsAccordion/>
{/* 
    <TechStackGrid/> */}
    <Contact/>
    <Footer/>
  </>
  );
}
