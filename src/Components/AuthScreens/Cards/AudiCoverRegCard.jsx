import { Images } from "@/assets/Images/Images"
import { Mail, MapPin, Phone } from "lucide-react"

function AudiCoverRegCard(){
    return(
        <div className="w-full my-15 relative">
            <img className="w-full" src={Images.audicover} />
            {/* bg-[#14171C] */}
            <form className="md:py-5 bg-[#14171C] lg:w-auto w-[65%] md:px-10 py-2 px-5 rounded-lg absolute lg:-bottom-[30%] md:-bottom-[60%] -bottom-[100%] lg:left-[10%] left-[20%] flex flex-col items-center  ">
                <h1 className="lg:text-2xl md:text-xl text-xs">Register yourself for a meeting</h1>
                <input placeholder="Name" className="border-b-1 lg:text-base md:text-sm text-xs w-full border-[#8F8065] lg:my-5 md:my-3 my-2 " />
                <input placeholder="E-mail" className="border-b-1 lg:text-base md:text-sm text-xs lg:my-5 md:my-3 my-2 w-full border-[#8F8065] " />
                <input placeholder="Phone number" className="border-b-1 lg:text-base md:text-sm text-xs lg:my-5 md:my-3 my-2 w-full border-[#8F8065] " />
                <button className="bg-[#8F8065] w-full rounded-sm lg:text-base md:text-sm text-xs mx-5 py-1">I am interested</button>
            </form>
            <div className="absolute lg:top-[0%] top-[0%] md:top-[10%] right-[15%] md:right-[30%] lg:right-[15%]">
                <h1 className="lg:text-2xl text-sm lg:mb-3.5">Contact delivery</h1>
                <div className="flex mx-2 items-center">
                    <MapPin color="#8F8065" className="h-3 w-3" />
                    <p className="lg:text-base md:text-[10px] text-[8px] ml-2">Sector 123, Banjara hills , Hyderabad</p>
                </div>
                <div className="flex mx-2 items-center">
                    <Mail color="#8F8065" className="h-3 w-3" />
                    <p className="lg:text-base md:text-[10px] text-[8px] ml-2">test@gmail.com</p>
                </div>
                <div className="flex mx-2 items-center">
                    <Phone color="#8F8065" className="h-3 w-3" />
                    <p className="lg:text-base md:text-[10px] text-[8px] ml-2">9999999999</p>
                </div>
            </div>
        </div>
    )
}
export default AudiCoverRegCard