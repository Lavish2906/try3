import { MapPin } from "lucide-react"
import { Images } from "@/assets/Images/Images"
import { useStateContext } from "@/Context/ContextProvider"
function CarPurchasedDetails(){
    const {screenSize} = useStateContext()
    return(
        <div className="lg:w-[80%] md:w-[90%] w-full md:pl-24 p-4">
                <h1 className="text-white lg:text-2xl md:text-xl text-sm font-bold mb-5">Purchased History</h1>
                <h1 className="font-bold">Order #123456</h1>
                <p className="text-sm text-[#888787]">Placed on 12 march 2024</p>
                <div className="flex justify-between items-center mt-10 border-b-1 pb-6">
                    <img src={Images.historycar} />
                    <div>
                        <h1 className="font-bold md:text-lg text-sm lg:text-xl">2024 Mercedez-Benz</h1>
                        <div className="flex gap-1">
                            <h4 className="md:text-base text-sm">Santosh misra</h4>
                            <div className="flex items-center text-sm text-[#888787]">
                                <MapPin className="h-3 w-4" />
                                <p>Bangalore</p>
                            </div>
                        </div>
                        <p className="text-sm text-[#888787]">Offer placed on 15 jan 2024</p>

                    </div>
                   {screenSize < 700 ?<></> : <div>
                        <p className="lg:text-sm text-xs text-[#888787]">Your offer</p>
                        <h1 className="lg:text-xl md:text-sm text-sm font-bold">₹2400000</h1>
                    </div>}
                    {screenSize < 700 ? <></> : <button className="bg-[#8F8065] hover:bg-[#8F8065]/90 cursor-pointer rounded-sm lg:px-5 md:px-2 px-1 py-1 lg:py-2">Download Invoice</button>}
                </div>
                <div className="border-b-1 pb-6">
                    <h1 className="font-bold text-xl mt-3">Order timeline</h1>
                    <div>
                        <div>
                            <h1 className="font-bold lg:text-xl text-sm mt-3">Order Placed</h1>
                            <p className="lg:text-sm text-xs text-[#888787]">Placed on march 12, 2024</p>
                        </div>
                        <div>
                            <h1 className="font-bold lg:text-xl text-sm mt-3">Shipped</h1>
                            <p className="lg:text-sm text-xs text-[#888787]">Placed on march 12, 2024</p>
                        </div>
                        <div>
                            <h1 className="font-bold lg:text-xl text-sm mt-3">Delivered</h1>
                            <p className="lg:text-sm text-xs text-[#888787]">Placed on march 12, 2024</p>
                        </div>
                    </div>
                </div>
                <div className="border-b-1 pb-6">
                    <h1 className="font-bold text-xl mt-3">Shipping information</h1>
                    <div>
                        <p className="lg:text-sm text-xs text-[#888787]">John doe</p>
                        <p className="lg:text-sm text-xs text-[#888787]">123 Mian street</p>
                        <p className="lg:text-sm text-xs text-[#888787]">Apt b</p>
                        <p className="lg:text-sm text-xs text-[#888787]">New york NY 20021</p>
                        <p className="lg:text-sm text-xs text-[#888787]">United states</p>
                        <p className="lg:text-sm text-xs text-[#888787]">Phone +91 9090909090</p>
                    </div>
                </div>
                <div className="border-b-1 pb-6">
                    <h1 className="font-bold text-xl mt-3">Payment details</h1>
                    <div>
                        <p className="text-sm text-[#888787]">Payemnt with credit card ending with 4242</p>
                        <div className="flex justify-between items-center w-[85%]">
                            <h1 className="text-sm text-[#888787] mt-3">Subtotal</h1>
                            <h1 className="lg:text-sm text-xs font-bold">₹800.00</h1>
                        </div>
                        <div className="flex justify-between items-center w-[85%]">
                            <h1 className="text-sm text-[#888787]">Shipping</h1>
                            <h1 className="lg:text-sm text-xs font-bold">₹50.00</h1>
                        </div>
                        <div className="flex justify-between items-center w-[85%]">
                            <h1 className="text-sm text-[#888787]">Tax</h1>
                            <h1 className="lg:text-sm text-xs font-bold">₹40.00</h1>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center my-5 w-[85%]">
                    <h1 className="text-sm text-[#888787]">Total</h1>
                    <h1 className="lg:text-sm text-xs font-bold">₹890.00</h1>
                </div>
                <div className="border-1 rounded-lg p-5 border-[#8F806552] bg-[#171A21]">
                    <h1>Tracking info</h1>
                    <p className="text-sm text-[#888787]">Carrier: fedx</p>
                    <p className="text-sm text-[#888787] hover:underline cursor-pointer">Tracking number: 123456789xwd</p>
                </div>
            </div>
    )
}
export default CarPurchasedDetails