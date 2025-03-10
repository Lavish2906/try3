import { useState } from "react";
import Accordian from "./Accordian";
// import { useStateContext } from "@/Context/ContextProvider";


const accordionData = [
    {
        id: 1,
        question: "What is the Luxury Car Vendor Panel?",
        answer: "The Luxury Car Vendor Panel is a platform that connects luxury car manufacturers with authorized dealerships, enabling them to manage their inventory, customer interactions, and sales data efficiently. It offers various tools for pricing, availability, and vendor management."
    },
    {
        id: 2,
        question: "How can I register as a vendor?",
        answer: "To register as a vendor, visit the 'Vendor Registration' page on the Luxury Car Vendor Panel. You will need to provide company details, car inventory data, and a valid license for verification. After successful approval, you will gain full access to the platform."
    },
    {
        id: 3,
        question: "What are the benefits of joining the Vendor Panel?",
        answer: "Joining the Vendor Panel provides access to exclusive sales data, inventory management tools, performance analytics, and special promotions. It also allows direct interaction with customers interested in purchasing luxury vehicles."
    },
    {
        id: 4,
        question: "How can I update my inventory?",
        answer: "You can update your inventory through the 'Inventory Management' section of the Vendor Panel. There, you can add new vehicles, update pricing, mark cars as sold, and track stock levels in real-time."
    },
    {
        id: 5,
        question: "Is there a commission fee for each sale?",
        answer: "Yes, the platform charges a small commission fee on each successful sale made through the panel. This fee varies depending on the vehicle type and the sales volume. Detailed fee structures are available in the 'Pricing' section of the Vendor Panel."
    }
];

function Faq() {
    // const {screenSize} = useStateContext()
    const [openIndex, setOpenIndex] = useState()

    function handleOnClickAccordian(index) {
        setOpenIndex(prevIndex => prevIndex === index ? null : index)
    }

    return (
        // <div className={`p-6 mt-${screenSize < 768 ? 10 : 0}`}>
        <div className={`p-6`}>

            <div className="lg:w-9/10 md:w-full mx-auto">
                <h1 className="text-[#8F8065] text-lg md:text-xl">Frequnetly asked questions</h1>
                {accordionData.map((item, index) => (
                    <Accordian onClick={() => handleOnClickAccordian(index)} isOpen={openIndex === index} key={item.id} question={item.question} index={index} answer={item.answer} id={item.id} />
                ))}
            </div>
        </div>
    )
}
export default Faq