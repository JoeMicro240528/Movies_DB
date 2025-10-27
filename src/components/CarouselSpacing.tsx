

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
    image: "https://i.pinimg.com/736x/5e/d1/0c/5ed10c563ecb3416c3fc579452686329.jpg"
  },
  {
    id:2,
    name: "Kate Winslet",
    role: "Rose DeWitt Bukater",
    image: "https://i.pinimg.com/736x/a6/7c/8d/a67c8d532fd85caa3efd13f98b736471.jpg"
  },
  {
    id:3,
    name: "Billy Zane",
    role: "Caledon ‘Cal’ Hockley",
    image: "https://i.pinimg.com/1200x/6f/a4/55/6fa455669d8d9a009c619d2e5732b5e7.jpg"
  },
  {
    id:4,
    name: "Kathy Bates",
    role: "Molly Brown",
    image: "https://i.pinimg.com/1200x/22/3e/be/223ebe900de52ac72a6f4683a620c489.jpg"
  },
  {
    id:5,
    name: "Frances Fisher",
    role: "Ruth DeWitt Bukater",
    image: "https://i.pinimg.com/736x/5f/1d/91/5f1d91b13b0fc1423fa7abe62baf488e.jpg"
  },
  {
    id:6,
    name: "Gloria Stuart",
    role: "Old Rose (Rose Dawson Calvert)",
    image: "https://i.pinimg.com/1200x/ab/1b/ad/ab1bad6eeaa2e52fd7997ad6b2dfdd98.jpg"
  },
  {
    id:7,
    name: "Bill Paxton",
    role: "Brock Lovett",
    image: "https://i.pinimg.com/736x/30/16/2b/30162b0b92fcaa48184f17241be16fa8.jpg"
  },
  {
    id:8,
    name: "Bernard Hill",
    role: "Captain Edward J. Smith",
    image: "https://i.pinimg.com/1200x/15/4d/f6/154df6c62a367bbe9de4e5f3a0edcaab.jpg"
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