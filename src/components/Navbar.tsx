import { Film, Search } from 'lucide-react';
import { TextAlignJustify } from 'lucide-react';
import { X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router';
const Navbar = () => {
     const [mnueTogile, setMenuToggle] = useState(false);
        const [searchVisible, setSearchVisible] = useState(false);
    const setToggel = ()=>{
        setMenuToggle(!mnueTogile);
    }

    const handleSearchToggle = () => {
        setSearchVisible(!searchVisible);
    }
   
  return (
    <div className="relative w-full text-white px-12 "> 
        <div className="nav-content w-full flex justify-start lg:justify-between  lg:items-center border-b-1 border-b-[#203843]">
            <div className=" flex justify-between  lg:justify-around my-5">
                <div className="logo font-bold flex mx-7"> 
                    <Film size={30} className="mr-3 text-[#127bb0]" />
                    <NavLink to={'/'} className="text-xl cursor-pointer">MovieDB</NavLink>
                </div>
                <ul className="nav-list hidden md:flex justify-around font-medium text-accent">
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
                                   <Search size={30} className=' mx-3 cursor-pointer' onClick={() => handleSearchToggle()} />
                                  <input type="text" placeholder="Search for movies..." className={` ${searchVisible ? 'block' : 'hidden'} bg-[#203843]  border border-[#127bb0] rounded-lg  text-white  placeholder:text-[#4c5b62]  focus:outline-none focus:ring-2 focus:ring-[#127bb0] focus:border-transparent  md:px-4 py-2 w-[170px] lg:w-[400px]`} />
                                </div>
                            </div>
                             
                            <div className={`menu   h-screen ${mnueTogile?'flex':"hidden"}  w-[400px]  gap-10 shadow-2xl rounded-lg flex-col `}>
                                <div className=' ml-3'>
                                    <ul className="nav-list flex flex-col mt-2 ml-3 text-xl  gap-4  justify-around font-medium text-accent">
                                    <li className=" px-5 transition-colors  hover:bg-neutral-600 rounded-lg  p-3 cursor-pointer"><NavLink to="/">Home</NavLink></li>
                                    <li className=" px-5 transition-colors  hover:bg-neutral-600 rounded-lg p-3 cursor-pointer"><NavLink to="/search">Search</NavLink></li>
                                    <li className=" px-5 transition-colors  hover:bg-neutral-600 rounded-lg p-3 cursor-pointer"><NavLink to="/favorites">Favorites</NavLink></li>
                                </ul>
                                   <div className='search flex gap-2 mx-7 my-3 '>
                                        <Search size={30} className=' cursor-pointer' onClick={() => handleSearchToggle()} />
                                        <input type="text" placeholder="Search for movies..." className={` ${searchVisible ? 'block' : 'hidden'} bg-[#203843]  border border-[#127bb0] rounded-lg  text-white  placeholder:text-[#4c5b62]  focus:outline-none focus:ring-2 focus:ring-[#127bb0] focus:border-transparent  px-4 py-2 w-[300px] md:w-[400px]`} />
                                    </div>
                                     
                                </div>
                            </div>
                        </div>
  )
}

export default Navbar