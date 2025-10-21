import { Facebook, Instagram, Twitter } from "lucide-react"


const Footer = () => {
  return (
    <div>
        <footer className="footer bg-[#182c36] mt-10 mx-20 p-9 text-center md:text-left ">
          <div className="footer-content pb-4 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] border-b-1 border-b-[#203843] gap-2">
             <div className="footer-item">
                <p className="title text-xl font-bold text-white">MoviesDB</p>
                <p className="description px-1 py-3 text-[#9CA3A7] text-lg">Your ultimate guide to the world of cinema..</p>
             </div>

             <div className="footer-item">
                <p className="title text-lg font-bold text-white">Site Map</p>
                <ul className="list unstyled px-1  py-3 text-[#9CA3A7] text-md ">
                   <li><a href="#" className="hover:text-white transition-all duration-500:">Home</a></li>
                   <li><a href="#" className="hover:text-white transition-all duration-500:">Search</a></li>
                   <li><a href="#" className="hover:text-white transition-all duration-500">Favorites</a></li>
                   <li><a href="#" className="hover:text-white transition-all duration-500:">Privacy Policy</a></li>
                </ul>
             </div>
              <div className="footer-item">
                <p className="title text-lg font-bold text-white">Legal</p>
                <ul className="list unstyled px-1  py-3 text-[#9CA3A7] text-md ">
                   <li><a href="#" className="hover:text-white transition-all duration-500:">Terms of Service</a></li>
                   <li><a href="#" className="hover:text-white transition-all duration-500:">Privacy Policy</a></li>
               </ul>
          </div>
            <div className="footer-item">
                <p className="title text-lg font-bold text-white">Connect With Us</p>
                <ul className="social unstyled flex sm:justify-center md:justify-start  gap-6 mt-3 text-[#9CA3A7] text-md ">
                   <li><a href="#" className="hover:text-white transition-all duration-500:"><Facebook/> </a></li>
                   <li><a href="#" className="hover:text-white transition-all duration-500:"><Twitter /> </a></li>
                   <li><a href="#" className="hover:text-white transition-all duration-500"><Instagram /></a></li>
                </ul>
             </div>
       </div>
        <div  className="mt-6  text-center text-[#4c5b62]"> <p>© 2024 MovieDB. All rights reserved. Data provided by TMDb.</p></div>
        </footer>
    </div>
  )
}

export default Footer
