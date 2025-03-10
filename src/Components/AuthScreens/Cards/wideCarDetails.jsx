import { useState } from "react";
import { Bookmark, Earth, Gauge, Fuel, GitGraph, Users } from "lucide-react";
import { Link } from "react-router-dom";

export const WideCarCard = ({ img, name, type, fuel, gear, seat, price, year, kms, engine, location, details }) => {
    const [saved, setSaved] = useState(false);

    return (
        <Link to="/car-details">
            <div className={`w-full mx-auto sm:w-[300px] md:w-[400px] lg:w-[500px] bg-gray-900 border border-white text-white rounded-2xl overflow-hidden shadow-lg relative`}>
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
                        <p className="text-gray-400 text-sm text-center sm:text-left">{year} • {engine} • {type}</p>
                        {details && <p className="text-gray-400 text-sm text-center sm:text-left">{kms} • {type} • {gear} • {seat}</p>}
                    </div>

                    {/* Specs */}
                    {!details && (
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center mt-4 text-sm border-b-1 p-3">
                            <div className="flex flex-col items-center justify-center">
                                <Gauge className="h-4.5 w-4.5" />
                                <p className="font-semibold">{kms} Miles</p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <Fuel className="h-4.5 w-4.5" />
                                <p className="font-semibold">{fuel}</p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <GitGraph className="h-4.5 w-4.5" />
                                <p className="text-gray-400">{gear}</p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <Users className="h-4.5 w-4.5" />
                                <p className="text-gray-400">{seat}</p>
                            </div>
                        </div>
                    )}

                    {/* Price & Booking */}
                    <div className={`flex flex-col sm:flex-row justify-between items-center mt-4`}>
                        <button className="bg-[#8F8065] px-6 py-2 rounded-sm text-white font-semibold hover:bg-[#8F8065]/90 mb-3 sm:mb-0">
                            Book Now
                        </button>
                        <button className="bg-[#4F5D61] px-6 py-2 rounded-sm text-white font-semibold hover:bg-[#8F8065]/90">
                            View details
                        </button>
                    </div>

                    <div className="flex flex-row justify-between items-end mt-4">
                        <p className="text-3xl font-bold">₹ <span className="text-6xl">{price}</span> Lakhs</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};
