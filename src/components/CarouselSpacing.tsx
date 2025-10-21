

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselSpacing() {
  return (
    <Carousel className=" mx-12 lg:mx-0 my-10  relative">
      <CarouselContent className="">
       
          <CarouselItem key={0} className="w-full p-2 md:mx-12 lg:mx-20  md:basis-1/2 lg:basis-1/5">
            <div className="item flex flex-col items-center ">
              <Card className="w-[150px] h-[200px] p-0 bg-transparent border-0  rounded-lg overflow-hidden">
                <CardContent style={{backgroundImage:'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAW9t-JAvRKLKxK3FE1ieNGeksMDw-f8Rfl3dMpyAUZUSfkiZ7FlgqPcbbMYlvwez7hOB4n6VQ_KmlS0nP4pim-YH6c1Epo0JfO2s7nqGIQH--HLN659cxjdbHG0xim5UsmLkHtpuAS2BCnvgJSojt_uX8M2pDjV0KZA6uPoFuUjo2hEUlSI4mCk-rk1Of1SrM96E804ZxnsyK95is4FIIMbBIVKduk6IUnPZ9lSOX7g87qJFGUn_pTxZzOKHM8ee3c1AnLt-VhjJax")'}} 
                className=" w-full h-full bg-cover bg-center p-6">
                </CardContent>
              </Card>
                   <div className="info text-center mt-1">
                       <h4 className="text-white">Tom Hardy</h4>
                       <p className="text-gray-300">Eames</p>
                   </div>
            </div>
          </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default CarouselSpacing