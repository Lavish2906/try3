import { Images } from "@/assets/Images/Images"
import { useStateContext } from "@/Context/ContextProvider"

function NewsandUpdateCard({ heading, info, img, date, user }) {
    const { screenSize } = useStateContext()

    return (
        <div className="w-full flex justify-between my-6 items-center">
            <div className="md:w-[15%] w-[18%] flex justify-center items-center">
                <div className="flex flex-col items-center">
                    <img className="md:rounded-lg rounded-sm" src={img} />
                    {screenSize <= 800 && <p className="md:text-xs text-[9px] text-[#96969E]">{date}</p>}
                </div>
            </div>
            <div className="md:w-[82%] w-[80%]">
                <div className="flex justify-between">
                    <p className="lg:text-2xl text-sm md:text-lg">{heading}</p>
                    {screenSize > 800 && <p className="text-sm text-[#96969E]">{date}</p>}
                </div>
                <p className="lg:my-2 my-1 lg:text-base md:text-sm text-[9px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, cum. Quos atque, illo maiores, aliquam iure nihil soluta amet exercitationem deleniti fugit ea doloribus ipsum alias ipsa deserunt ad.</p>
                <div className="flex items-center">
                    <img src={Images.dp} className="rounded-full md:h-7 h-5" />
                    <p className="md:text-sm text-xs ml-2 text-[#96969E]">{user}</p>
                </div>
            </div>
        </div>
    )
}
export default NewsandUpdateCard