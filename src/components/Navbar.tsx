import { Film } from 'lucide-react';
import { TextAlignJustify } from 'lucide-react';
import { X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router';
import logo from "../../public/logo.svg"
const Navbar = () => {

     const [mnueTogile, setMenuToggle] = useState(false);
     
    const setToggel = ()=>{
        setMenuToggle(!mnueTogile);
    }
   
  return (
    <div className="relative w-full text-white px-12 "> 
        <div className="nav-content w-full flex justify-start lg:justify-between  lg:items-center border-b-1 border-b-[#203843]">
            <div className=" flex justify-between  lg:justify-around my-5 " >
                
                  
                    <Film size={40} className="mr-3 text-[#6DC7B2]" />
                    <img  className='w-30' src={logo} alt=""/>
             
                <ul className="nav-list hidden mx-20 text-[#6DC7B2] md:flex justify-around lg:text-xl font-medium ">
                    <li className=" px-5 transition-colors hover:text-[#127bb0] cursor-pointer">
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className=" px-5 transition-colors hover:text-[#127bb0] cursor-pointer">
                        <NavLink to="/search">Search</NavLink>
                    </li>
                    <li className=" px-5 transition-colors hover:text-[#127bb0] cursor-pointer">
                        <NavLink to="/favorites">Favorites</NavLink>
                    </li>
                </ul>
                                <div className={`md:hidden w-full`}>
                                    {  
                                      mnueTogile? <X onClick={()=>setToggel()} size={30} className='cursor-pointer mx-44' />:
                                                  <TextAlignJustify  size={30} onClick={()=>setToggel()} className='self-end cursor-pointer  mx-44'/>       
                                                 
                                    }
                                </div>
                               
                            </div>
                              
                                <div className=" nav-button hidden md:flex  items-center md:mx-5 my-3">    
                                   <NavLink to={'search'} className=" bg-[#127bb0] hover:opacity-80  cursor-pointer transition-all text-white font-bold lg:py-3 px-3 py-2 lg:px-6 rounded-lg ">Get Started</NavLink>   
                                </div>
                            </div>
                             
                            <div className={`menu   h-screen ${mnueTogile?'flex':"hidden"}  w-[400px]  gap-20 shadow-2xl rounded-lg flex-col `}>
                                <div className=' ml-3 flex flex-col gap-5'>
                                    <ul className="nav-list text-[#6DC7B2] flex flex-col mt-2 ml-3 text-xl  gap-4  justify-around font-medium ">
                                    <li className=" px-5 transition-colors  hover:bg-neutral-600 rounded-lg  p-3 cursor-pointer"><NavLink to="/">Home</NavLink></li>
                                    <li className=" px-5 transition-colors  hover:bg-neutral-600 rounded-lg p-3 cursor-pointer"><NavLink to="/search">Search</NavLink></li>
                                    <li className=" px-5 transition-colors  hover:bg-neutral-600 rounded-lg p-3 cursor-pointer"><NavLink to="/favorites">Favorites</NavLink></li>
                                </ul>
                                   <div className=' mx-7 my-3 '>
                                         <NavLink to={'search'} className=" bg-[#127bb0] hover:opacity-80 mt-5 cursor-pointer transition-all text-white font-bold py-3 px-6 rounded-lg ">Get Started</NavLink>   
                                    </div>
                                     
                                </div>
                            </div>
                        </div>
  )
}

export default Navbar