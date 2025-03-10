import { useState } from "react";
import { Bookmark, MapPin, MoveUpRightIcon, Star } from "lucide-react";
import { Images } from "../../../assets/Images/Images";
import { Link } from "react-router-dom";

const WishListCarCard = ({ img, name, carId, onCompareChnage ,type, fuel, gear, seat, price, year, kms, engine, location, details, width, list , compare}) => {
    const [isChecked, setIsChecked] = useState(false)
    function handleCheckBoxChange(e){
        const selected = e.target.checked
        setIsChecked(selected)
        onCompareChnage(carId, selected)
    }
    return ( 
        // <Link to="/car-details">
        <>
            {/* chnaged the fle direction and the width of the card md:w-78  */}
            <div className={`flex ${list ? "flex-row w-full my-4" : "flex-col lg:w-78"} bg-[#171A21] border-1 border-[#8F806552] text-white rounded-2xl w-full mr-2 overflow-hidden p-4 shadow-lg relative `}>
               {compare && <div className="pb-2 flex items-center">
                    <input type="checkbox" id={`compare-${carId}`} checked={isChecked} onChange={handleCheckBoxChange} name="compare" className="mr-2" />
                    <label htmlFor="compare" className="text-white text-sm">Compare</label>
                </div>}
                <img
                    src={Images.wishlistcar}
                    alt="Car"
                    className="object-contain"
                />
                {/* and changed the width added the flex flex-col and justify between and also will have to add the px */}
                {/* w-1/3 flex flex-col justify-between px-3 */}
                <div className={`${list ? "lg:w-1/3 w-full flex flex-col justify-between px-3 " : ""}`} >
                    <div className="flex flex-row justify-between items-center">
                        <h2 className="lg:text-2xl md:text-lg text-sm">{name}</h2>
                    </div>
                    <div className="flex lg:my-2 my-0.5 text-sm">
                        <div className="flex items-center px-1 bg-[#BFA45E] mr-4">
                            <Star fill="white" className="h-3 w-3 mx-0.5" />
                            <p className="lg:text-base md:text-sm text-xs">5</p>
                        </div>
                        <p className="mx-2">6 Reviews</p>
                    </div>
                    <div>
                        <p className="lg:text-base md:text-sm text-xs">2400000</p>
                        <p className="lg:text-base md:text-sm text-xs">Average Showroom price</p>
                    </div>
                    <div className={`flex items-center ${compare && list ? "lg:flex-row md:flex-col" : "flex-row"} justify-between mt-4`}>
                        <button className="bg-[#8F8065] w-1/2 px-4 py-2 lg:text-base text-xs rounded-sm text-white font-semibold hover:bg-[#8F8065]/90">
                            Book Now
                        </button>
                        <div className="flex items-center border-b-1 border-b-[#8F8065]">
                            <a className="text-[#8F8065] md:text-sm text-xs">View details</a>
                            <MoveUpRightIcon color="#8F8065" className="md:h-4 h-3 w-3 md:w-4 mx-1" />
                        </div>
                    </div>
                </div>
            </div>
            </>
        // </Link>
    );
};

export default WishListCarCard;
