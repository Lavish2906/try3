import CarImageWithDetails from "./carImageWithDetails"
import CarCard from "../Cards/Cardetails";
import { carDetailsData } from "@/Constants/carDetails";
import Faq from "../Accordian/Faq";


const carOverview =
{
    state: "Punjab",
    engine: "2998cc, Turbocharged, In-Line-6-cyl, D0HC",
    torque: "500nm@ 11860-5000 RPM",
    drive: "AWD",
    ryear: "Jan 2023",
    transmission: "8 speed steptronic sport automatic transmission",
    power: "375PS/369BHP @5000RPM",
    seat: 5,
    vehicle: "Sports Sedan",
    owner: "1st owner",
    door: 4,
    myear: 2024,
    fuel: "Petrol",
    kms: 3000,
    color: "blue"
}

function CarDetailsScreen() {
    return (
        <div className="bg-[#171A21]">
            <CarImageWithDetails />
            <h1 className={`text-white md:text-2xl lg:text-3xl text-xl my-8 ml-7`}>Similiar deals</h1>
            <div id="slider2" className="w-full md:pl-7 pl-1.5 scroll hide-scrollbar scroll-smooth whitespace-nowrap flex flex-row overflow-x-scroll">
                {
                    carDetailsData.map((itm) =>
                        <div key={itm.id} className="inline-block mx-2">
                            <CarCard details={true} name={itm.name} year={itm.year} engine={itm.engine} img={itm.img} location={itm.location} kms={itm.kms} price={itm.oPrice} type={itm.type} gear={itm.gear} seat={itm.seat} fuel={itm.fuel} />
                        </div>)
                }
            </div>
            <div className="">
                <h1 className="text-center text-white  md:text-2xl lg:text-3xl text-xl md:my-8 my-3.5">Car Overview</h1>
                <div className="md:w-[70%] w-[95%] my-8 mx-auto bg-[#171A21] border-1 rounded-lg border-white">
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {/* Row 1 */}
                        <div className="p-4 flex flex-col items-start border-b border-gray-400">
                            <p className="text-white opacity-50">Registration State</p>
                            <p className="text-white">{carOverview.state}</p>
                        </div>
                        <div className="p-4 flex flex-col items-start border-b border-gray-400">
                            <p className="text-white opacity-50">Registration year</p>
                            <p className="text-white">{carOverview.ryear}</p>
                        </div>
                        <div className="p-4 flex flex-col items-start border-b border-gray-400">
                            <p className="text-white opacity-50">Vehicle type</p>
                            <p className="text-white">{carOverview.vehicle}</p>
                        </div>
                        <div className="p-4 flex flex-col items-start border-b border-gray-400">
                            <p className="text-white opacity-50">Fuel</p>
                            <p className="text-white">{carOverview.fuel}</p>
                        </div>

                        {/* Row 2 */}
                        <div className="p-4 flex flex-col items-start border-b border-gray-400">
                            <p className="text-white opacity-50">Engine</p>
                            <p className="text-white">{carOverview.engine}</p>
                        </div>
                        <div className="p-4 flex flex-col items-start border-b border-gray-400">
                            <p className="text-white opacity-50">Transmission</p>
                            <p className="text-white">{carOverview.transmission}</p>
                        </div>
                        <div className="p-4 flex flex-col items-start border-b border-gray-400">
                            <p className="text-white opacity-50">Ownership</p>
                            <p className="text-white">{carOverview.owner}</p>
                        </div>
                        <div className="p-4 flex flex-col items-start border-b border-gray-400">
                            <p className="text-white opacity-50">KMS done</p>
                            <p className="text-white">{carOverview.kms}</p>
                        </div>

                        {/* Row 3 */}
                        <div className="p-4 flex flex-col items-start border-b border-gray-400">
                            <p className="text-white opacity-50">Peak Torque</p>
                            <p className="text-white">{carOverview.torque}</p>
                        </div>
                        <div className="p-4 flex flex-col items-start border-b border-gray-400">
                            <p className="text-white opacity-50">Peak Power</p>
                            <p className="text-white">{carOverview.power}</p>
                        </div>
                        <div className="p-4 flex flex-col items-start border-b border-gray-400">
                            <p className="text-white opacity-50">Doors</p>
                            <p className="text-white">{carOverview.door}</p>
                        </div>
                        <div className="p-4 flex flex-col items-start border-b border-gray-400">
                            <p className="text-white opacity-50">Exterior color</p>
                            <p className="text-white">{carOverview.color}</p>
                        </div>

                        {/* Row 4 */}
                        <div className="p-4 flex flex-col items-start border-b border-gray-400">
                            <p className="text-white opacity-50">Drive</p>
                            <p className="text-white">{carOverview.drive}</p>
                        </div>
                        <div className="p-4 flex flex-col items-start border-b border-gray-400">
                            <p className="text-white opacity-50">Seating Capacity</p>
                            <p className="text-white">{carOverview.seat}</p>
                        </div>
                        <div className="p-4 flex flex-col items-start border-b border-gray-400">
                            <p className="text-white opacity-50">Manufacturing Year</p>
                            <p className="text-white">{carOverview.myear}</p>
                        </div>
                    </div>
                </div>

                <h1 className="text-center text-white my-8  md:text-2xl lg:text-3xl text-xl">Full specifications</h1>

                <div className="w-[90%] mt-8 mx-auto">

                    <h1 className="text-[#8F8065] text-xl mt-4">Overview</h1>

                    {/* Vehicle Overview */}
                    <div className="space-y-4">
                        <div className="flex px-2 py-1 w-full bg-[#171A21] border border-[#8F806552] justify-between">
                            <p className="text-white md:text-base text-xs">Vehicle type</p>
                            <p className="text-white md:text-base text-xs">{carOverview.vehicle}</p>
                        </div>
                        <div className="flex px-2 py-1 w-full justify-between">
                            <p className="text-white md:text-base text-xs">Engine</p>
                            <p className="text-white md:text-base text-xs">{carOverview.engine}</p>
                        </div>
                        <div className="flex px-2 py-1 w-full bg-[#171A21] border border-[#8F806552] justify-between">
                            <p className="text-white md:text-base text-xs">Fuel</p>
                            <p className="text-white md:text-base text-xs">{carOverview.fuel}</p>
                        </div>
                        <div className="flex px-2 py-1 w-full justify-between">
                            <p className="text-white md:text-base text-xs">Power</p>
                            <p className="text-white md:text-base text-xs">{carOverview.power}</p>
                        </div>
                    </div>

                    <h1 className="text-[#8F8065] text-xl mt-4">Engine and Transmission</h1>

                    {/* Engine and Transmission Overview */}
                    <div className="space-y-4">
                        <div className="flex px-2 py-1 w-full bg-[#171A21] border border-[#8F806552] justify-between">
                            <p className="text-white md:text-base text-xs">Vehicle type</p>
                            <p className="text-white md:text-base text-xs">{carOverview.vehicle}</p>
                        </div>
                        <div className="flex px-2 py-1 w-full justify-between">
                            <p className="text-white md:text-base text-xs">Engine</p>
                            <p className="text-white md:text-base text-xs">{carOverview.engine}</p>
                        </div>
                        <div className="flex px-2 py-1 w-full bg-[#171A21] border border-[#8F806552] justify-between">
                            <p className="text-white md:text-base text-xs">Fuel</p>
                            <p className="text-white md:text-base text-xs">{carOverview.fuel}</p>
                        </div>
                        <div className="flex px-2 py-1 w-full justify-between">
                            <p className="text-white md:text-base text-xs">Power</p>
                            <p className="text-white md:text-base text-xs">{carOverview.power}</p>
                        </div>
                    </div>
                </div>

                <Faq />
            </div>
        </div>
    )
}

export default CarDetailsScreen;
