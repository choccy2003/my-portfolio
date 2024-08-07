"use client"
import Navbar from "@/components/Navbar";
import Homesection from "./homesection";
import AboutSection from "./aboutsection";
import ProjectSection from "./projectsection";
import ContactSection from "./contactsection";
import { useRef } from "react";
const Home = ()=>{
const aboutSectionRef = useRef<HTMLDivElement>(null)
const projectSectionRef = useRef<HTMLDivElement>(null)
const contactSectionRef = useRef<HTMLDivElement>(null)
return (
      <>
        
         <Navbar aboutSectionRef={aboutSectionRef} projectSectionRef={projectSectionRef} contactSectionRef={contactSectionRef} /> 

        <Homesection/>

        <section ref={aboutSectionRef}>
          <AboutSection/>
        </section>
          
        <section ref={projectSectionRef}>
          <ProjectSection />
        </section>
          
        <section  ref={contactSectionRef}>
          <ContactSection />
        </section>
     
      
      </>
      
    );

  }


  export default Home