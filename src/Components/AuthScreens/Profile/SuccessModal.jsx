import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/Components/ui/dialog";
import { Images } from "@/assets/Images/Images";

const SuccessModal = ({ onClose }) => {
    return (
        <Dialog open={true} onClose={onClose}>
            {/*  md:w-[50vw] */}
            <DialogContent className="w-[90vw] sm:w-[60vw] max-h-[90vh] sm:max-h-[75vh] md:max-h-[70vh] h-auto bg-[#171A21] "> {/* Use max-height and overflow auto to prevent vertical overflow */}
                <DialogHeader>
                    <DialogTitle>
                        <div className="flex justify-center items-center mt-0 lg:mt-8"> {/* Adjusted margin for responsiveness */}
                            <img src={Images.avbiglogo} className="w-[120px] sm:w-[150px] md:w-[150px]" /> {/* Responsive image size */}
                        </div>
                    </DialogTitle>
                    <DialogDescription>
                        <div className="flex flex-col justify-center items-center gap-4 sm:gap-6 mt-6 sm:mt-8 md:mt-8"> {/* Adjusted gap and margins */}
                            <h1 className="text-xl sm:text-2xl md:text-3xl text-white font-extrabold leading-[1px] sm:leading-[1px] md:leading-[1px]"> {/* Responsive text size */}
                                Success
                            </h1>
                            <p className="text-sm sm:text-lg md:text-xl text-white/70 font-normal text-center">
                                Congratulations.. Your offer has been accepted. You are now a step closer to your dream luxury car.
                            </p>
                            <button
                                className="bg-[#8F8065] text-white px-4 lg:py-3 py-1 w-9/10 rounded-sm hover:bg-[#8F8065]/80 hover:scale-105 transition duration-200 my-4 mb-6"
                                onClick={onClose}
                            >
                                Close
                            </button>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default SuccessModal;
