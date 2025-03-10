import { Images } from "@/assets/Images/Images";
import React from "react";
 
const cars = [
  {
    id: 1,
    image: Images.compcar1,
    name: "2023 Honda City ZX",
    regYear: 2023,
    owners: 4,
    price: "₹ 22,85,000",
    showroomPrice: "Rs 6.79 Lakhs Onwards",
    rating: "4.5/5 (12 Ratings)",
    mileage: "24.77 to 33.73",
    engineCC: 1197,
    fuelType: "Petrol and CNG",
    transmission: "Manual and Automatic",
  },
  {
    id: 2,
    image: Images.compcar2,
    name: "2023 Honda City ZX",
    regYear: 2023,
    owners: 4,
    price: "₹ 22,85,000",
    showroomPrice: "Rs 5.65 Lakhs Onwards",
    rating: "4.5/5 (12 Ratings)",
    mileage: "24.77 to 33.73",
    engineCC: 1988,
    fuelType: "Petrol",
    transmission: "Manual and Automatic",
  },
  {
    id: 3,
    image: Images.compcar3,
    name: "2023 Honda City ZX",
    regYear: 2023,
    owners: 4,
    price: "₹ 22,85,000",
    showroomPrice: "Rs 5.65 Lakhs Onwards",
    rating: "4.5/5 (12 Ratings)",
    mileage: "24.77 to 33.73",
    engineCC: 1988,
    fuelType: "Petrol",
    transmission: "Manual and Automatic",
  },
];

const CarComparison = () => {
  return (
    <div className="container px-[10%] mx-auto p-4 bg-[#101115]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cars.map((car) => (
          <div
            key={car.id}
            className=" text-white p-4 rounded-lg shadow-md"
          >
            <img src={car.image} alt={car.name} className="w-50 object-contain " />
            <h2 className="text-lg font-semibold mt-2">{car.name}</h2>
            <p>Reg. Year: {car.regYear}</p>
            <p>Number of owners: {car.owners}</p>
            <p className="text-xl font-bold mt-2">{car.price}</p>
            <div>
            <p className="text-gray-400">Average showroom Price</p> 
            <p>{car.showroomPrice}</p>
            </div>
            <div className="my-4">
            <p className="text-gray-400">User Ratings</p> 
            <p> {car.rating}</p>
            </div>
            <div className="my-4">
            <p className="text-gray-400">Mileage ARAI</p> 
            <p>{car.mileage}</p>
            </div>
            <div className="my-4">
            <p className="text-gray-400">Engine CC</p> 
            <p>{car.engineCC}</p>
            </div>
            <div className="my-4">
            <p className="text-gray-400">Fuel Type</p> 
            <p>{car.fuelType}</p>
            </div>
            <div className="my-4">
            <p className="text-gray-400">Transmission</p> 
            <p>{car.transmission}</p>
            </div>
            <button className="w-[100%] cursor-pointer mx-auto bg-[#8F8065] text-white rounded-sm py-3">View Car Details</button>
            <button className="underline cursor-pointer text-white w-full">Clear All</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarComparison;
