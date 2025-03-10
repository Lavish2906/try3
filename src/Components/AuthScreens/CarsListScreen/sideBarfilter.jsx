import { useState } from "react"; // Import useState hook
import { carFilters } from "@/Constants/carsFilters";
import { ChevronDown } from "lucide-react";

function SideBarfilter() {
    const [expandedFilters, setExpandedFilters] = useState(carFilters.map((_, index) => index)); // Start with the first filter open
 
    const toggleFilter = (index) => {
        setExpandedFilters((prevExpandedFilters) => {
            // If the filter is already expanded, remove it from the state to collapse
            if (prevExpandedFilters.includes(index)) {
                return prevExpandedFilters.filter((filterIndex) => filterIndex !== index);
            }
            // Otherwise, add it to the state to expand
            return [...prevExpandedFilters, index];
        });
    };
    return (
        <div className="bg-gradient-to-b md:overflow-auto overflow-auto h-screen pb-10 transition-all duration-300 ease-in-out from-[#171A21CC] via-[#171A21CC] to-[#171A21A0] border-1 border-r-white w-72 px-3">
            <div>
                {carFilters.map((filter, index) => (
                    <div key={index}>
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleFilter(index)}
                        >
                            <p className="text-[#90A3BF]">{filter.label}</p>
                            <ChevronDown color="white" fill="white"
                                className={`h-3 w-3 transform transition-transform ${expandedFilters.includes(index) ? "rotate-180" : ""
                                    }`}
                            />
                        </div>
                        {/* Conditional rendering based on the expanded state */}
                        {expandedFilters.includes(index) && (
                            <div className="ml-4">
                                {filter.type === "select" && (
                                    <select className="border-1 border-[#ccc] rounded-lg px-4 text-white my-3 py-1 ">
                                        {filter.options.map((option, i) => (
                                            <option key={i} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                )}
                                {filter.type === "checkbox" && (
                                    <div>
                                        {filter.options.map((option, i) => (
                                            <div key={i}>
                                                <input
                                                    type="checkbox"
                                                    id={option}
                                                    value={option}
                                                />
                                                <label className="pl-3 text-white text-sm" htmlFor={option}>{option}</label>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default SideBarfilter