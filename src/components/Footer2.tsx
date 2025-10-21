import { Facebook, Instagram, Twitter } from "lucide-react"

const Footer2 = () => {
  return (
    <div className="mt-20 md:p-10 md:mx-30 mx-10 p-5 border-t border-solid border-white/10">
               <ul className="list flex justify-center   gap-4 unstyled px-1  py-3 text-[#cec4c4] text-md ">
                  <div className="md:flex gap-4 md:w-fit w-full">
                     <li><a href="#" className="hover:text-white mb-2 transition-all duration-500:">Home</a></li>
                     <li><a href="#" className="hover:text-white mb-2 transition-all duration-500:">Terms of Use</a></li>
                  </div>
                  <div className="md:flex gap-4 md:w-fit w-full">
                      <li><a href="#" className="hover:text-white mb-2 transition-all duration-500">Contact</a></li>
                      <li><a href="#" className="hover:text-white mb-2 transition-all duration-500:">Privacy Policy</a></li>
                  </div>
                </ul>

                
                <ul className="social  unstyled flex justify-center  gap-6 mt-3 text-[#cec4c4] text-md ">
                   <li><a href="#" className="hover:text-white transition-all duration-500:"><Facebook/> </a></li>
                   <li><a href="#" className="hover:text-white transition-all duration-500:"><Twitter /> </a></li>
                   <li><a href="#" className="hover:text-white transition-all duration-500"><Instagram /></a></li>
                </ul>
        <div  className="mt-6  text-center text-[#cec4c4]"> <p>© 2023 MovieDB. All rights reserved.</p></div>
    </div>
  )
}

export default Footer2
