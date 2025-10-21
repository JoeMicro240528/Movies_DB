import CarouselSpacing from "@/components/CarouselSpacing"
import ContainerSection from "@/components/ui/ContainerSection"
import Crew from "@/components/ui/Crew"
import ProgressBar from "@/components/ui/PeogressBar"
import SnippteBox from "@/components/ui/SnippteBox"
import { Heart, Play } from "lucide-react"


const Details = () => {
  return (
    <div className="overflow-x-hidden">
         <div className="relative movie-details overflow-hidden z-6 lg:flex  gap-4 w-full h-[90vh] min-h-[400px] p-5 lg:p-20 bg-no-repeat bg-center bg-cover"
         style={{backgroundImage:'url(https://lh3.googleusercontent.com/aida-public/AB6AXuDQq89xCJJc3QWtqNH8p5ouFbEEhdmfFvDQHVgI7ZvVdYd295OumV9g8PSJ9H2ou_b1sDcrcraARgxowcsl4jlCDj0Y1LPHkjSLC1gU7WmdBQSkcTN4S1Ubkkaftvwqr9yHkqKJ_0YneXjATWCbn324g3GHU2XRb1U0MgxZAHynDHUq2f90A8A9QA473QDNo9w4Tybwb2gmXBZ66mAeXbwXVJJH-aYG26kKL4TDYPu4hFTVMaozyA-2DOfY5iClCEinMpxm_ew2TI3S)'}}>
             <div className="overlay w-[100%] absolute z-10 top-0 left-0 bottom-0  bg-black/60"></div>
                <div className="content absolute z-20 text-white  overflow-hidden lg:flex gap-6">
                    <div className="image w-48 lg:w-64 mb-3.5 lg:mb-1 h-60 lg:h-80 rounded-lg ">
                        <div  style={{backgroundImage:'url(https://lh3.googleusercontent.com/aida-public/AB6AXuArwjEAm442CI55wm5SmaZahKmN-pX9UOfFjNRF73sYFj15bHM6E7PsnzEuVhpB0Et5n0Tdqy9c4GOEeLdwN2CfCpa8LneI5JnCRc4GrjQL4nMoI9AAOTu07Atzf8U7ePePx6OEM6wW0t8Xl2a5MrbWp1-hKNn6eroLexKHJMCJoaPhm_l6OIULBBg-yTFKVINLRVWJWccXf1VViSVs2M5a7FcuDjHHbNBd-H4PAScaBS-mjVY01cfaxcrnxKg6GyjWzTAF2YDvXSqR)'}}
                            className=" w-full h-full bg-cover bg-center "></div>
                    </div>
                    <div className="info flex flex-col gap-3">
                            <p className="text-md text-[#D1D5DB] ">Your mind is the scene of the crime.</p>
                            <h1 className="title text-6xl mb-5 font-bold text-white ">Inception</h1>
                            <div className="flex gap-4 items-center">
                                <button className=" bg-red-700 p-3 text-white flex gap-2 rounded-md cursor-pointer font-bold  opacity-100 hover:opacity-90 transition-all"> <Heart/> Add to Favorites</button>
                                <button className=" bg-[#363E4B] p-3 text-white flex gap-2 rounded-md cursor-pointer font-bold opacity-80 hover:opacity-100 transition-all"><Play/> Watch Trailer</button>

                            </div>
                    </div>
                </div>
         </div>
          <div className="container md:flex gap-10  my-5 p-5 lg:p-20 overflow-hidden">
            <div className="left-section w-full lg:w-[60%]">
                <div className="synopsis-section ">
             <h2 className="text-2xl font-bold text-white mb-3">Synopsis</h2>
             <p className="text-md text-gray-300 text-base font-normal leading-relaxed">Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets, is offered a chance to regain his old life as payment for a task considered to be impossible: "inception," the implantation of another person's idea into a target's subconscious.</p>
            </div>
            <div className="cast my-10">
                <h2 className="text-2xl font-bold text-white my-3">Top Billed Cast</h2>
                <div className="acts-carousel mx-8">
                     <CarouselSpacing />
                </div>
            </div>
            <div className="top-videos">
                <h2 className="text-2xl font-bold text-white my-5">Trailers & Videos</h2>
                <div className="top-videos-content w-[100%] lg:flex gap-5">
                  <div className="trailers-frame w-full lg:w-[60%] h-60 bg-black/35 rounded-lg overflow-hidden ">
                    <iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" className="w-full h-full rounded-lg" src="https://www.youtube.com/embed/YoHD9XEInc0" title="YouTube video player"></iframe>
                  </div>
                  <div className="snnipet m-10 lg:m-0 flex flex-wrap w-full lg:w-[70%] gap-3">
                       <SnippteBox />
                       <SnippteBox />
                       <SnippteBox />
                       <SnippteBox /> 
                  </div>
                </div>
            </div>
         </div>
         <div className="section-rigth lg:ml-4">
            <ContainerSection title="Details">
               <div className="info flex justify-between py-2 mt-3 mb-3 border-b-1 border-b-gray-700">
                  <span className="text-gray-400 text-sm font-normal">Release Date</span>
                  <p className="text-md font-bold">July 16, 2010</p>
               </div>
                <div className="info flex justify-between items-center py-2 mb-3 border-b-1 border-b-gray-700">
                  <span className="text-gray-400 text-sm font-normal">Genre</span>
                   <ul className="flex justify-around gap-2.5 ">
                        <li className="text-white/80  p-1 px-2 rounded-3xl cursor-pointer  text-[12px] bg-gray-600">Action</li>
                        <li className="text-white/80  p-1 px-2 rounded-3xl cursor-pointer text-[12px]   bg-gray-600">Sci-Fi</li>
                        <li className="text-white/80  p-1 px-2 rounded-3xl cursor-pointer text-[12px]   bg-gray-600">Thriller</li>
                   </ul>
               </div>
                <div className="info flex justify-between py-2 mb-3 border-b-1 border-b-gray-700">
                  <span className="text-gray-400 text-sm font-normal">MPAA Rating</span>
                  <p className="text-md font-bold">PG-13</p>
               </div>
                <div className="info flex justify-between py-2 mb-3 border-b-1 border-b-gray-700">
                  <span className="text-gray-400 text-sm font-normal">Runtime</span>
                  <p className="text-md font-bold">2h 28m0</p>
               </div>
            </ContainerSection>
              <div className="mt-7">
                <ContainerSection title="Ratings">
                  <div className="rait flex gap-4">
                    <div className="imdb my-4 flex flex-col items-center justify-center ">
                      <p className="text-4xl text-white font-black ">8.8</p>
                      <p className=" text-sm text-gray-400">IMDb</p>
                     </div>
                       <div className="imdb my-4 flex flex-col items-center justify-center ">
                          <p className="text-4xl text-white font-black ">87%</p>
                          <p className=" text-sm text-gray-400">Rotten Tomatoes</p>
                     </div>
                  </div>
                    <div className="progress-rating">
                        <ProgressBar rating={5} number={75} />
                        <ProgressBar rating={4} number={40} />
                        <ProgressBar rating={3} number={25} />
                        <ProgressBar rating={2} number={10} />
                        <ProgressBar rating={1} number={5} />
                    </div>
              </ContainerSection>
              </div>
               <div className="mt-7">
                <ContainerSection title="Crew">
                  <div className="crew-list">
                    <Crew />
                    <Crew />
                    <Crew />
                  </div>
              </ContainerSection>
              </div>
         </div>
          </div>
    </div>
  )
}

export default Details
