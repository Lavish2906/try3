import { Images } from "@/assets/Images/Images";
import { Bookmark, Facebook, Instagram, Star, Twitter } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import DealerCard from "../Cards/DealerCard";
import MakeanOfferModal from "./MakeanofferModal";
import TestDriveModal from "./TestDriveModal";
import { useStateContext } from "@/Context/ContextProvider";
import AcknowledgementModal from "./AcknowledgmentModal";
import LoginModal from "@/Components/UnAuthScreen/LoginModal";

const CarImageWithDetails = () => {
    const [selectedImage, setSelectedImage] = useState("/car1.jpg");
    const price = 2285000;
    const [modelOpen, setModelOpen] = useState(false)
    const [testDriveModalOpen, setTestDriveModalOpen] = useState(false)
    const [acknowldgementModalOpen, setAcknowldgementModalOpen] = useState(false)
    const [logInModalOpen, setIsLogModalOpen] = useState(false)
    const images = [
        Images.carp1,
        Images.carp2,
        Images.carp3,
        Images.carp4,
        Images.carp4,
    ];
    const {screenSize, isLoggedIn, setIsLoggedIn} = useStateContext()

    function handleBookNowClick(){
        if(!isLoggedIn){
            setIsLogModalOpen(true)
        }
        else{
            setAcknowldgementModalOpen(true)
        }
    }
    return (
        <div className={`text-white ${screenSize < 900 ? "px-2 flex-col  items-center" : "flex-row items-start"}  flex`}>
            {/* Car Image & Details */}
            <div className={`${screenSize < 900 ? "w-full" : "w-[65%]"}  p-5 shadow-lg`}>
                {/* Large Car Image */} 
                <img
                    src={Images.carm}
                    alt="Car"
                    className="w-full h-full rounded-lg object-contain"
                /> 
                <div className="flex justify-between mt-1">
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt="Car Thumbnail"
                            className={`w-[19%] object-cover rounded-lg cursor-pointer ${selectedImage === img ? "border-4 border-yellow-500" : ""
                                }`}
                            onClick={() => setSelectedImage(img)}
                        />
                    ))}
                </div>
            </div>

            <div className={`${screenSize < 900 ? "w-full" : "w-[35%] "}  px-4`}>
                <div className="p-4 border-1 rounded-lg mt-5">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-xl font-semibold">2023 Honda City ZX</h2>
                            <p className="text-gray-400">Reg. Year: 2023</p>
                        </div>
                        <Bookmark color="white" />
                    </div>

                    <div className="mt-9">
                        <div>
                            <div className="flex justify-between my-2 items-center">
                                <p className="text-xl text-white">Dealer's offer: </p>
                                <p className="text-lg font-bold text-white">₹ {price}</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-sm text-white">Mileage: </p>
                                <p className="text-lg text-white">15</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-sm text-white">Fuel type: </p>
                                <p className="text-lg text-white">Petrol</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-sm text-white">Test drive:</p>
                                <p className="text-lg text-green-500">available</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-6 mb-2 gap-3">
                            <button onClick={handleBookNowClick} className="bg-[#8F8065] w-[45%] text-white px-4 py-2 rounded-sm font-semibold hover:bg-yellow-600 transition">
                                Book Now
                            </button>
                            <button onClick={()=>setModelOpen(true)} className="bg-gray-700  w-[45%] px-4 py-2 rounded-sm hover:bg-gray-600">
                                Make an Offer
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex my-6 mx-auto">
                    <p>Share with your friends</p>
                    <Facebook />
                    <Instagram />
                    <Twitter />
                </div>

               <DealerCard />
            </div>
            <LoginModal closeModal={()=>setIsLogModalOpen(false)} openModal={logInModalOpen} setIsDialogOpen={setIsLogModalOpen} />
            <MakeanOfferModal openModal={modelOpen} price={price} setIsDialogOpen={setModelOpen} />
            <TestDriveModal openModal={testDriveModalOpen} setIsDialogOpen={setTestDriveModalOpen} />
            <AcknowledgementModal openModal={acknowldgementModalOpen} setIsDialogOpen={setAcknowldgementModalOpen}  />
        </div>
    );
};

export default CarImageWithDetails;
