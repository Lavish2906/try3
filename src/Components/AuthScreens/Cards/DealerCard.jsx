import { Images } from "@/assets/Images/Images"
import { Star } from "lucide-react"
import { Link } from "react-router-dom"

function DealerCard({width}) {
    return (
        <div className={`${width ? "w-100 p-2" : "w-full max-w-4xl md:p-5 p-2"} rounded-lg md:mt-6 mt-2 border-1`}>
            <div className="flex items-center gap-4">
                <img
                    src={Images.dhruv}
                    alt="Dealer"
                    className="md:w-25 md:h-25 w-15 h-15 rounded-full object-cover"
                />
                <div className="w-full">
                    <div className="flex w-full justify-between">
                        <Link to="/car-dealer">
                            <p className="md:text-2xl hover:underline cursor-pointer text-sm font-semibold">Dhruv Sharma</p>
                        </Link>
                        <div className="flex bg-[#8F8065] items-center md:px-1 px-0.5">
                            <Star className="md:w-4 w-3 md:h-4 h-3" />
                            5
                        </div>
                    </div>
                    <p className="text-gray-400 md:text-base text-xs">Estd Year 2005</p>
                    <p className="text-gray-400 md:text-base text-xs">License: DL12345678</p>
                </div>
            </div>
            <div className="flex justify-end">
                <Link to="/car-dealer">
                    <button className="text-white hover:underline md:text-base text-xs">View Details</button>
                </Link>
            </div>
        </div>
    )
}
export default DealerCard