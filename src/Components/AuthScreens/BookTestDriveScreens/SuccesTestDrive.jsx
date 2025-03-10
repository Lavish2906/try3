import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/Components/ui/dialog"

function SuccessTestDrive({ openModal, setIsDialogOpen, openReviewModal }) {
    function handleOkClick(){
        setIsDialogOpen(false)
        openReviewModal(true)
    }
    return (
        <Dialog open={openModal} onOpenChange={setIsDialogOpen}>
            <DialogTrigger />
            <DialogContent className=" md:w-[70%] w-[85%] lg:w-[50%] lg:h-[60%] lg:pb-0 pb-7 bg-[#171A21] border-1 border-[#8F8065] rounded-lg">
                <DialogHeader>
                    <DialogTitle />
                    <DialogDescription>
                        <div className="flex flex-col relative md:mt-10 w-[60%] mx-auto justify-center items-center">
                            <div className="bg-[#8F8065] absolute top-0 left-[40%] md:h-4 h-3 md:w-4 w-3 rounded-full"></div>
                            <div className="bg-[#8F8065] absolute top-4 md:h-4 h-3 md:w-4 w-3 rounded-full"></div>
                            <h1 className="text-center my-3.5 text-white font-bold mt-7 md:text-3xl text-lg">Take Further steps</h1>
                            <p className="md:my-2 my-0.5 md:text-base text-sm text-center">Your test drive has been booked. Our Chauffeur will get in touch with you really soon.</p>
                            <button onClick={handleOkClick} className="md:px-2 px-0 mt-3 md:py-3 py-1 w-30 rounded-lg md:text-base text-sm bg-[#8F8065] text-white">Ok</button>
                        </div>
                    </DialogDescription>
                </DialogHeader>
                {/* <button onClick={handleDialogClose}>Close</button> */}
            </DialogContent>
        </Dialog>
    )
}
export default SuccessTestDrive