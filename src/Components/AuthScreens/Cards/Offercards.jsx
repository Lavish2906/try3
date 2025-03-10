import { useState } from "react";
import { Images } from "@/assets/Images/Images";
import { Import, MapPin } from "lucide-react";
import OfferModal from "../Profile/OfferModal";

function OfferCard({ name, offerActive, dealer, location, doffer, boffer, offerDate }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle opening the modal and passing necessary data to it
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }; 

  return (
    <div className="flex bg-[#171A21] lg:flex-row flex-col lg:my-3 my-5 md:p-4 p-2 rounded-sm" >
      <img className="lg:w-100 w-full rounded-sm" src={Images.offercar} alt="Offer Image" />
      <div className="w-full md:px-5 px-2 py-2">
        <div className="flex justify-between">
          <h1 className="lg:text-3xl md:text-2xl text-base text-white font-bold">{name}</h1>
          <button onClick={handleOpenModal} className={` ${offerActive === "Active" ? "bg-[#8F8065] cursor-pointer" : ""} md:px-4 px-1 md:py-1n md:text-base text-xs rounded-sm md:rounded-full`}>
            {offerActive}
          </button>
        </div>
        <div className="flex items-center">
          <h4 className="md:text-xl text-sm text-white">{dealer}</h4>
          <div className="flex items-center mx-2">
            <MapPin color="#8B8C90" className="md:h-4 md:w-4 h-2.5 w-2.5" />
            <p className="text-[#8B8C90] md:text-base text-xs ml-0.5">{location}</p>
          </div>
        </div>
        <p className="text-[#8B8C90] md:text-base text-xs">Offer placed on : {offerDate}</p>
        <div className="flex lg:mt-11 md:mt-3 mt-1.5 lg:w-1/2 w-full justify-between">
          <div className="flex flex-col items-center">
            <p className="text-[#8B8C90] ">Your offer</p>
            <p className="md:text-3xl text-base text-white md:font-bold">{boffer}</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#8B8C90] ">Counter offer</p>
            <p className="md:text-3xl text-base text-white md:font-bold">{doffer}</p>
          </div>
        </div>
      </div>

      {/* Conditionally render the OfferModal */}
      {isModalOpen && (
        <OfferModal
          isOpen={isModalOpen}
          deal={{ name, offerActive, dealer, location, doffer, boffer, offerDate }}
          onClose={handleCloseModal} // Make sure to pass a close function
        />
      )}
    </div>
  );
}

export default OfferCard;
