
const aboutSection = ()=>{
    return (<>
    <div className="flex justify-center">
        <div style={{color:"#9ca2c2",wordSpacing:"-7px"}} className="text-3xl font-mono font-semibold max-lg:text-2xl max-xs:text-xl">
           <span className="text-2xl text-custom-color font-medium max-lg:text-xl max-xs:text-lg">01. </span>About Me <span className=" inline-block border-b w-72 mb-2 opacity-25 max-lg:w-40 max-xs:mb-1.5"></span>
           
           <div className="flex gap-5 max-xl:!gap-0 max-lg:block max-lg:w-80 max-xs:w-72">
            <div style={{wordSpacing:"0px",fontWeight:"500",fontSize:"17px",lineHeight:"24px"}} className="font-sans max-w-xl max-lg:!text-sm max-xs:!text-xs">
           <p className="mt-10 max-lg:mt-5">Hello! I am Harshit, a passionate web developer specializing in the MERN stack. With proficiency in modern web technologies such as TypeScript, Tailwind, Next.js, and Firebase, I have been crafting dynamic and responsive websites since 2022.</p>
<p className="mt-5 max-lg:mt-2.5">My journey in web development began two years ago, and I have since honed my skills through various projects and a web development internship at InternNexus. Additionally, I have completed industrial training in the MERN stack, further solidifying my expertise.</p>

<p className="mt-5 max-lg:mt-2.5">At just 21, I am eager to take on new challenges and am open to freelancing opportunities to further expand my skill set.</p>

<p className="mt-5 max-lg:mt-2.5">
   Lets connect and create something amazing together! 
</p>
<div className="text-xl mt-7 mb-4  ">My Skills:</div>
<ul className="*:flex *:items-center *:justify-between *:mt-1.5 max-w-96 cursor-pointer">
    <li><div className="element">React Js</div>
    <progress  className=" h-2 w-32 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-blue-950 [&::-webkit-progress-value]:bg-custom-color [&::-moz-progress-bar]:bg-custom-color max-xs:w-28 max-xs:h-1.5" value="94" max="100"> </progress></li>
    <li><div className="element" >Next Js</div>
    <progress  className=" h-2 w-32 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-blue-950 [&::-webkit-progress-value]:bg-custom-color [&::-moz-progress-bar]:bg-custom-color max-xs:w-28 max-xs:h-1.5" value="87" max="100"> </progress></li>
    <li><div className="element" >TypeScript</div>
    <progress  className=" h-2 w-32 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-blue-950 [&::-webkit-progress-value]:bg-custom-color [&::-moz-progress-bar]:bg-custom-color max-xs:w-28 max-xs:h-1.5" value="90" max="100"> </progress></li>
    <li><div className="element" >JavaScript</div>
    <progress  className=" h-2 w-32 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-blue-950 [&::-webkit-progress-value]:bg-custom-color [&::-moz-progress-bar]:bg-custom-color max-xs:w-28 max-xs:h-1.5" value="95" max="100"> </progress></li>
    <li><div className="element" >Tailwind</div>
    <progress  className=" h-2 w-32 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-blue-950 [&::-webkit-progress-value]:bg-custom-color [&::-moz-progress-bar]:bg-custom-color max-xs:w-28 max-xs:h-1.5" value="90" max="100"> </progress></li>
    <li><div className="element">Express Js</div>
    <progress  className=" h-2 w-32 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-blue-950 [&::-webkit-progress-value]:bg-custom-color [&::-moz-progress-bar]:bg-custom-color max-xs:w-28 max-xs:h-1.5" value="88" max="100"> </progress></li>
    <li><div className="element" >CSS5</div>
    <progress  className=" h-2 w-32 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-blue-950 [&::-webkit-progress-value]:bg-custom-color [&::-moz-progress-bar]:bg-custom-color max-xs:w-28 max-xs:h-1.5" value="95" max="100"> </progress></li>
    

</ul>
           </div>
           <div className="relative w-96 h-fit max-xl:!hidden">
            <img src="/pfp.svg"/>
            </div></div>
        </div>
    </div>
    </>)
}

export default aboutSection