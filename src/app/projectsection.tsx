
const projectSection = ( ) =>{

    return(
        <div>
        <div className="mt-72 flex justify-center max-lg:mt-32 flex-col items-center" >
            <div style={{color:"#9ca2c2",wordSpacing:"-7px"}} className="text-3xl font-mono mr-80 pr-40 font-semibold max-lg:text-2xl max-xs:text-xl max-cl:w-fit max-cl:m-auto max-sm:pr-0">
              <span className="text-2xl text-custom-color font-medium max-lg:text-xl max-xs:text-lg">02. </span>My Projects<span className=" inline-block border-b w-72 mb-2 opacity-25 max-lg:w-40 max-xs:mb-1.5"></span>
        </div>  
        <div className="flex mt-10 relative items-center max-cl:flex-col ">
          <div style={{width:"600px"}} className="relative max-cl:static max-cl:!max-w-lg max-sm:!max-w-sm max-xs:!max-w-xs">
            <a href="https://chocotv123.web.app/">
              <img  className=" rounded-xl relative right-44 cursor-pointer max-cl:static max-cl:mb-4 max-cl:!w-fit max-cl:max-w-lg max-sm:!max-w-sm max-xs:!max-w-xs" alt="img" src="/pic6.PNG" />  
            </a>
           
           
        </div>
        
        <div style={{color:"#9ca2c2"}} className="flex flex-col text-right absolute left-96 min-w-96 max-w-96 mb-10 max-cl:static max-cl:text-left max-cl:!max-w-lg max-sm:!max-w-sm max-xs:!max-w-xs max-xs:min-w-80">
           <div className=" text-custom-color text-sm max-sm:text-xs select-none ">Featured Project</div>
           <a href="https://chocotv123.web.app/"><div className="font-bold text-2xl max-cl:text-xl max-xs:text-lg select-none cursor-pointer">ChocoTv -Streaming App</div></a>
           <div style={{backgroundColor:"#112240"}} className=" rounded-md px-7 py-3 mt-4 text-left max-sm:text-sm max-xs:text-xs max-xs:px-3">
           Your Ultimate Streaming Platform. Built on React.js, ChocoTv allows you to stream videos, upload your own content, manage your profile, and much more.
           </div>
        </div>  
        </div>
        <div className="flex mt-32 relative items-center max-cl:flex-col-reverse max-cl:mt-5">
          
        <div style={{color:"#9ca2c2"}} className="flex flex-col text-left min-w-96 max-w-96 mb-10 z-10 relative right-72 max-cl:static max-cl:text-left max-cl:!max-w-lg max-sm:!max-w-sm max-xs:min-w-80 ">
           <div className=" text-custom-color text-sm max-sm:text-xs select-none">Featured Project</div>
           <a href="https://website-3830a.web.app/"><div className="font-bold text-2xl max-cl:text-xl max-xs:text-lg select-none cursor-pointer">OutfitZen -Ecommerce App</div></a>
           <div style={{backgroundColor:"#112240"}} className=" rounded-md px-7 py-3 mt-4 text-left max-sm:text-sm max-xs:!max-w-xs max-xs:text-xs max-xs:px-3">
           Your Ultimate Fashion Destination. Built on React.js, It offers a seamless experience with features like browsing, checkout, & reviews. Discover, shop, and more.
           </div>
        </div>  
        <div style={{width:"600px"}} className="absolute  left-16 max-cl:static max-cl:!max-w-lg max-sm:!max-w-sm max-xs:!max-w-xs">
         <a href="https://website-3830a.web.app/">
           <img className=" rounded-xl relative cursor-pointer  max-cl:static max-cl:mb-4 max-cl:!w-fit max-cl:max-w-lg max-sm:max-w-sm max-xs:!max-w-xs" alt="img" src='/pic4.PNG' />  
         </a>
           
        </div>
        </div>
        <div className="flex mt-32 relative items-center max-cl:flex-col max-cl:mt-5">
          <div style={{width:"600px"}} className="relative max-cl:static max-cl:!max-w-lg max-sm:!max-w-sm max-xs:!max-w-xs">
            <a href="https://pixel-plus-studios.web.app/">
             <img  className=" rounded-xl relative right-44 cursor-pointer max-cl:static max-cl:mb-4 max-cl:!w-fit max-cl:max-w-lg max-sm:!max-w-sm max-xs:!max-w-xs" alt="img" src='/pic7.PNG' />   
            </a>
           
           
        </div>
        
        <div style={{color:"#9ca2c2"}} className="flex flex-col text-right absolute left-96 min-w-96 max-w-96 mb-10 max-cl:static max-cl:text-left max-cl:!max-w-lg max-sm:!max-w-sm max-xs:min-w-80">
           <div className=" text-custom-color text-sm max-sm:text-xs select-none">Featured Project</div>
           <a href="https://pixel-plus-studios.web.app/"><div className="font-bold text-2xl max-cl:text-xl max-xs:text-lg select-none cursor-pointer">PixelPlus -Portfolio Site</div></a>
           <div style={{backgroundColor:"#112240"}} className=" rounded-md px-7 py-3 mt-4 text-left max-sm:text-sm max-xs:!max-w-xs max-xs:text-xs max-xs:px-3">
           A Full-Stack Portfolio Site. Developed using TypeScript and the MERN stack. Created for a client, this site highlights  achievements and projects with a modern, responsive design.
           </div>
        </div>  
        </div>
        
        
        
            </div>
        
        </div>
    )
}

export default projectSection
