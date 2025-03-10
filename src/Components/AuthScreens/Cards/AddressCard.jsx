import { Images } from "@/assets/Images/Images";
import { Mail, MoveUpRight, Phone } from "lucide-react";

function AddressCard({country, addressline}) {
    return (
        <div className="bg-[#171A21] text-white lg:p-6 p-1.5 flex flex-col lg:m-2 md:mb-0 mb-3.5 md:m-1">
            <h2 className="lg:text-xl md:text-sm text-left font-semibold">{country}</h2>
            <div className="md:mt-3 mt-1.5">
                <p className="inline md:text-start text-center text-sm">{addressline}</p>
                <div className="flex items-center">
                    <p className="inline lg:text-sm text-xs">See on map</p>
                    <MoveUpRight className="lg:h-4 lg:w-4 md:h-3 h-2 w-2 md:w-3 ml-1 cursor-pointer" />
                </div>
            </div>
            <div className="md:mt-6 mt-2 flex items-center gap-4">
                <div className="flex items-center">
                    <Mail color="#8F8065" className="lg:h-4 lg:w-4 md:h-3 h-2 w-2 md:w-3"/>
                    <p className="inline lg:text-sm text-xs ml-1">Test@gmail.com</p>
                </div>
                <div className="flex items-center">
                    <Phone color="#8F8065" className="lg:h-4 lg:w-4 md:h-3 h-2 w-2 md:w-3" />
                    <p className="lg:text-sm text-[10px] ml-1">+91 9399393939</p>
                </div>
            </div>
        </div>
    );
};
export default AddressCard