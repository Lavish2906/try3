import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/Components/ui/dialog"
import { Calendar, Car, CarFront } from "lucide-react"
import { Link } from "react-router-dom"

function AcknowledgementModal({ openModal, setIsDialogOpen }) {
    return (
        <Dialog open={openModal} onOpenChange={setIsDialogOpen}>
            <DialogTrigger />
            <DialogContent className="lg:w-[60%] lg:h-[90%]  h-[85%] md:h-[60%] justify-center p-0 flex flex-col  items-center md:w-[75%] w-[95%]  bg-[#171A21] border-1 border-[#8F8065] rounded-lg">
                <DialogHeader>
                    <DialogTitle className="text-center my-2.5 text-white font-bold md:text-3xl text-xl ">Acknowledgement</DialogTitle>
                    <DialogDescription>
                        <div className="md:w-[70%] w-[95%] text-[#ffffff]/70 text-lg mx-auto bg-[#1D2027] p-6">
                            <p className="text-[15px]">Following is the information for the deal price offered after negotiation or acceptance of listing price:</p>
                            <div className="h-40 bg-[#171A21] p-3 custom-scrollbar overflow-y-scroll">
                                <p className="text-center text-xs text-[#ffffff]/40">Acknowldgement</p>
                                <p className="text-xs text-[#ffffff]/40">Introduction</p>
                                <p className="text-xs text-[#ffffff]/40">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit voluptatibus officiis quod itaque. Accusamus facere eos at ipsam soluta consectetur officia repudiandae mollitia! Dignissimos recusandae voluptate quae tempore optio dolorum atque! Magnam libero dolorum velit sint rerum quasi recusandae quo eos ipsa cupiditate dolores reprehenderit sequi, veniam maxime, soluta esse.sit, amet consectetur adipisicing elit. Sit voluptatibus officiis quod itaque. Accusamus facere eos at ipsam soluta consectetur officia repudiandae mollitia! Dignissimos recusandae voluptate quae tempore optio dolorum atque! Magnam libero dolorum velit sint rerum quasi recusandae quo eos ipsa cupiditate dolores reprehenderit sequi, veniam maxime, soluta esse.</p>
                                <p className="text-xs text-[#ffffff]/40">Acknowldgment</p>
                                <p className="text-xs text-[#ffffff]/40">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit voluptatibus officiis quod itaque. Accusamus facere eos at ipsam soluta consectetur officia repudiandae mollitia! Dignissimos recusandae voluptate quae tempore optio dolorum atque! Magnam libero dolorum velit sint rerum quasi recusandae quo eos ipsa cupiditate dolores reprehenderit sequi, veniam maxime, soluta esse.sit, amet consectetur adipisicing elit. Sit voluptatibus officiis quod itaque. Accusamus facere eos at ipsam soluta consectetur officia repudiandae mollitia! Dignissimos recusandae voluptate quae tempore optio dolorum atque! Magnam libero dolorum velit sint rerum quasi recusandae quo eos ipsa cupiditate dolores reprehenderit sequi, veniam maxime, soluta esse.</p>
                            </div>
                            <div className="w-full px-2 flex items-center justify-between">
                                <p>Offered price</p>
                                <p className="font-bold text-white">460000000</p>
                            </div>
                            <div className="w-full px-2 flex items-center justify-between">
                                <p>Final price</p>
                                <p className="font-bold text-white">460000000</p>
                            </div>
                            <p className="text-xs p-1">User and Dealer agree that the negotiation was accomplished via Autoviton Platform. This agreement constitutes the entire understanding between both parties regarding the transaction details specified above.</p>

                            <div className="flex justify-center text-xs items-center mx-auto ">
                                <input
                                    type="checkbox"
                                    // checked={isChecked}
                                    // onChange={() => setChecked(!isChecked)}
                                    className="mr-1 lg:text-base text-sm "
                                />
                                <span>
                                    You agree to our{" "}
                                    <Link to="/" className="text-blue-400 lg:text-base text-sm ">
                                        privacy policy
                                    </Link>
                                </span>
                            </div>


                        </div>
                        <div className="w-full flex items-center my-1.5 justify-center">
                            <Link to="/book-testdrive">
                                <button className="bg-[#8F8065] rounded-sm cursor-pointer hover:bg-[#8F8065]/80 px-7 py-2 mx-auto text-white">Ok</button>
                            </Link>
                        </div>
                    </DialogDescription>
                </DialogHeader>
                {/* <button onClick={handleDialogClose}>Close</button> */}
            </DialogContent>
        </Dialog>
    )
}
export default AcknowledgementModal