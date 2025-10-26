import {Heart } from "lucide-react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
// @ts-ignore: allow importing JS module without a declaration file
import { addToFavoriteMovies } from "@/store/movieSlice";
type Movie = {
poster_path: any;
  title: string;
   id: number | string;
  poster: string;
  vote_average: number;
};
type Props = {
  movie: Movie;
};

type RootState = {
  movie: {
    TrendingMovies: Movie[],
    FavoriteMovies: Movie[]
  }
}

const MoveCard = ({ movie }: Props) => {
  const navigate = useNavigate();
  const { TrendingMovies,FavoriteMovies } = useSelector((state: RootState) => state.movie)
  const dispatch = useDispatch()
  return (
    <div style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`}}
     onClick={()=>{
        navigate(`/movie/${movie.id}`)
     }}
                       className="  group relative cursor-pointer rounded-lg overflow-hidden hover:shadow-xl  shadow-blue-400 transition-all bg-center h-[310px] w-[90%] mt-3 duration-300 hover:scale-105 bg-cover ">
                          <div className="overlay w-[100%] absolute z-10 top-0 left-0 bottom-0 opacity-20 bg-gray-800"></div>
                        <div className="title z-30 absolute p-4  bg-[rgba(0,0,0,0.1)] group-hover:bg-transparent bottom-0 left-0 w-full text-white">
                            <p className="text-lg font-bold mb-2 line-clamp-2   leading-tight">{movie.title}</p>  
                             <div className="Rating "> 
                                <span className=" text-[#f2b823] px-2 py-1 rounded-md text-lg font-bold ">⭐{Math.floor(movie.vote_average)}/10</span>
                             </div>
                            <button onClick={()=> dispatch(addToFavoriteMovies(movie))} className=" absolute z-50 top-[-200px] right-2 w-[40px] h-[40px] bg-black/50 hover:bg-[#127bb0] rounded-full  transiton-all duration-600">
                              <Heart className="absolute text-center text-[#fff] font-bold top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%]" size={20} /></button>
                           
                        </div>
                    </div>
  )
}

export default MoveCard