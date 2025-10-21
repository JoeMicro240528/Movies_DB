import Footer2 from "@/components/Footer2"
import MoveCard from "@/components/ui/MoveCard"
import SectionHeding from "@/components/ui/SectionHeding"

const FavoritePage = () => {
  return (
    <div>

          <div className=" my-10">
              <SectionHeding>
               My Favorites
            </SectionHeding>
               <p className="text-[#9FA4A7] text-md md:text-xl mb-20 mt-3 mx-20">  Your curated collection of must-watch movies.  </p>
    
       </div>
        <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-10 mx-20">
                             <MoveCard />
                             <MoveCard />
                             <MoveCard />
                             <MoveCard />
                             <MoveCard />
                             <MoveCard />
                    </div>

                    <Footer2/>
    </div>
  )
}

export default FavoritePage