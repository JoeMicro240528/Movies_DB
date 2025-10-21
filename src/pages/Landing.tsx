import Footer from "@/components/Footer"
import SectionHeding from '../components/ui/SectionHeding'
import { Search } from "lucide-react"
import MoveCard from "@/components/ui/MoveCard"
const Landing = () => {
  return (
    <div>
         <main>
             <div style={{backgroundImage: `url('https://i.pinimg.com/736x/89/f9/2e/89f92e253bd25de11db2a1f01668c1ab.jpg')`}} className=" 
             h-screen main-content  relative my-5 lg:mx-20 rounded-xl overflow-hidden bg-center bg-cover bg-no-repeat  ">
                 <div className="overlay w-[100%] absolute z-10 top-0 left-0 bottom-0  bg-black/30"></div>
                 <div className="caption md:mx-44 text-center px-5">
                        <h4 className="text-2xl md:text-4xl font-bold text-white z-20 relative text-center mt-40">Discover and Explore Your Favorite Movies</h4>
                        <p className="text-white z-20 relative text-center mt-5 text-lg md:text-2xl">
                            Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.
                        </p>
                        <div>
                            <button className=" z-20 relative mt-10 bg-[#127bb0] hover:opacity-80  cursor-pointer transition-all text-white font-bold py-3 px-6 rounded-lg ">Get Started</button>   
                        <button className=" z-20 relative mt-10 bg-transparent border border-white hover:opacity-70 transition-all  cursor-pointer text-white font-bold py-3 px-6 rounded-lg  ml-5">Learn More</button> 
                        </div>
                 </div>
             </div>
             <div style={{backgroundColor:'#233c48',color:'#92b7c1'}} className="search-field focus-within:outline-2 px-20 my-10 flex justify-stretch outline-0 items-center gap-3 mx-15 md:mx-20 rounded-lg py-2">
                <Search size={30} className="text-[#92b7c1]" />
                <input type="text" placeholder="Search for movies,tv show and person..." className="border-0  border-gray-300 outline-0 rounded-lg py-2 px-4 w-[100%] md:text-2xl  " />
             </div>

             <div className="trending-section my-10">
             <div className="my-10">
                  <SectionHeding >
                  Tranding Movies
               </SectionHeding>
             </div>
                <div className="trending-movies grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-10 mx-20">
                    <MoveCard />
                             <MoveCard />
                             <MoveCard />
                             <MoveCard />
                             <MoveCard />
                             <MoveCard />
                             <MoveCard />
                    </div>
                </div>
         </main>
         <Footer />
    </div>
  )
}

export default Landing