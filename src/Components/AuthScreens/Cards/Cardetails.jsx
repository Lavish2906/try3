import { useState } from "react";
import { Bookmark, MapPin } from "lucide-react";
import { Images } from "../../../assets/Images/Images";
import { Earth, Gauge, Fuel, Users, GitGraph } from "lucide-react";
import { Link } from "react-router-dom";

const CarCard = ({ img, name, type, fuel, gear, seat, price, year, kms, engine, location, details, width }) => {
    const [saved, setSaved] = useState(false);
 
    return (
        <Link to="/car-details">
        <div className={`w-full sm:w-56 md:w-64 lg:w-72 bg-gray-900 border-1 border-white text-white rounded-2xl overflow-hidden shadow-lg relative `}>
            <button
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-700"
                onClick={() => setSaved(!saved)}
            >
                <Bookmark size={20} className={saved ? "fill-white" : "fill-none"} />
            </button>
            <img
                src={img}
                alt="Car"
                className="w-full h-44 sm:h-48 md:h-50 lg:h-60 object-cover"
            />

            <div className="p-2">

                {/* Car Details */}
                <div className=" border-b-[0.1px] pb-3" >
                    <div className="flex flex-row justify-between items-center">
                        <h2 className="md:text-lg text-xs font-semibold">{name}</h2>
                        <div className="flex md:ml-0 ml-2.5 items-center text-gray-400 text-[9px]">
                            <Earth className="md:h-2.5 md:w-2.5 h-1.5 w-1.5" />
                            <span className="md:ml-1 ml-0.5">{location}</span>
                        </div>
                    </div>
                    <p className="text-gray-400 text-xs">{year} • {engine} • {type}</p>
                    {
                        details && <p className="text-gray-400 text-xs">{kms} • {type} • {gear} • {seat}</p>
                }
                </div>
                {/* Specs */}
                {!details && <div className="grid grid-cols-4 gap-2 text-center md:mt-3 mt-1 text-xs border-b-1 p-1 md:p-2">
                    <div className="flex flex-col items-center justify-center">
                        <Gauge className="md:h-4.5 md:w-4.5 h-2.5 w-2.5" />
                        <p className="md:text-sm text-[10px]">{kms} Miles</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Fuel className="md:h-4.5 md:w-4.5 h-2.5 w-2.5" />
                        <p className="md:text-sm text-[10px]">Petrol</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <GitGraph className="md:h-4.5 md:w-4.5 h-2.5 w-2.5" />
                        <p className="text-gray-400 md:text-sm text-[10px]">{gear}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Users className="md:h-4.5 md:w-4.5 h-2.5 w-2.5" />
                        <p className="text-gray-400 md:text-sm text-[10px]">{seat}</p>
                    </div>
                </div>}



                {/* Price & Booking */}
                <div className={`flex ${details && 'flex-col'} ${!details && 'items-center'} justify-between mt-1 md:mt-4`}>
                    <div className="flex flex-row justify-between items-end">
                    <p className="md:text-xl text-sm font-bold">₹ <span className="md:text-3xl text-xl">{price}</span> Lakhs</p>
                   {details && <a className="text-[9px]">View details</a>}
                    </div>
                    <button className="bg-[#8F8065] md:px-4 md:py-2 px-2 py-1 rounded-lg text-white md:text-base text-xs font-semibold hover:bg-[#8F8065]/90">
                        Book Now
                    </button>
                </div>
            </div>

        </div>
        </Link>
    );
};

export default CarCard;
