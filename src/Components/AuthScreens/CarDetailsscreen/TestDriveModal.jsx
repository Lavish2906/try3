import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/Components/ui/dialog"
import { Calendar, Car, CarFront } from "lucide-react"
import { Link } from "react-router-dom"

function TestDriveModal({ openModal, setIsDialogOpen }) {
    return (
        <Dialog open={openModal} onOpenChange={setIsDialogOpen}>
            <DialogTrigger />
            <DialogContent className="lg:w-[60%] md:w-[75%] w-[95%] md:pb-20 bg-[#171A21] border-1 border-[#8F8065] rounded-lg">
                <DialogHeader>
                    <DialogTitle className="text-center text-white font-bold md:text-3xl text-xl md:mt-4 mt-1">Take Further steps</DialogTitle>
                    <DialogDescription>
                        <div className="flex flex-col items-center">

                            <p className="mb-8 md:text-base text-xs">Take a test drive and bbok your card</p>
                            <div className="flex md:flex-row w-full justify-center">
                                <Link to="/test-drive">
                                    <div className="border-1 bg-[#292D35] border-[#8F8065] rounded-lg mx-2 md:w-50 md:my-0 my-1.5 md:h-50 w-35 h-35 flex flex-col justify-center items-center">
                                        <CarFront color="white" className="md:h-10 h-7 md:w-10 w-7" />
                                        <p className="text-white md:text-base md:mt-0 mt-2 text-xs">Take a test drive</p>
                                    </div>
                                </Link>
                                <div className="border-1 bg-[#292D35] border-[#8F8065] rounded-lg mx-2 md:w-50 md:my-0 my-1.5 md:h-50 w-35 h-35 flex flex-col justify-center items-center">
                                    <Calendar color="white" className="md:h-10 h-7 md:w-10 w-7" />
                                    <p className="text-white md:text-base md:mt-0 mt-2 text-xs">Book your car now</p>
                                </div>
                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
                {/* <button onClick={handleDialogClose}>Close</button> */}
            </DialogContent>
        </Dialog>
    )
}
export default TestDriveModal