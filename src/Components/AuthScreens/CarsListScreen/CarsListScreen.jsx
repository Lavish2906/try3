import Faq from "../Accordian/Faq";
import CarCard from "../Cards/Cardetails";
import SideBarfilter from "./sideBarfilter";
import { carDetailsData } from "@/Constants/carDetails";
import { Images } from "@/assets/Images/Images";
import { WideCarCard } from "../Cards/wideCarDetails";
import { useStateContext } from "@/Context/ContextProvider";
import { useEffect } from "react";
import { Filter, SlidersHorizontal } from "lucide-react";

const topCar = {
    id: 1,
    name: "BMW E64 M6 V10",
    year: 2015,
    engine: "3246cc",
    type: "Automatic",
    location: "BANGALORE",
    kms: 15,
    fuel: "petrol",
    gear: "CVT",
    seat: 6,
    oPrice: 28,
    img: Images.cardetail1
}

function CarsListScreen() {
    const { isFilter, setIsFilter, screenSize } = useStateContext();

    // Adjust the isFilter based on screen size
    useEffect(() => {
        if (screenSize < 900) {
            setIsFilter(false);  // Default is to hide on small screens
        } else {
            setIsFilter(true);   // Sidebar is visible by default on large screens
        }
    }, [screenSize, setIsFilter]);

    return (
        <div className="bg-[#171A21]">
            {/* Mobile Toggle Button */}
            {screenSize < 900 && (
                <div className="py-3 px-2 w-full flex justify-end z-20">
                    <SlidersHorizontal color="white"
                        onClick={() => setIsFilter(!isFilter)}
                        className="cursor-pointer"
                    />
                </div>
            )}

            <div className="flex flex-row">
                {/* Sidebar filter for mobile toggle or always visible on larger screens */}
                {isFilter && (
                    <div className={`${screenSize < 900 ? 'w-72 fixed z-40 top-0 left-0' : 'w-72'} md:w-72`}>
                        <SideBarfilter />
                    </div>
                )}

                {/* Main content section */}
                <div className={`w-full flex flex-col px-4 ${screenSize < 900 ? 'ml-0' : 'ml-0'}`}>
                    <div className="flex md:flex-row flex-col items-center md:items-star justify-between">
                        <WideCarCard
                            details={true}
                            name={topCar.name}
                            year={topCar.year}
                            engine={topCar.engine}
                            img={topCar.img}
                            location={topCar.location}
                            kms={topCar.kms}
                            price={topCar.oPrice}
                            type={topCar.type}
                            gear={topCar.gear}
                            seat={topCar.seat}
                            fuel={topCar.fuel}
                        />
                        {/* Image will only appear on large screens */}
                        <img className="hidden md:block w-[40%]" src={Images.audiad} />
                    </div>


                    <div className="w-full my-10 gap-10 grid grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-3">
                        {carDetailsData.map((itm) => (
                            <CarCard
                                key={itm.id}
                                details={true}
                                name={itm.name}
                                year={itm.year}
                                engine={itm.engine}
                                img={itm.img}
                                location={itm.location}
                                kms={itm.kms}
                                price={itm.oPrice}
                                type={itm.type}
                                gear={itm.gear}
                                seat={itm.seat}
                                fuel={itm.fuel}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className={`${screenSize < 900 ? "pl-0" : "pl-72"}`}>
                <Faq />
            </div>
        </div>
    );
}

export default CarsListScreen;
