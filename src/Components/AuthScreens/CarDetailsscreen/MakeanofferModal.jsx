import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/Components/ui/dialog";

function MakeanOfferModal({ openModal, setIsDialogOpen, price }) {
  const [offerValue, setOfferValue] = useState("0"); // State to manage the editable offer value
  const [isEditing, setIsEditing] = useState(false); // Flag to control editing mode

  // Handle keypress events to update offer value
  const handleKeyPress = (e) => {
    if (e.key.match(/[0-9]/)) {
      setOfferValue((prevValue) => prevValue === "0" ? e.key : prevValue + e.key); // Prevent leading zeros
    } else if (e.key === "Backspace") {
      setOfferValue((prevValue) => (prevValue.length > 1 ? prevValue.slice(0, -1) : "0")); // Handle backspace
    }
  };

  // Set predefined offer value
  const setPredefinedOffer = (amount) => {
    setOfferValue(amount.toString());
  };

  useEffect(() => {
    if (isEditing) {
      // Listen for keypress when in editing mode
      document.addEventListener("keydown", handleKeyPress);

      return () => {
        document.removeEventListener("keydown", handleKeyPress);
      };
    }
  }, [isEditing]);

  return (
    <Dialog open={openModal} onOpenChange={setIsDialogOpen}>
      <DialogTrigger />
      <DialogContent className="w-[60%] bg-[#171A21] border-0 rounded-none">
        <DialogHeader>
          <DialogTitle className="text-center text-white font-bold text-3xl my-4">Make an offer</DialogTitle>
          <DialogDescription>
            <div className="flex flex-col items-center p-5 rounded">
              <div className="mb-4">
                <h1 className="text-lg font-semibold">Buy it now at Rs {price}</h1>
                <h5 className="text-center text-[#8F8065]">5 offers left</h5>
              </div>

              <h4>Your offer</h4>

              {/* Directly editable offer value */}
              <div
                className="text-4xl font-bold text-center bg-transparent p-3 w-full mb-4 focus-visible:hidden cursor-pointer"
                onClick={() => setIsEditing(true)} // Enable editing on click
              >
                {offerValue}
              </div>

              <p className="text-center mb-4 text-sm">Suggested offer: higher chances to book your Auto dream</p>

              {/* Predefined offer buttons */}
              <div className="flex justify-between items-center mb-4 w-full">
                <button
                  onClick={() => setPredefinedOffer(2000000)}
                  className="border-1 border-[#8F8065] mx-1 rounded-sm px-3 py-1 text-lg w-1/4"
                >
                  2,000,000
                </button>
                <button
                  onClick={() => setPredefinedOffer(2500000)}
                  className="border-1 border-[#8F8065] mx-1 rounded-sm px-3 py-1 text-lg w-1/4"
                >
                  2,500,000
                </button>
                <button
                  onClick={() => setPredefinedOffer(3000000)}
                  className="border-1 border-[#8F8065] mx-1 rounded-sm px-3 py-1 text-lg w-1/4"
                >
                  3,000,000
                </button>
                <button
                  onClick={() => setPredefinedOffer(3500000)}
                  className="border-1 border-[#8F8065] mx-1 rounded-sm px-3 py-1 text-lg w-1/4"
                >
                  3,500,000
                </button>
              </div>

              {/* Continue button */}
              <button className="w-[50%] bg-[#8F8065] text-white px-5 py-2 rounded-sm mt-4">
                Continue
              </button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default MakeanOfferModal;
