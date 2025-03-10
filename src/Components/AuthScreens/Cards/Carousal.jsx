import { Images } from "@/assets/Images/Images"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const carousalData = [
    Images.car1,
    Images.carousal1, 
    Images.carousal2,
]
function CarousalMain() {
    const [slide, setSlide] = useState(0)
    function nextSlide(){
        setSlide(slide === carousalData.length -1 ? 0 : slide+1 )
    }
    function prevSlide(){
        setSlide(slide === 0 ? carousalData.length -1 : slide-1)
    }

    return (
        <div className="w-full">
            <div className="flex items-center w-full ">
                <ChevronLeft onClick={prevSlide} color="white" className="absolute h-2 w-2 left-4 cursor-pointer" />
                {carousalData.map((item, index) => <img className={`w-full h-full ${slide !== index && "hidden"}`} key={index} src={item} />)}
                <ChevronRight onClick={nextSlide} color="white" className="absolute h-2 w-2 right-4 cursor-pointer" />
                <span className="flex absolute bottom-4 left-1/2 transform -translate-x-1/2">{carousalData.map((_, index) => <button onClick={()=>setSlide(index)} className={`w-2 h-2 ${slide === index ? "bg-white" : "bg-gray-400" } rounded-full border-0 outline-0 mx-0.5 cursor-pointer`} key={index}></button>)}</span>
            </div>
        </div>
    )
}
export default CarousalMain
