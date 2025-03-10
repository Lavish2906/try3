import { Images } from "@/assets/Images/Images"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/Components/ui/dialog"
import { Calendar, Car, CarFront } from "lucide-react"
import { Link } from "react-router-dom"
import StarRating from "./StarRating"

function RevieExpereinceModal({openModal, setIsDialogOpen }) {
    function handleCloseModal(){
        setIsDialogOpen(false)
    }
    return (
        <Dialog open={openModal} onOpenChange={handleCloseModal} >
            <DialogTrigger />
            <DialogContent className="lg:w-[60%] p-6 md:w-[75%] w-[95%] bg-[#171A21] border-1 border-[#8F8065] rounded-lg">
                <DialogHeader>
                    <DialogTitle className="my-2.5 text-white font-bold md:text-3xl text-xl ">Rate your car purchase expereince</DialogTitle>
                    <DialogDescription>
                       <div>
                            <p className="mb-2">Your feedback help us improve our service</p>
                            <div className="flex md:flex-row items-center flex-col">
                                <img className="w-[40%]" src={Images.car8}/>
                                <div className="ml-5">
                                    <p className="md:text-base text-sm">Vehicle details</p>
                                    <p className="my-2 font-bold text-lg text-white ">2023 Mercedes-Benz S-Class</p>
                                    <p className="md:text-base text-sm">Purchased dates</p>
                                    <p className="my-2 font-bold text-lg text-white ">11 th jan 2024</p>
                                    <p className="md:text-base text-sm">Order id</p>
                                    <p className="my-2 font-bold text-lg text-white ">#123vme4</p>
                                </div>
                            </div>
                            <div className="flex w-full my-5 justify-between items-center">
                                <p className="text-lg font-semibold text-white">Ratings</p>
                                <StarRating />

                            </div>
                            <div className="w-full">
                                <p className="my-1">We value your feedback</p>
                                <textarea className="w-full border-1 border-[#ccc] rounded-sm p-2 focus:outline-0" />
                            </div>
                            <div className="w-full flex justify-center items-center">
                                <button className="bg-[#8F8065] text-white px-4 py-2 my-1 rounded-sm">Submit</button>
                            </div>
                       </div>
                    </DialogDescription>
                </DialogHeader>
                {/* <button onClick={handleDialogClose}>Close</button> */}
            </DialogContent>
        </Dialog>
    )
}
export default RevieExpereinceModal