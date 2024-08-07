"use client";

import Navbar from "@/components/Navbar";
import Homesection from "./homesection";
import AboutSection from "./aboutsection";
import ProjectSection from "./projectsection";
import ContactSection from "./contactsection";
import { useRef, useEffect,useState } from "react";

const Home = () => {
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const projectSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);
  const homeSectionRef = useRef<HTMLDivElement>(null);
  const navbarSectionRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if(homeSectionRef.current){
      homeSectionRef.current.classList.add('!opacity-100')
    }
    if(navbarSectionRef.current){
      navbarSectionRef.current.classList.add('!opacity-100')
    }
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
           
            if(entry.target.id=="aboutSection" && aboutSectionRef.current){
              aboutSectionRef.current.classList.add('!opacity-100')
            }
            else if(entry.target.id=="projectSection" && projectSectionRef.current){
              projectSectionRef.current.classList.add('!opacity-100')
            }
            else if(entry.target.id=="contactSection" && contactSectionRef.current){
              contactSectionRef.current.classList.add('!opacity-100')
            }
           
          }
        });
      }, {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin around the root
        threshold: 0.3 // Trigger as soon as any part of the component is visible
      });

      const sections = [aboutSectionRef, projectSectionRef, contactSectionRef];

      sections.forEach(section => {
        if (section.current) {
          observer.observe(section.current);
          
        }
      });

      return () => {
        sections.forEach(section => {
          if (section.current) {
            observer.unobserve(section.current);
           
          }
        });
      };
    } else {
      console.error('IntersectionObserver is not supported in this environment.');
    }
  }, []);

  return (
    <>
    <div className="opacity-0 transition-all duration-1000 sticky top-0 z-40" ref={navbarSectionRef}>
      <Navbar aboutSectionRef={aboutSectionRef} projectSectionRef={projectSectionRef} contactSectionRef={contactSectionRef} />
    </div>
      
      <div className="opacity-0 transition-all duration-1000" ref={homeSectionRef}>
          <Homesection projectSectionRef={projectSectionRef} />
      </div>
    

      
      <section className=" opacity-0 transition-all duration-1000" id="aboutSection" ref={aboutSectionRef}>
        <AboutSection />
      </section>

      <section className=" opacity-0 transition-all duration-1000" id="projectSection" ref={projectSectionRef}>
        <ProjectSection />
      </section>

      <section className=" opacity-0 transition-all duration-1000" id="contactSection" ref={contactSectionRef}>
        <ContactSection />
      </section>
    </>
  );
};

export default Home;
