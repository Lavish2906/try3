import { Images } from "../../../assets/Images/Images";
import { Search, Bookmark, AlertTriangle, Sidebar, AlignCenter, AlignJustify } from "lucide-react";
import { Bell } from "lucide-react";
import { UserCircle2Icon } from "lucide-react";
import { Save } from "lucide-react";
import { useContext, useState } from "react"; // Import useState
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/Components/ui/dropdown-menu";
import LoginModal from "@/Components/UnAuthScreen/LoginModal";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogOverlay } from "@/Components/ui/dialog";
import LogoutModal from "./LogoutModal";
import SearchBoxDropDown from "./SearchBoxDropDown";
import { useEffect } from "react";
import { useStateContext } from "@/Context/ContextProvider";
function Header() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const { isActive, setIsActive, screenSize, setScreenSize, } = useStateContext()

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth)
        window.addEventListener("resize", handleResize)
        handleResize()
        console.log(screenSize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    useEffect(() => {
        if (screenSize < 900) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [screenSize])
    const handleDialogOpen = () => {
        setIsDialogOpen(true);
    };

    const handleDialogClose = () => {
        setIsDialogOpen(false);
    };

    return (
        <>
            <div className="bg-[#171A21] w-full flex justify-between sticky top-0 z-40 items-center py-2 px-4">
                <Link to="/">
                    <div className="flex items-center">
                        <img
                            src={Images.avLogo}
                            alt="Logo"
                            className="w-20 md:w-20 lg:w-26"
                        />
                        <img
                            src={Images.autoViton}
                            alt="AutoViton"
                            className="w-20 md:w-28 lg:w-36"
                        />
                    </div>
                </Link>
                {screenSize > 900 ? <div className="w-[40%]">
                    {!isSearchOpen && <div className="flex items-center justify-between">
                        <p className="text-[#48494C] mx-2">Cars</p>
                        <p className="text-[#48494C] mx-2">Vendor's Hub</p>
                        <Link to="/how-it-works"><p className="text-[#48494C] mx-2 cursor-pointer">How it works</p></Link>
                        <p className="text-[#48494C] mx-2">Contact us</p>
                    </div>}
                    {isSearchOpen &&
                        // inset-x-0
                        <div className="absolute right-[12%] top-[30%] w-[60%] mx-auto z-40">
                            <SearchBoxDropDown handleSearchOpen={() => setIsSearchOpen(false)} isSearchOpen={isSearchOpen} />
                        </div>
                    }

                </div> : <div>

                </div>}
                <div className="flex items-center w-[20%] md:w-[15%] justify-between">
                    {screenSize > 900 && <Search onClick={() => setIsSearchOpen(!isSearchOpen)} color="white" className="h-5 w-5 mx-2 cursor-pointer" />}

                    <Dialog>
                        <DialogTrigger><Bell color="white" className="h-5 w-5 mx-2 mr-0 cursor-pointer" /></DialogTrigger>

                        <DialogContent customPos="top-[72px]" className="absolute mr-0 top-[228px] bg-[#000000] text-white left-[50%] z-50 w-[70%] translate-x-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200">
                            <DialogHeader>
                                <DialogTitle className="border-b-1 border-white pb-2.5 text-2xl font-bold w-full">Notifiations</DialogTitle>
                                <DialogDescription>
                                    <div className="w-full">
                                        <div className="flex items-center gap-2 my-2 hover:bg-[#ccc]/90 p-2 rounded-lg">
                                            <img src={Images.notificationcar} />
                                            <div className="flex w-full items-center justify-between">
                                                <div>
                                                    <h2 className="text-white font-bold">Price drop alert</h2>
                                                    <p>The price of the cars has dropped by $5000</p>
                                                </div>
                                                <p>2h ago</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 my-2 hover:bg-[#ccc]/90 p-2 rounded-lg">
                                            <img src={Images.notificationcar} />
                                            <div className="flex w-full items-center justify-between">
                                                <div>
                                                    <h2 className="text-white font-bold">Price drop alert</h2>
                                                    <p>The price of the cars has dropped by $5000</p>
                                                </div>
                                                <p>2h ago</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 my-2 hover:bg-[#ccc]/90 p-2 rounded-lg">
                                            <img src={Images.notificationcar} />
                                            <div className="flex w-full items-center justify-between">
                                                <div>
                                                    <h2 className="text-white font-bold">Price drop alert</h2>
                                                    <p>The price of the cars has dropped by $5000</p>
                                                </div>
                                                <p>2h ago</p>
                                            </div>
                                        </div>
                                    </div>
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                    {screenSize < 900 && <AlignJustify onClick={() => setIsActive(!isActive)} color="white" />}
                    {screenSize > 900 && <Link to="/wishlist">
                        <Bookmark color="white" className="h-5 w-5 mx-2 cursor-pointer" />
                    </Link>}

                    {/* Toggle dropdown visibility on click */}

                    {screenSize > 900 && <DropdownMenu>
                        <DropdownMenuTrigger><UserCircle2Icon color="white" className="h-5 w-5 mx-2 cursor-pointer" /></DropdownMenuTrigger>
                        <DropdownMenuContent className="mr-6" >
                            {/* className="mr-4 removed from the dropdownmenucontent to test for the header button margin increase dueto logout modal */}
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <Link to="/profile"><DropdownMenuItem>My Profile</DropdownMenuItem></Link>
                            <Link to="/car-purchased-history"><DropdownMenuItem>Purchased History</DropdownMenuItem></Link>
                            <Link to="/purchased-history"><DropdownMenuItem>Subscription History</DropdownMenuItem></Link>
                            <Link to="faq"><DropdownMenuItem>Faq</DropdownMenuItem></Link>
                            <Link to="/about-us"><DropdownMenuItem>About us</DropdownMenuItem></Link>
                            <Link to="/privacy-policy"><DropdownMenuItem>Privacy Policy</DropdownMenuItem></Link>
                            <Link to="/help-center"><DropdownMenuItem>Help center</DropdownMenuItem></Link>
                            <Link to="/contact-us"><DropdownMenuItem>Contact us</DropdownMenuItem></Link>
                            <Link to="/terms-conditions"><DropdownMenuItem>Terms & Condition</DropdownMenuItem></Link>
                            <Link to="/news"><DropdownMenuItem>News & updates</DropdownMenuItem></Link>
                            <DropdownMenuItem onClick={handleDialogOpen}>Log out</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>}
                </div>
                <LoginModal openModal={isDialogOpen} setIsDialogOpen={setIsDialogOpen} />
                {/* <LogoutModal openModal={isDialogOpen} setIsDialogOpen={setIsDialogOpen} /> */}

            </div>

            {/* Conditional rendering of DropdownMenu based on the isDropdownOpen state */}


        </>
    );
}

export default Header;
