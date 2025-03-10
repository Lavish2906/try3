import { BadgeDollarSign, Bookmark, Camera, CarFront, CircleHelp, icons, LogOut, LogOutIcon, MessageSquareQuote, Phone, StickyNote, User, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useStateContext } from "@/Context/ContextProvider";
import { useState } from "react";
import LoginModal from "@/Components/UnAuthScreen/LoginModal";
function SideBar() {
    const { isActive, setIsActive, screenSize, setScreenSize, } = useStateContext();
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const handleCloseSideBar = () => {
        if (isActive && screenSize <= 900) {
            setIsActive(false);
        }
    }
    function handleDialogOpen(){
        setIsDialogOpen(true)
    }

    return (
        <aside
            className={`ml-3 h-full md:overflow-auto overflow-auto md:hover:overflow-auto pb-10 transition-all duration-300 ease-in-out ${isActive ? "fixed top-0 right-0 z-50 bg-[#171A21]" : "hidden"} `}
        >
            <>
                <div className="justify-end flex mt-4">
                    <X className="mr-2" onClick={() => setIsActive(false)} color="white" />
                </div>
                <div className="flex flex-row items-center px-6 mt-4">
                    <div className="h-8 w-8 rounded-full flex justify-center items-center bg-[#8F8065]">
                        <Camera color="white" className="h-4 w-4" />
                    </div>
                    <NavLink to="/profile"
                        onClick={handleCloseSideBar}
                        className={({ isActive }) =>
                            isActive
                                ? "flex items-center gap-3 rounded-full px-3 py-2 w-55 text-sm font-medium bg-[#8F8065]" // Golden background when active
                                : "flex items-center gap-3 rounded-full px-3 py-2 w-55 text-sm font-medium hover:bg-neutral-800"
                        } >
                        <div className="text-white text-sm ml-2">User profile</div>
                    </NavLink>
                </div>

            </>
            <nav className="space-y-1 px-3 py-4 mt-13 flex-col items-center">

                {[
                    { icon: <CarFront className="h-3 w-3" />, label: "Cars", path: "/" },
                    { icon: <CircleHelp className="h-3 w-3" />, label: "How it works", path: "/how-it-works" },
                    { icon: <CarFront className="h-3 w-3" />, label: "Purchased history", path: "/car-purchased-history" },
                    { icon: <Bookmark className="h-3 w-3" />, label: "Wishlist", path: "/wishlist" },
                    { icon: <BadgeDollarSign className="h-3 w-3" />, label: "Subscription history", path: "/purchased-history" },
                    { icon: <Phone className="h-3 w-3" />, label: "Contact us", path: "/contact-us" },
                    { icon: <CircleHelp className="h-3 w-3" />, label: "Faq", path: "/faq" },
                    { icon: <User className="h-3 w-3" />, label: "About us", path: "/about-us" },
                    { icon: <StickyNote className="h-3 w-3" />, label: "Terms & conditions", path: "/terms-conditions" },
                    { icon: <MessageSquareQuote className="h-3 w-3" />, label: "News & Updates", path: "/news" },

                ].map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.path}
                        onClick={handleCloseSideBar}
                        className={({ isActive }) =>
                            isActive
                                ? "flex items-center gap-3 rounded-full px-3 py-2 w-55 text-sm font-medium bg-[#8F8065]" // Golden background when active
                                : "flex items-center gap-3 rounded-full px-3 py-2 w-55 text-sm font-medium hover:bg-neutral-800"
                        }
                    >
                        {item.icon}
                        {item.label}
                    </NavLink>
                ))}
                <NavLink className={({ isActive }) =>
                    isActive
                        ? "flex items-center gap-3 rounded-full px-3 py-2 w-55 text-sm font-medium "
                        : "flex items-center gap-3 rounded-full px-3 py-2 w-55 text-sm font-medium hover:bg-neutral-800"
                }
                onClick={handleDialogOpen} >
                    <LogOutIcon className="h-3 w-3" />
                    <div className="text-white text-sm ml-2">Logout</div>
                </NavLink>
            </nav>
            <LoginModal openModal={isDialogOpen} setIsDialogOpen={handleDialogOpen} />
        </aside>
    );
}

export default SideBar;
