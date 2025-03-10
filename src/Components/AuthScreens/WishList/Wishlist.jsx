import { Switch } from "@/Components/ui/switch"
import { LayoutGrid, List } from "lucide-react"
import CarDetailsScreen from "../CarDetailsscreen/CardDetailsScreen"
import WishListCarCard from "../Cards/WishListCard"
import { carDetailsData } from "@/Constants/carDetails"
import { useState } from "react"
import AudiCoverRegCard from "../Cards/AudiCoverRegCard"
import UserCardReview from "../Cards/UserreviewCard"
import CompareSheet from "./CompareSheet"

function WishList() {
    const [list, setList] = useState(false)
    const [compare, setCompare] = useState(false)
    const [selectedCars, setSelectedCars] = useState([])
    const [openCompareSheet, setOpenCompareSheet] = useState(false)

    const handleComparechnage = (carId, selected) => {
        if (selected) {
            setSelectedCars((prevCars) => [...prevCars, carId])
        }
        else {
            setSelectedCars((prevCars) => prevCars.filter((id) => id !== carId))
        }
        console.log(selectedCars)
    }

    return (
        <div className="w-full bg-[#101115] py-6 md:px-12 px-6 relative text-white">
            <div className="lg:w-[85%] w-full mx-auto">
                <div className="flex w-full mb-3 justify-between md:flex-row flex-col items-center">
                    <h1 className="lg:text-2xl md:text-xl text-lg text-left font-semibold">My wishlist</h1>
                    <div className="flex md:justify-center md:w-auto w-full justify-between md:my-0 my-2 items-center mx-3">
                        <div className="flex items-center">
                            <h4 className="lg:text-base text-sm" >Compare</h4>
                            <Switch checked={compare}
                                onCheckedChange={() => setCompare(!compare)} className="mx-1" />
                        </div>
                        <p className="mx-2 md:block hidden">|</p>
                        <div className="md:flex hidden items-center mx-3">
                            <h4 className="lg:text-base text-xs">View as</h4>
                            <LayoutGrid color={list ? "gray" : "white"} onClick={() => setList(false)} className="h-4 w-4 cursor-pointer mx-1" />
                            <List color={list ? "white" : "gray"} onClick={() => setList(true)} className="h-4 w-4 cursor-pointer mx-1" />
                        </div>
                    </div>
                </div>
                <div className={`${!list ? "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4" : "w-full"}`}>

                    {carDetailsData.map((itm) => <WishListCarCard  carId={itm.id} compare={compare} key={itm.id} list={list} name={itm.name} year={itm.year} engine={itm.engine} img={itm.img} location={itm.location} kms={itm.kms} price={itm.oPrice} type={itm.type} gear={itm.gear} seat={itm.seat} fuel={itm.fuel} onCompareChnage={handleComparechnage} />)}

                </div>
            </div>

            <AudiCoverRegCard />
            <h1 className="md:text-2xl font-bold text-white md:pl-7 pl-4 text-lg mt-33 mb-1">What our customers say</h1>
            <div className="w-full md:pl-7 pl-2 scroll hide-scrollbar scroll-smooth flex flex-row overflow-x-scroll">
                <div className="mx-2 inline-block">
                    <UserCardReview />
                </div>
                <div className="mx-2 inline-block">
                    <UserCardReview />
                </div>
                <div className="mx-2 inline-block">
                    <UserCardReview />
                </div>
                <div className="mx-2 inline-block">
                    <UserCardReview />
                </div>
                <div className="mx-2 inline-block">
                    <UserCardReview />
                </div>

            </div>
            {/* <button className="bg-red-600" onClick={()=>setOpenCompareSheet(!openCompareSheet)}>Open</button> */}
            {/* add the details of the car instead of the car id only */}
            <CompareSheet comparisonList={selectedCars} />
        </div>
    )
}
export default WishList