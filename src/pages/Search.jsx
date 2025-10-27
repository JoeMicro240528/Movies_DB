import Footer2 from "@/components/Footer2"
import MoveCard from "@/components/ui/MoveCard"
import SectionHeding from "@/components/ui/SectionHeding"
import { Search } from "lucide-react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
// @ts-ignore: allow importing JS module without a declaration file
import {searchMovie} from '../store/movieSlice'
// @ts-ignore: allow importing JS module without a declaration file
import {getAllMovies} from '../store/movieSlice'
// @ts-ignore: allow importing JS module without a declaration file
import PaginationComponent  from "../components/Pagination"
import { SpinnerColor } from "@/components/Spinner"


const SearchPage = () => {
  const dispatch = useDispatch();
    const { movies,currentPage ,searchMovies , total_pages} = useSelector((state) => state.movie)
    const [word,setWord] = useState('')

    useEffect( ()=>{
           if(word!==''){
              dispatch(searchMovie(word))
           } else{
               dispatch(getAllMovies(currentPage));
               
           }
      }
    ,[dispatch,word,currentPage])


  return (
    <div>
     
       <div className="lg:flex mx-10 lg:mx-0 justify-around items-center ">
              <SectionHeding>
             <div className="my-5 lg:my-15"> Find Your Next Favorite Movie</div>
            </SectionHeding>
          <div style={{backgroundColor:'#193049',color:'#48d1f7'}} className="search-field px-10 flex justify-stretch outline-0 items-center rounded-lg py-1 ">
                    <Search size={30} className="text-[#92b7c1]" />
                    <input type="text" value={word} onChange={(e) => setWord(e.target.value)} placeholder="Search for movies,tv show and person..." className="border-0 outline-0 focus:outline-0 rounded-lg py-2 px-4 w-[100%] md:text-2xl  " />
          </div>
       </div>
        <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-10 mx-20">
                             {
                               word?
                                searchMovies.length!=0? 
                                searchMovies.map((movie) => (
                              <MoveCard key={movie.id} movie={movie} />
                        ))
                          :<h1 className="font-bold text-white text-2xl text-center my-7"><SpinnerColor /></h1>
                          :      
                            movies.length!=0? 
                            movies.map((movie) => (
                              <MoveCard key={movie.id} movie={movie} />
                        ))
                          :<h1 className="font-bold text-white text-2xl text-center my-7"><SpinnerColor /></h1>
                       }
                    </div>
                    <div className="pagination  flex justify-center items-center my-10">
                         <PaginationComponent getPage={getAllMovies} pageCount={ total_pages} />
                    </div>
                    <Footer2/>
      </div>
  )
}

export default SearchPage

