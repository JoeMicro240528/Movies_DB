

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

type castListType = {
    id: number;
    name: string;
    role: string;
    image: string;
}[]

const castList: castListType = [
  {
    id:1,
    name: "Leonardo DiCaprio",
    role: "Jack Dawson",
    image: "https://image.tmdb.org/t/p/w500/jBklt2Uwq9u4Y1AoB4O2zxIp4kC.jpg"
  },
  {
    id:2,
    name: "Kate Winslet",
    role: "Rose DeWitt Bukater",
    image: "https://image.tmdb.org/t/p/w500/4cb9hWVCSiuSmexYJ38gPqZ9J0Y.jpg"
  },
  {
    id:3,
    name: "Billy Zane",
    role: "Caledon ‘Cal’ Hockley",
    image: "https://image.tmdb.org/t/p/w500/5n4q0rKAUEuPGgU4ZKgciqUDK4l.jpg"
  },
  {
    id:4,
    name: "Kathy Bates",
    role: "Molly Brown",
    image: "https://image.tmdb.org/t/p/w500/9o9YrR9Yb1E1oiZp9qKU2uRSv2u.jpg"
  },
  {
    id:5,
    name: "Frances Fisher",
    role: "Ruth DeWitt Bukater",
    image: "https://image.tmdb.org/t/p/w500/bzIgE64AMQtZfBiYzCU1c1rFhAT.jpg"
  },
  {
    id:6,
    name: "Gloria Stuart",
    role: "Old Rose (Rose Dawson Calvert)",
    image: "https://image.tmdb.org/t/p/w500/gAGalv1HBuYtYOWcK2bwl9A12Gh.jpg"
  },
  {
    id:7,
    name: "Bill Paxton",
    role: "Brock Lovett",
    image: "https://image.tmdb.org/t/p/w500/4e9tAy0GJ1gK4pZs1nbDOI61oKS.jpg"
  },
  {
    id:8,
    name: "Bernard Hill",
    role: "Captain Edward J. Smith",
    image: "https://image.tmdb.org/t/p/w500/kt9MaELJdBaPSpGfXpGtFmO3zrk.jpg"
  }
];


export function CarouselSpacing() {
  return (
    <Carousel className=" mx-12 lg:mx-0 my-10  relative">
      <CarouselContent className=" " >
          {
            castList.map((cast)=>(
                   <CarouselItem key={cast.id} className="w-full p-2 md:mx-12 lg:mx-20  md:basis-1/2 lg:basis-1/5">
            <div className="item flex flex-col items-center ">
              <Card className="w-[150px] h-[200px] p-0 bg-transparent border-0  rounded-lg overflow-hidden">
                <CardContent style={{backgroundImage:`url(${cast.image})`}} 
                className=" w-full h-full bg-cover bg-center p-6">
                </CardContent>
              </Card>
                   <div className="info text-center mt-1">
                       <h4 className="text-white">{cast.name}</h4>
                       <p className="text-gray-300">{cast.role}</p>
                   </div>
            </div>
          </CarouselItem>
            ))
          }
      
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default CarouselSpacing