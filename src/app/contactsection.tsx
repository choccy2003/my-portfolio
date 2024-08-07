import { FaGithub,FaLinkedin } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const contactSection = ()=>{

    return(<>
   <div className="mb-60 mt-96 max-sm:mt-24 max-sm:mb-24">
    <div style={{wordSpacing:"-7px"}} className="font-mono text-xl font-semibold text-custom-color flex flex-col items-center text-center max-sm:font-medium">
        <div>
           <span className="text-xl text-custom-color font-medium max-lg:text-base max-xs:text-base">03. </span>What's next?
    <div className="text-5xl font-bold mt-5 max-sm:text-4xl" style={{color:"#9ca2c2"}}>
        Get In Touch! 
        </div>
        <div style={{color:"#9ca2c2",wordSpacing:"0px"}} className="text-base font-sans max-w-lg opacity-85 mt-5 max-sm:text-sm px-7">
        I’m currently looking for new opportunities and open to freelance work or job offers. My inbox is always open, so whether you have a project in mind or just want to say hi, you can contact me.
        </div>
        <div className="relative">
           <div style={{backgroundColor:"#020c1b"}} className="mt-10 border-custom-color border-2 w-fit m-auto px-5 py-2 rounded-md cursor-pointer transition-all duration-500 hover:-translate-x-1 hover:-translate-y-1 relative z-10 max-sm:text-base ">
            <a href="mailto:harshitgera25@gmail.com">Contact Me!</a>
        </div>
        <div className=" border-custom-color border-2 w-fit m-auto px-5 py-2 rounded-md cursor-pointer absolute top-0 right-0 left-0 bg-custom-color max-sm:text-base">
            Contact Me!
        </div> 
        </div>
        
        <div className="flex justify-center gap-4 opacity-75 cursor-pointer-all mt-16 max-sm:!text-2xl max-sm:mt-10" style={{fontSize:"30px",color:"#9ca2c2"}}>
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
        
    </div>
    </div>
    
   </div>
    </>)
}

export default contactSection