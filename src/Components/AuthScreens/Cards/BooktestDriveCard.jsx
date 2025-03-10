import { useState } from "react";
import { Bookmark, Earth, Gauge, Fuel, GitGraph, Users } from "lucide-react";
import { Link } from "react-router-dom";

export const BookTestDriveCar = ({ img, name, type, fuel, gear, seat, price, year, kms, engine, location, details }) => {
    const [saved, setSaved] = useState(false);

    return (
        <Link to="/car-details">
            <div className={`w-full mx-auto bg-gray-900 border border-[#8F806552] text-white rounded-2xl overflow-hidden shadow-lg relative`}>
                <button
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-700"
                    onClick={() => setSaved(!saved)}
                >
                    <Bookmark size={20} className={saved ? "fill-white" : "fill-none"} />
                </button>
                <img
                    src={img}
                    alt="Car"
                    className="w-full h-54 object-cover"
                />

                <div className="p-4">
                    {/* Car Details */}
                    <div className="border-b-[0.1px] pb-3">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                            <h2 className="text-lg font-semibold text-center sm:text-left">{name}</h2>
                            <div className="flex items-center text-gray-400 text-sm mt-2 sm:mt-0">
                                <Earth className="h-2.5 w-2.5" />
                                <span className="ml-1">{location}</span>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm text-center sm:text-left">{year} • {engine} • {type} • {kms} • {type} • {gear} • {seat}</p>
                        {/* {details && <p className="text-gray-400 text-sm text-center sm:text-left">{kms} • {type} • {gear} • {seat}</p>} */}
                    </div>

                    {/* Price & Booking */}
                    <div className={`flex flex-row justify-between items-center mt-1`}>
                        <p>Limited time offer</p>
                        <p className="text-sm font-bold">-28000</p>
                    </div>
                    <div className={`flex flex-row justify-between items-center mt-1`}>
                        <p>Banking amount</p>
                        <p className="text-sm font-bold">280000</p>
                    </div>
                    <div className={`flex flex-row justify-between items-center mt-1`}>
                        <p>Balance amount</p>
                        <p className="text-sm font-bold">280000</p>
                    </div>

                   <div className="w-full flex justify-center items-center">
                        <p>2% of Lorem ipsum dolor sit amet.</p>
                   </div>
                </div>
                
            </div>
        </Link>
    );
};
