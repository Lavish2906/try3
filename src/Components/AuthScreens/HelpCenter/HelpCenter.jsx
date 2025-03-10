import { useState } from "react";
import { Search, ShoppingCart, Tag, User } from "lucide-react";
import AudiCoverRegCard from "../Cards/AudiCoverRegCard";

function HelpCenter() {
    const [activeButton, setActiveButton] = useState("");

    // Function to handle button click and set the active button
    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    return (
        <div className="w-full text-white py-7 pb-270 h-screen bg-[#101115]">
            <div className="w-[85%] mx-auto">
                <h1 className="mb-3 text-2xl font-bold">How can we help you today?</h1>
                <div className="flex w-full rounded-full border-1 pr-1 pl-5 py-2 border-[#8F806580] bg-[#171A21] justify-between items-center">
                    <input placeholder="Search by car names.." />
                    <Search className="bg-[#8F8065] p-1 h-8 w-8 rounded-full" />
                </div>
            </div>

            {/* Button Section */}
            <div className="w-[80%] mx-auto flex mt-6">
                <div
                    className={`flex border-1 px-7 mx-5 w-75 cursor-pointer py-7 rounded-lg justify-center items-center ${activeButton === "buying" ? "border-[#8F8065] text-[#8F8065]" : "border-[#ccc] text-white"
                        }`}
                    onClick={() => handleButtonClick("buying")}
                >
                    <ShoppingCart
                        className={`${activeButton === "buying" ? "text-[#8F8065]" : "text-white"
                            }`}
                    />
                    <p
                        className={`${activeButton === "buying" ? "text-[#8F8065]" : "text-white"
                            }`}
                    >
                        Buying
                    </p>
                </div>
                <div
                    className={`flex border-1 px-7 mx-5 w-75 cursor-pointer py-7 rounded-lg justify-center items-center ${activeButton === "selling" ? "border-[#8F8065] text-[#8F8065]" : "border-[#ccc] text-white"
                        }`}
                    onClick={() => handleButtonClick("selling")}
                >
                    <Tag
                        className={`${activeButton === "selling" ? "text-[#8F8065]" : "text-white"
                            }`}
                    />
                    <p
                        className={`${activeButton === "selling" ? "text-[#8F8065]" : "text-white"
                            }`}
                    >
                        Selling
                    </p>
                </div>
                <div
                    className={`flex border-1 px-7 mx-5 w-75 cursor-pointer py-7 rounded-lg justify-center items-center ${activeButton === "account" ? "border-[#8F8065] text-[#8F8065]" : "border-[#ccc] text-white"
                        }`}
                    onClick={() => handleButtonClick("account")}
                >
                    <User
                        className={`${activeButton === "account" ? "text-[#8F8065]" : "text-white"
                            }`}
                    />
                    <p
                        className={`${activeButton === "account" ? "text-[#8F8065]" : "text-white"
                            }`}
                    >
                        Account
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="w-[85%] mx-auto mt-12 flex justify-between items-start">
                <div className="w-[25%]">
                    <ul>
                        <li className="my-2">Lorem ipsum dolor sit.</li>
                        <li className="my-2">Lorem ipsum dolor sit.</li>
                        <li className="my-2">Lorem ipsum dolor sit.</li>
                        <li className="my-2">Lorem ipsum dolor sit.</li>
                    </ul>
                </div>
                <div className="w-[70%]">
                    <p className="text-sm mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Architecto totam laudantium vero fugit atque illum ullam sint neque
                        reiciendis nulla, facere placeat culpa ex adipisci eum delectus?
                        Quae, non ab.
                    </p>
                    <p className="text-sm mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Architecto totam laudantium vero fugit atque illum ullam sint neque
                        reiciendis nulla, facere placeat culpa ex adipisci eum delectus?
                        Quae, non ab.
                    </p>
                    <p className="text-sm mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Architecto totam laudantium vero fugit atque illum ullam sint neque
                        reiciendis nulla, facere placeat culpa ex adipisci eum delectus?
                        Quae, non ab.
                    </p>
                </div>
            </div>
            <AudiCoverRegCard />
        </div>
    );
}

export default HelpCenter;
