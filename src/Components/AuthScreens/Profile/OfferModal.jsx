import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/Components/ui/dialog";
import SuccessModal from "./SuccessModal";

const OfferModal = ({ deal, onAcceptOffer, onDeclineOffer, onMakeCounterOffer, isOpen, onClose }) => {
    const [offerValue, setOfferValue] = useState(0);
    const [isEditing, setIsEditing] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleKeyPress = (e) => {
        if (e.key.match(/[0-9]/)) {
            setOfferValue((prevValue) => prevValue * 10 + parseInt(e.key));
            setErrorMessage("");
        } else if (e.key === "Backspace") {
            setOfferValue((prevValue) => Math.floor(prevValue / 10));
            setErrorMessage("");
        }
    };

    const validateOffer = () => {
        const offerAmount = offerValue;

        if (offerAmount <= 0) {
            setErrorMessage("Please enter a valid offer amount.");
            return false;
        }

        if (deal.status === "Offer Received") {
            if (offerAmount <= deal.boffer) {
                setErrorMessage(`Your counter offer should be greater than the last offer of ${deal.boffer}.`);
                return false;
            }
        } else if (deal.status === "Counter Offer Received") {
            if (offerAmount >= deal.doffer || offerAmount <= deal.boffer) {
                setErrorMessage(`Your counter offer should be greater than ${deal.boffer} and less than ${deal.doffer}.`);
                return false;
            }
        }

        setErrorMessage(""); // Clear error message if validation passes
        return true;
    };

    const handleSubmitCounterOffer = () => {
        if (validateOffer()) {
            onMakeCounterOffer(offerValue);
            setIsEditing(false);
        }
    };

    const handleCancelEditing = () => {
        setIsEditing(false);
        setOfferValue(0);
    };

    const handleAccept = () => {
        setShowSuccessModal(true)
        // onClose();
        onAcceptOffer();
    };

    const handleDecline = () => {
        onDeclineOffer();
        onClose(); // Close the modal after declining the offer
    };

    const handleCloseSuccessModal = () => {
        setShowSuccessModal(false);
    };

    useEffect(() => {
        if (isEditing) {
            document.addEventListener("keydown", handleKeyPress);

            return () => {
                document.removeEventListener("keydown", handleKeyPress);
            };
        }
    }, [isEditing]);

    return (
        <div>
            <Dialog open={isOpen} onOpenChange={onClose}>
                <DialogContent className="bg-[#171A21] lg:w-[60%] md:w-[75%] w-[94%] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle>
                            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white font-normal lg:leading-[48px] md:leading-[25px] leading-[10px] text-center">
                                {isEditing ? "Make Counter Offer" : deal.status === "Offer Received" ? "Offer Received" : "Offer Received"}
                            </h1>
                        </DialogTitle>
                        <DialogDescription>
                            <div>
                                <p className="text-[10px] sm:text-sm md:text-lg lg:text-xl text-white/70 font-normal leading-[22px] text-center">
                                    {isEditing
                                        ? `Current Offer: ${deal.status === "Offer Received" ? deal.boffer : deal.doffer}`
                                        : "Seller has shown interest in this negotiation and made an offer."
                                    }
                                </p>
                                <p className="text-center lg:text-base text-xs">4 offer left</p>
                                <p className="text-center lg:text-base text-xs">Counter offer from the seller</p>
                                <h1 className="lg:text-[50px] md:text-3xl text-2xl text-white/50 font-normal leading-0 lg:leading-[60px] text-center mt-8 lg:mt-5">
                                    {isEditing ? (
                                        <div className="flex flex-col justify-center mt-1 md:mt-2 ">
                                            <span className="text-sm text-white/50 font-normal text-center my-1">Your counter offer</span>
                                            <span className="lg:text-5xl text-3xl md:my-5 my-9 md:text-4xl">{offerValue}</span>
                                        </div>
                                    ) : (
                                        deal.status === "Offer Received" ? deal.boffer : deal.doffer
                                    )}
                                </h1>

                                {errorMessage && (
                                    <p className="border-[#FE4245] border-2 mx-auto my-5 py-1 md:w-[38vw] w-full text-center rounded-full text-[#FE4245] bg-[#FFD6D6] px-5">
                                        {errorMessage}
                                    </p>
                                )}

                                {isEditing ? (
                                    <div className="flex flex-col justify-center items-center gap-4 mb-3 lg:mt-12 md:mt-2">
                                        <div className="flex w-full gap-4 justify-center flex-wrap">
                                            <button
                                                className="bg-[#8F8065] text-white w-[45%] sm:w-[45%] md:text-base text-xs lg:w-[30%] px-4 lg:py-3 py-1.5 rounded-sm hover:bg-[#8F8065]/80 hover:scale-105 transition duration-200"
                                                onClick={handleSubmitCounterOffer}
                                            >
                                                Continue
                                            </button>
                                            <button
                                                className="bg-[#8F80651A] text-white w-[45%] sm:w-[45%] md:text-base text-xs lg:w-[30%] px-4 lg:py-3 py-1.5 rounded-sm hover:bg-[#8F80651A]/80 hover:scale-105 transition duration-200"
                                                onClick={handleCancelEditing}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex flex-col justify-center items-center gap-4 mt-12">
                                        <button
                                            className="bg-[#8F8065] text-white md:text-base text-xs w-1/2 md:w-[45%] sm:w-[80%] px-4 lg:py-3 py-1.5 rounded-sm hover:bg-[#8F8065]/80 hover:scale-105 transition duration-200"
                                            onClick={() => setIsEditing(true)} // Start editing the counter offer
                                        >
                                            Make Counter Offer
                                        </button>
                                        <button
                                            className="bg-[#8F80651A] text-white w-1/2 md:text-base text-xs md:w-[45%] sm:w-[80%] px-4 lg:py-3 py-1.5 rounded-sm hover:bg-[#8F80651A]/80 hover:scale-105 transition duration-200"
                                            onClick={handleDecline} // Decline and close modal
                                        >
                                            Decline Offer
                                        </button>
                                        <button
                                            className="bg-[#90A3BF33] text-white w-1/2 md:text-base text-xs md:w-[45%] sm:w-[80%] px-4 lg:py-3 py-1.5 rounded-sm hover:bg-[#90A3BF33]/80 hover:scale-105 transition duration-200"
                                            onClick={handleAccept} // Accept offer and close modal
                                        >
                                            Accept Offer
                                        </button>
                                    </div>
                                )}
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

            {/* Success Modal */}
            
               {showSuccessModal && <SuccessModal  onClose={() => setShowSuccessModal(false)} />}
            
        </div>
    );
};

export default OfferModal;
