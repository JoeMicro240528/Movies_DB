
const ProgressBar = ({ rating, number }: { rating: number; number: number }) => {
  return (
   <div className="progress flex my-2 gap-2 items-center">
                      <span>{rating}</span>
                       <div className="progress-bar w-full  bg-gray-700 rounded-full h-1.5 overflow-hidden">
                           <div className="bg-red-500 h-1.5 rounded-full" style={{ width: `${number}%` }}></div>
                        </div>
                        <span className="">{number}%</span>
                    </div>
  )
}

export default ProgressBar
