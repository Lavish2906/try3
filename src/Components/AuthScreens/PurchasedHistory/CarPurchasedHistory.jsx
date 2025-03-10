import { Images } from "@/assets/Images/Images"
import OfferCard from "../Cards/Offercards"
import { MapPin } from "lucide-react"
import CarPurchasedDetails from "./CarPurchasedDetails"
import { useState } from "react"
import PurchasedCarsCard from "../Cards/PurchasedCarsCards"

function CarPurchasedHistory() {
    const [purchasedCar , setPurchasedCar] = useState(false)
    
    return (
        <div className="w-full pb-10 bg-[#101115] text-white">
            <h1 className="lg:text-2xl md:text-xl text-sm font-bold py-4 w-[90%] px-4 mx-auto ">Car purchased histroy</h1>
            {!purchasedCar && <div className="w-[90%] mx-auto bg-[#242529] p-4">
                <PurchasedCarsCard setShowDetails={setPurchasedCar} name="2024 Mercedes-Benz" dealer="Santosh Mishra" offerDate="Jan 15, 2024" doffer="2400000" boffer="2400000" location="Bangalore" offerActive="Active" status="Initiated" />
                <PurchasedCarsCard setShowDetails={setPurchasedCar} name="2024 Mercedes-Benz" dealer="Santosh Mishra" offerDate="Jan 15, 2024" doffer="2400000" boffer="2400000" location="Bangalore" offerActive="Active" status="Test drive booked"/>
                <PurchasedCarsCard setShowDetails={setPurchasedCar} name="2024 Mercedes-Benz" dealer="Santosh Mishra" offerDate="Jan 15, 2024" doffer="2400000" boffer="2400000" location="Bangalore" offerActive="Active" status="Test drive Successfull" />
            </div>}
            {
                purchasedCar &&  <CarPurchasedDetails />
            }
           
        </div>
    )
}
export default CarPurchasedHistory