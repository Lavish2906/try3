import React, { useState } from "react";
import { Images } from "@/assets/Images/Images";
// import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from "@/Components/ui/dialog"
import RegisterForm from "./RegisterForm";
import LoginForm from "./Loginform";

function LoginModal({ openModal, closeModal, setErrorMessage , setIsDialogOpen}) {
    const [register, setRegister] = useState(false)
    const validateForm = () => {
        // Basic validation to check if fields are empty
        if (!formData.email || !formData.password) {
            setErrorMessage("Invalid username or password");
            return false;
        }

        // Additional validation logic for password, if needed
        if (formData.password.length < 6) {
            setErrorMessage("Incorrect password");
            return false;
        }

        setErrorMessage(""); // Clear error message if valid
        return true;
    };

    function handleSignUpTap(){
        setRegister(true)
    }

    return (
        <>
            <Dialog open={openModal}  onOpenChange={setIsDialogOpen}>
                {/* <DialogTrigger />  */}
                <DialogContent className="lg:w-[60%] md:w-[80%] w-[90%] px-10 py-10 bg-[#1E2128] border-0 rounded-none">
                    <DialogHeader>
                        {/* <DialogTitle>Are you absolutely sure?</DialogTitle> */}
                        <DialogDescription>
                            <div className="mx-auto flex md:flex-row flex-col justify-between h-full md:items-start items-center relative">
                               {!register && <LoginForm closeModal={closeModal} handleSignUpTap={handleSignUpTap} />}
                                {register && <RegisterForm /> }

                                <div className="md:w-[45%] w-0">
                                    <img
                                        src={Images.logincar}
                                        alt="Car"
                                        className="w-full h-full md:block hidden object-cover"
                                    />
                                </div>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                    {/* <button onClick={handleDialogClose}>Close</button> */}
                </DialogContent>
            </Dialog>

        </>


    );
}

export default LoginModal;
