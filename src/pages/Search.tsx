import Footer2 from "@/components/Footer2"
import MoveCard from "@/components/ui/MoveCard"
import SectionHeding from "@/components/ui/SectionHeding"
import { Search } from "lucide-react"
const SearchPage = () => {
  return (
    <div>
     
       <div className="lg:flex mx-10 lg:mx-0 justify-around items-center ">
              <SectionHeding>
             <div className="my-5 lg:my-15"> Find Your Next Favorite Movie</div>
            </SectionHeding>
          <div style={{backgroundColor:'#193049',color:'#48d1f7'}} className="search-field px-10 flex justify-stretch outline-0 items-center rounded-lg py-1 ">
                    <Search size={30} className="text-[#92b7c1]" />
                    <input type="text" placeholder="Search for movies,tv show and person..." className="border-0 outline-0 focus:outline-0 rounded-lg py-2 px-4 w-[100%] md:text-2xl  " />
          </div>
       </div>
        <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-10 mx-20">
                             <MoveCard />
                             <MoveCard />
                             <MoveCard />
                             <MoveCard />
                             <MoveCard />
                             <MoveCard />
                             <MoveCard />
                             <MoveCard />
                    </div>
                    <div className="pagination flex justify-center items-center my-10">
                      <button className="bg-[#127bb0] text-white px-4 py-2 rounded-lg mx-2">Previous</button>
                      <div className="flex items-center">
                          <span className="text-white mx-2">Page 1 of 10</span>
                      </div>
                      <button className="bg-[#127bb0] text-white px-4 py-2 rounded-lg mx-2">Next</button>
                      
                    </div>
                    <Footer2/>
      </div>
  )
}

export default SearchPage

