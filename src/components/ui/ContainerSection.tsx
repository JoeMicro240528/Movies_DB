import React from "react"

const ContainerSection = ({ children,title }:{ children: React.ReactNode,title:string}) => {
  return (
   <div className="content-container w-[400px] px-10 py-5 bg-black/45 rounded-lg text-white">
               <h3 className="text-xl font-bold text-white">{title}</h3>
                {children}
            </div>
  )
}

export default ContainerSection
