import { FaGithub,FaLinkedin } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { RefObject } from "react";

interface Props {
    projectSectionRef: RefObject<HTMLDivElement>;
}

const Homesection:React.FC<Props> = (props) =>{
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
return(
    <>
    <div className="mb-96 flex font-mono max-lg:mb-32 " style={{marginTop:"12%",marginLeft:"1.1%"}}>
        <div className="flex flex-col justify-center gap-6 opacity-75 cursor-pointer-all mt-36 pt-24 max-2xl:!mt-36 max-lg:!mt-24 max-sm:!text-2xl max-sm:!mt-4 max-xs:!mt-2 max-xs:!pt-20 max-xs:!text-lg max-xs:!gap-3 max-xs:ml-1" style={{fontSize:"30px"}}>
            <div>
                <a href="https://github.com/choccy2003">
                   <FaGithub/> 
                </a>
                
            </div>
            <div>
                <a href="https://www.linkedin.com/in/harshit-gera-776bbb263/">
                <FaLinkedin/>
                </a>
                
            </div>
            <div>
                <a href="mailto:harshitgera25@gmail.com">
<BiLogoGmail/>
                </a>
                
            </div>
        </div>
        <div className="w-full flex justify-between">
          <div className="flex flex-col gap-2 ml-28 max-3xl:ml-14 max-2xl:ml-32 max-lg:!ml-14 max-sm:!ml-12 max-sm:!gap-0 max-xs:!ml-8 max-xs:!pl-1">
            <div style={{wordSpacing:"-4px"}} className="text-custom-color text-xl mb-3 ml-0.5 max-lg:!text-lg max-sm:!text-base max-sm:!mb-1 max-xs:!text-xs">
                Hi, my name is
            </div>
            <div style={{wordSpacing:"-4px",color:"#9ca2c2"}} className="font-bold text-7xl max-3xl:text-6xl max-lg:!text-5xl max-sm:!text-3xl max-xs:!text-xl " >Harshit.</div>
            <div style={{wordSpacing:"-4px",color:"#767da1"}} className="font-bold text-7xl max-3xl:text-6xl max-lg:!text-5xl max-sm:!text-3xl max-xs:!text-xl max-xs:!-mt-1">A Website developer.</div>
            <div style={{width:"750px",opacity:"0.6"}} className="mt-4 max-3xl:!max-w-xl max-lg:!text-sm max-lg:!max-w-lg max-sm:!text-xs max-sm:!mt-2 max-sm:!max-w-96 max-xs:!mt-0 max-xs:!max-w-72">Experienced MERN Stack developer with over 1 year of
hands-on experience in designing and implementing
full-stack websites. <span className="max-xs:hidden">I also have experience with other useful technologies like NEXTjs, TypeScript, Tailwind, etc.</span></div>
            
            <div className="relative">
            <div style={{fontSize:"17px",backgroundColor:"#020c1b"}} className="px-4 py-2 border-2 border-custom-color max-w-fit rounded-md text-custom-color cursor-pointer transition-all duration-500 font-semibold mt-6 max-lg:px-2 max-lg:!text-sm max-sm:!text-xs max-sm:!mt-4 relative z-10 hover:-translate-x-1 hover:-translate-y-1" onClick={()=>{
                sectionScrollEvent(props.projectSectionRef)
            }} >
                Check out my projects!
            </div>
            <div style={{fontSize:"17px"}} className="px-4 py-2 border-2 border-custom-color max-w-fit rounded-md text-custom-color cursor-pointer transition-all duration-500 font-semibold  mt-6 max-lg:px-2 max-lg:!text-sm max-sm:!text-xs max-sm:!mt-4 absolute top-0 bg-custom-color"  >
                Check out my projects!
            </div>
            </div>
        </div>
        <div >
            <div  style={{width:"500px",position:"relative"}} className=" max-3xl:!w-96 max-2xl:hidden">
           
                <img className=" rounded-lg relative right-44" src="/pic3.png"/>
                <img className="rounded-lg absolute top-24 right-24" src='/pic1.png'/>
          
            </div>
    

            
        </div>  
        </div>
        
        
    </div>
    </>
)
}
export default Homesection
