import Footer2 from "@/components/Footer2"
import MoveCard from "@/components/ui/MoveCard"
import SectionHeding from "@/components/ui/SectionHeding"
import { useSelector } from "react-redux"
type Movie = {
  poster_path: any;
  title: string;
  id: number | string;
  poster: string;
  vote_average: number;
};
type RootState = {
  movie: {
    FavoriteMovies: Movie[]
  }
};
const FavoritePage = () => {
  const { FavoriteMovies } = useSelector((state: RootState) => state.movie)
  return (

    <div>

          <div className=" my-10">
              <SectionHeding>
               My Favorites
            </SectionHeding>
               <p className="text-[#9FA4A7] text-md md:text-xl mb-20 mt-3 mx-20">  Your curated collection of must-watch movies.  </p>
    
       </div>
        <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] md:grid-cols-4  gap-10 mx-20">
          {
          FavoriteMovies.length > 0 ? FavoriteMovies.map((movie) => (
            <MoveCard key={movie.id} movie={movie} />
          )) : <p className="text-center text-2xl font-bold text-white">No Favorite Movies Found</p>
          }
        </div>

                    <Footer2/>
    </div>
  )
}

export default FavoritePage