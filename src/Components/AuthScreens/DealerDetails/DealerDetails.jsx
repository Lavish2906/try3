import { Images } from "@/assets/Images/Images"
import { MapPin, ShieldCheck, Star } from "lucide-react"
import CarCard from "../Cards/Cardetails"
import { carDetailsData } from "@/Constants/carDetails"
import DealerCard from "../Cards/DealerCard"

function DealerDetails() {
    return (
        <div className="bg-[#171A21] pb-10 text-white">
            <div className="flex lg:flex-row flex-col lg:items-start items-center justify-between py-7 px-9">
                <img className="lg:w-100 w-full rounded-lg" src={Images.dealerhome} />
                <div className="flex w-full lg:pl-10 p-0 mt-2 items-start justify-between">
                    <div className="w-full">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <h1 className="md:text-3xl text-sm font-bold text-white">Jsp Autocore-Singasandra</h1>
                                <ShieldCheck className="h-4 w-4 md:mx-3 mx-1" fill="blue" />
                            </div>
                            <img className="w-24 sm:hidden block" src={Images.dealercert} />
                        </div>
                        <div className="flex md:my-3 my-1">
                            <p className="text-white md:text-base text-sm">Member since 2005</p>
                            <div className="flex mx-1 bg-[#A08E56] items-center px-1 ">
                                <Star className="h-3 w-3" color="white" fill="white" />
                                <p className="text-white text-[14px]">5</p>
                            </div>
                        </div>
                        <div className="flex border-b-1 border-dashed border-white md:items-center items-start pb-5">
                            <MapPin fill="#A08E56" />
                            <p className="md:my-4 my-0 ml-1 text-white">233, Hosur Main Road, Singasandra,Bangalore, Karnataka 560068</p>

                        </div>
                        <div className="flex my-4">
                            <p className="text-white">Showing time: 10:00 AM to 07:00 PM</p>
                        </div>
                        <div className="flex mt-4">
                            <button className="border-1 rounded-sm border-[#A08E56] md:text-base text-xs w-50 px-4 py-2 text-[#A08E56]">Get the directions</button>
                            {/* <button className="bg-[#A08E56] rounded-sm w-50 px-4 md:text-base text-xs py-2 ml-3 text-white">Call the dealer</button> */}
                        </div>
                    </div>
                    <img className="w-50 md:block hidden" src={Images.dealercert} />
                </div>
            </div>
            <h1 className="text-2xl font-bold text-white pl-7 my-7">Explore the top 5 cars</h1>
            <div id="slider2" className="w-full pl-7 scroll hide-scrollbar scroll-smooth whitespace-nowrap flex flex-row overflow-x-scroll">
                {
                    carDetailsData.map((itm) =>
                        <div key={itm.id} className="inline-block mx-2">
                            <CarCard details={true} name={itm.name} year={itm.year} engine={itm.engine} img={itm.img} location={itm.location} kms={itm.kms} price={itm.oPrice} type={itm.type} gear={itm.gear} seat={itm.seat} fuel={itm.fuel} />
                        </div>)
                }
            </div>
            <h1 className="text-2xl font-bold text-white pl-7 mb-7 mt-5">Other dealers near you</h1>
            <div id="slider2" className="w-full pl-7 scroll hide-scrollbar scroll-smooth whitespace-nowrap flex flex-row overflow-x-scroll">

                <div className="mx-2 inline-block">
                    <DealerCard width={true} />
                </div>
                <div className="mx-2 inline-block">
                    <DealerCard width={true} />
                </div>
                <div className="mx-2 inline-block">
                    <DealerCard width={true} />
                </div>
                <div className="mx-2 inline-block">
                    <DealerCard width={true} />
                </div>
            </div>
        </div>
    )
}
export default DealerDetails