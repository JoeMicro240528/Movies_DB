import {Heart } from "lucide-react"
const MoveCard = () => {
  return (
    <div style={{backgroundImage:'url(https://lh3.googleusercontent.com/aida-public/AB6AXuArwjEAm442CI55wm5SmaZahKmN-pX9UOfFjNRF73sYFj15bHM6E7PsnzEuVhpB0Et5n0Tdqy9c4GOEeLdwN2CfCpa8LneI5JnCRc4GrjQL4nMoI9AAOTu07Atzf8U7ePePx6OEM6wW0t8Xl2a5MrbWp1-hKNn6eroLexKHJMCJoaPhm_l6OIULBBg-yTFKVINLRVWJWccXf1VViSVs2M5a7FcuDjHHbNBd-H4PAScaBS-mjVY01cfaxcrnxKg6GyjWzTAF2YDvXSqR)'}}
                     className="  group relative cursor-pointer  rounded-lg overflow-hidden hover:shadow-xl  shadow-blue-400 transition-all bg-center h-[300px] w-[80%] duration-300 hover:scale-105 bg-cover ">
                          <div className="overlay w-[100%] absolute z-10 top-0 left-0 bottom-0 opacity-20 bg-gray-800"></div>
                        <div className="title z-30 absolute p-4  bg-[rgba(0,0,0,0.1)] group-hover:bg-transparent bottom-0 left-0 w-full text-white">
                            <p className="text-lg font-bold mb-2 line-clamp-2   leading-tight">Spider-Man: Across the Spider-Verse favorite</p>  
                            <p className=" absolute top-[-200px] right-2 w-[40px] h-[40px] bg-black/50 hover:bg-[#127bb0] rounded-full  transiton-all duration-600">
                              <Heart className="absolute text-center text-[#fff] font-bold top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%]" size={20} /></p>
                           
                        </div>
                    </div>
  )
}

export default MoveCard