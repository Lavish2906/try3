import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/Components/ui/dialog"
import { useState } from "react"
import { CircleCheck } from "lucide-react";

const plans = [
    {
        name: "Basic",
        subtitle: "Explore for Free",
        price: "Free",
        features: [
            "Browse car listings",
            "View basic car details",
            "Save up to 3 cars in favorites",
            "Email inquiries to sellers",
        ],
    },
    {
        name: "Premium",
        subtitle: "Premium Experience",
        price: "Rs 5000",
        features: [
            "Everything in Free Plan +",
            "Access detailed car specifications",
            "Compare up to 5 cars side-by-side",
            "Get personalized recommendations",
            "24/7 priority email support",
        ],
    },
    {
        name: "Gold",
        subtitle: "Gold Luxury",
        price: "Rs 7000",
        features: [
            "Everything in Premium Plan +",
            "Virtual tours of cars",
            "Exclusive access to rare car listings",
            "Connect directly with sellers via live chat",
            "Free assistance with car financing",
        ],
    },
];
function SubscriptionModal({ openModal, setIsDialogOpen }) {
    const [billingCycle, setBillingCycle] = useState("monthly");
    return (
        <Dialog open={openModal} onOpenChange={setIsDialogOpen}>
            <DialogTrigger />
            <DialogContent className=" w-[80%] p-0 bg-transparent py-0 m-0 border-0 rounded-none">
                <DialogHeader>
                    <DialogTitle />
                    <DialogDescription>
                       
                            <div className="bg-[#101115] rounded-lg pb-2 text-white">
                                <div className="text-center mb-8">
                                    <div className="md:w-[50%] w-full mx-auto">
                                        <h2 className="lg:text-2xl md:text-xl text-base font-semibold">Discover our Best Pricing</h2>
                                        <p className="text-gray-400 md:text-base text-sm mt-2">
                                            Select from the best plan, ensuring a perfect match. Need more or less?
                                            Customize your subscription for a seamless fit!
                                        </p>
                                    </div>
                                    <div className="mt-4 flex justify-center">
                                        <button
                                            className={`px-4 py-2 md:text-sm text-xs rounded-l-lg ${billingCycle === "monthly" ? "bg-[#8F8065]" : "bg-gray-700"}`}
                                            onClick={() => setBillingCycle("monthly")}
                                        >
                                            Monthly
                                        </button>
                                        <button
                                            className={`px-4 py-2 md:text-sm text-xs rounded-r-lg ${billingCycle === "annually" ? "bg-[#8F8065]" : "bg-gray-700"}`}
                                            onClick={() => setBillingCycle("annually")}
                                        >
                                            Annually
                                        </button>
                                    </div>
                                </div>
                                <div className="overflow-y-auto max-h-[500px] sm:max-h-[700px] md:max-h-[none] grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                                    {plans.map((plan, index) => (
                                        <div
                                            key={index}
                                            className="bg-[#1E2128] md:p-6 p-2 rounded-lg shadow-lg flex flex-col "
                                        >
                                            <h3 className="md:text-xl text-base font-semibold">{plan.name}</h3>
                                            <p className="text-gray-400 text-sm">{plan.subtitle}</p>
                                            <p className="md:text-2xl text-lg font-bold mt-2 md:mt-4">{plan.price}</p>
                                            <button className="md:mt-4 mt-2 bg-gray-700 px-6 py-2 rounded-lg md:w-full w-[50%] mx-auto hover:bg-gray-600">
                                                Get Started
                                            </button>
                                            <ul className="mt-4 text-gray-400 text-sm w-full">
                                                <h5 className="text-white text-[9px] mb-1">What will you get</h5>
                                                {plan.features.map((feature, i) => (
                                                    <li key={i} className="flex items-center py-1.5 gap-2">
                                                        <CircleCheck className="w-2 h-2" /> <p className="text-white/80 text-[6.65px] ">{feature}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        
                    </DialogDescription>
                </DialogHeader>
                {/* <button onClick={handleDialogClose}>Close</button> */}
            </DialogContent>
        </Dialog>
    )
}
export default SubscriptionModal