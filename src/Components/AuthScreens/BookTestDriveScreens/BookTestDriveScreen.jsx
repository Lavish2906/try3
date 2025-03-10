import { Images } from "@/assets/Images/Images";
import React, { useState } from "react";
import SuccessTestDrive from "./SuccesTestDrive";
import RevieExpereinceModal from "./ReviewExeperienceModal";

const BookTestDriveScreen = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [openSuccessModal, setOpenSuccessModal] = useState(false)
    const [openReviewModal, setOpenReviewModal] = useState(false)


    const dates = [
        { day: "2nd Jan", label: "Today" },
        { day: "3rd Jan", label: "Tomorrow" },
        { day: "4th Jan", label: "Sat" },
        { day: "5th Jan", label: "Sun" },
    ];

    const times = [
        "10AM - 11AM",
        "11AM - 12PM",
        "2PM - 3PM",
        "3PM - 4PM",
        "4PM - 5PM",
        "5PM - 6PM",
    ];

    return (
        <div className="min-h-screen bg-[#101115] flex items-center justify-center p-4">
            <div className="pb-20 lg:w-[45%] w-[80%] text-white">
                <div className="mb-4 p-6 flex md:flex-row flex-col shadow-lg bg-[#171A21] items-start rounded-lg">
                    <img
                        src={Images.textdrivecar}
                        alt="Audi Q7 Facelift"
                        className="w-85 rounded-lg"
                    />
                    <div className="flex flex-col lg:mx-0 md:mx-auto mx-0.5  pl-2">
                        <h2 className="md:text-xl text-sm font-semibold mt-2">Audi Q7 Facelift</h2>
                        <p className="md:text-sm text-sm">⭐ 3.9 (6 Reviews)</p>
                        <p className="md:text-lg text-sm font-bold mt-1">₹4500000</p>
                        <p className="md:text-sm text-sm">Average showroom price</p>
                    </div>
                </div>

                <div className="space-y-3">
                    <h3 className="mt-5 text-lg font-medium">Add address</h3>
                    <input
                        type="text"
                        placeholder="Street Address"
                        className="w-full p-2 rounded bg-[#171A21] border-1 border-gray-600 focus:outline-none"
                    />
                    <input
                        type="text"
                        placeholder="Locality"
                        className="w-full p-2 rounded bg-[#171A21] border-1 border-gray-600 focus:outline-none"
                    />
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="City"
                            className="w-1/3 p-2 rounded bg-[#171A21] border-1 border-gray-600 focus:outline-none"
                        />
                        <input
                            type="text"
                            placeholder="State / Province"
                            className="w-1/3 p-2 rounded bg-[#171A21] border-1 border-gray-600 focus:outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Zip Code"
                            className="w-1/3 p-2 rounded bg-[#171A21] border-1 border-gray-600 focus:outline-none"
                        />
                    </div>
                </div>

                <h3 className="mt-5 text-lg font-medium">Select Date</h3>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-2 mt-2">
                    {dates.map((date, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedDate(date.day)}
                            className={`p-2 md:py-7 rounded border text-center ${selectedDate === date.day ? "bg-[#1F1E1E] text-[#8F8065] border-[#8F8065]" : "bg-[#171A21] border-gray-600"
                                }`}
                        >
                            {date.day} <span className="block text-xs">{date.label}</span>
                        </button>
                    ))}
                </div>

                <h3 className="mt-5 text-lg font-medium">Select Time</h3>
                <div className="grid md:grid-cols-3 grid-cols-2 gap-4 mt-2">
                    {times.map((time, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedTime(time)}
                            className={`p-2 md:text-base text-xs rounded border text-center ${selectedTime === time ? "bg-[#1F1E1E] text-[#8F8065] border-[#8F8065]" : "bg-[#171A21] border-gray-600"
                                }`}
                        >
                            {time}
                        </button>
                    ))}
                </div>
                <div className="w-full flex items-center">
                    <button onClick={() => setOpenSuccessModal(true)} className="w-1/2 md:text-base text-xs py-3 px-3 mt-7 mx-auto text-white bg-[#8F8065] rounded font-semibold hover:bg-[#7a6e57]">
                        Schedule Test Drive
                    </button>
                </div>
            </div>
            <SuccessTestDrive openModal={openSuccessModal} openReviewModal={setOpenReviewModal}  setIsDialogOpen={setOpenSuccessModal}/>
            <RevieExpereinceModal openModal={openReviewModal} setIsDialogOpen={setOpenReviewModal}  />
        </div>
    );
};

export default BookTestDriveScreen;
