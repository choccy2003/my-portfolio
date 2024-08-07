"use client"
import Logo from "../../public/logo.svg"
import Image from 'next/image';
import "../app/globals.css"
import { RefObject } from "react";

interface Props {

  aboutSectionRef:RefObject<HTMLDivElement>,
  projectSectionRef:RefObject<HTMLDivElement>,
  contactSectionRef:RefObject<HTMLDivElement>,

}



const Navbar:React.FC<Props> = (props)=>{
  const sectionScrollEvent = (x:RefObject<HTMLDivElement>)=>{
    if (x.current) {
      const element = x.current;
      const offset = 100; // Adjust this value to set your desired offset
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }}

    return (
          
     
           <div style={{backgroundColor:"#020c1b",fontSize:"20px"}} className="flex gap-10 h-14 px-4 pt-1.5 pb-1 items-center font-medium font-mono cursor-pointer-all sticky top-0 max-lg:!text-base max-lg:!font-base max-lg:!gap-5 max-sm:!text-sm max-sm:!gap-3 max-xs:!gap-2.5 max-xs:!text-xs max-xs:!h-12 z-50 select-none" >
            {/* <div className="w-12 h-12 min-h-12 min-w-12 grid place-items-center">
                    <Image src={Logo} alt="logo" /> 
                
            </div> */}
            <div onClick={()=>{sectionScrollEvent(props.aboutSectionRef)}} className="ml-auto element">
            <span className="text-lg text-custom-color font-medium max-lg:text-sm max-xs:hidden">01.</span> About
            </div>
            <div onClick={()=>{sectionScrollEvent(props.projectSectionRef)}} className="element">
            <span className="text-lg text-custom-color font-medium max-lg:text-sm max-xs:hidden">02.</span> Projects
            </div>
            <div onClick={()=>{sectionScrollEvent(props.contactSectionRef)}} className="element" >
            <span className="text-lg text-custom-color font-medium max-lg:text-sm max-xs:hidden">03.</span> Contact
            </div>
            <div className="relative mb-1.5">
            <div className="rounded-md px-2 text-custom-color transition-all duration-500 hover:-translate-x-0.5 hover:-translate-y-0.5 relative z-10 border-custom-color border-2 max-sm:!mr-0 max-xs:!rounded-md " style={{marginRight:"2%",backgroundColor:"#020c1b"}}>
                Resume
            </div>
            <div className="rounded-md px-2 text-custom-color transition-all duration-500 bg-custom-color max-sm:!mr-0 max-xs:!rounded-md absolute top-0 left-0 right-0 bottom-0 " style={{marginRight:"2%"}}>
                Resume
            </div>
            </div>
            
          </div> 
      
          
     
          
        );
    
      }
    
    
      export default Navbar