import { ChevronDown } from "lucide-react"
import { useState } from "react"

function Accordian({ question, answer, index, isOpen, onClick }) {
    // const [isOpen, setIsOpen] = useState(false)

    function handleClick() {
        setIsOpen(prevState => !prevState)
    }
    return (
        <div className="my-4">
            <div className="  flex flex-row border-1 border-[#8F8065] px-2 py-2 rounded-sm md:flex-row justify-between items-center ">
                <span className="text-xs text-white sm:text-base">{index + 1}. {question}</span>
                <div className="md:h-6 md:w-6 h-4 w-4 flex justify-center items-center rounded-full bg-[#8F8065] ">
                    <ChevronDown onClick={onClick} color="white" className={`text-lg sm:text-xl md:text-2xl transform ${isOpen ? 'rotate-180' : ''}`} />
                </div>
            </div>
            {isOpen && <div className=" px-4 sm:px-6 border-1 border-[#8F8065] text-white md:px-10 py-3 mt-1 rounded-lg text-[9px] sm:text-base">
                {answer}
            </div>}
        </div>
    )
}
export default Accordian
