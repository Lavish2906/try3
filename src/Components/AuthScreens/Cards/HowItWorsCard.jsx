import { Images } from "@/assets/Images/Images";
import { CarFront, Search, User } from "lucide-react";


function HowItWorksCard({heading, index , info, logo}) {

    return (
        <div className="max-w-md py-8 px-3 bg-[#14171C] w-75 md:h-72 h-44 text-white m-2 rounded-xl border-1 border-[#D7AE4533] shadow-lg">
            <div className="flex gap-3 items-center">
                <h2 className="lg:text-2xl md:text-lg text-sm font-semibold text-[#D7AE45]">0{index+1}</h2>
                {logo === "user" && <User fill="#D7AE45" color="#D7AE45" className="bg-[#30291C] md:h-10 md:w-10 h-6 w-6 md:p-2 p-1 rounded-full"/>}
                {logo === "search" && <Search  color="#D7AE45" className="bg-[#30291C] md:h-10 md:w-10 h-6 w-6 md:p-2 p-1 rounded-full"/>}
                {logo === "car" && <CarFront fill="#D7AE45" color="#D7AE45" className="bg-[#30291C] md:h-10 md:w-10 h-6 w-6 md:p-2 p-1 rounded-full"/>}
            </div>
            <div className="mt-3">
                <h1 className="lg:text-2xl md:text-sm text-[10px] font-semibold">{heading}</h1>
                {/* <span className="text-4xl leading-none">&ldquo;</span> */}
                <p className="text-[#ffffff]/40 md:text-sm text-[9px]">{info}</p>
            </div>
            
        </div>
    );
};
export default HowItWorksCard