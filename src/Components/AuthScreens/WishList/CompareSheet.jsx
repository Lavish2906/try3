import { Images } from "@/assets/Images/Images"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/Components/ui/sheet"
import { carDetailsData } from "@/Constants/carDetails"
import { Star } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useStateContext } from "@/Context/ContextProvider"
function CompareSheet({ comparisonList }) {
    const [open, setOpen] = useState(false)
    const { screenSize } = useStateContext()
    return (
        <Sheet onOpenChange={setOpen}> 
            <SheetTrigger><button onClick={() => setOpen(!open)} style={{
                transform: open ? `translateY(-${0.7 * screenSize}px)` : "translateY(0px)",
            }}
                className="top-[50%] rounded-lg bg-[#8F8065] -right-10 fixed m-0 z-50 transition-transform duration-500 text-white px-7 rotate-270 py-2 ">Compare </button></SheetTrigger>
            <SheetContent className="bg-[#242529] lg:w-[40%] w-[70%] overflow-y-scroll">
                <SheetHeader>
                    <SheetTitle />
                    <SheetDescription>
                        <div className="mt-6">
                            {comparisonList.map((id) => {
                                return (
                                    <div className="flex flex-row w-full my-4  bg-[#171A21] border-1 border-[#8F806552] text-white rounded-2xl overflow-hidden p-4 shadow-lg relative">
                                        <img
                                            src={Images.comparecar}
                                            alt="Car"
                                            className="object-contain md:w-auto w-20"
                                        />
                                        <div className="md:w-1/3 flex flex-col justify-between px-3 ">
                                            <div className="flex flex-row justify-between items-center">
                                                <h2 className="md:text-sm text-xs">{id}</h2>
                                            </div>
                                            <div className="flex my-2 text-sm">
                                                <div className="flex items-center px-1 bg-[#BFA45E] mr-4">
                                                    <Star fill="white" className="h-3 w-3 mx-0.5" />
                                                    <p className="md:text-[10px] text-[8px]">5</p>
                                                </div>
                                                <p className="mx-2 md:text-[10px] text-[8px]">6 Reviews</p>
                                            </div>
                                            <div>
                                                <p className="md:text-[10px] text-[8px]">2400000</p>
                                                <p className="md:text-[10px] text-[8px]">Average Showroom price</p>
                                            </div>

                                        </div>
                                    </div>
                                )
                            })}
                        </div>


                    </SheetDescription>
                </SheetHeader>
                <SheetFooter>
                    <Link to="/comparison">
                        <button className="w-full mx-auto cursor-pointer  bg-[#8F8065] text-white rounded-sm py-3">Comparen now</button>
                    </Link>
                    <button className="underline cursor-pointer text-white">Clear all</button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export default CompareSheet




