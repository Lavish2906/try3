import { useStateContext } from "@/Context/ContextProvider";
import { useState } from "react";

function LoginForm({ handleSignUpTap, closeModal }) {
    const {isLoggedIn, setIsLoggedIn} = useStateContext()
    const [rememberMe, setRememberMe] = useState(false);
    const [formData, setFormData] = useState({
        phone: "", // Store phone number
        otp: ["", "", "", ""], // Store OTP for each input field
    });
    const [showOtpInputs, setShowOtpInputs] = useState(false); // Track if OTP fields should be displayed
    const [errorMessage, setErrorMessage] = useState(""); // For any error messages

    // Handle form field changes (phone or OTP)
    const handleChange = (e) => {
        const { name, value, dataset } = e.target;

        if (name === "otp") {
            // Update the specific OTP field based on the index
            const updatedOtp = [...formData.otp];
            updatedOtp[dataset.index] = value;
            setFormData((prev) => ({
                ...prev,
                otp: updatedOtp,
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }

        setErrorMessage(""); // Clear any error messages
    };

    // Handle OTP input box change
    const handleOtpInputChange = (e, index) => {
        const newOtp = [...formData.otp];
        newOtp[index] = e.target.value;
        setFormData((prev) => ({
            ...prev,
            otp: newOtp,
        }));
    };

    const handleLogin = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log("Logging in...");
            // Call your login logic here, e.g., API call

            // Simulate a server error for demonstration
            const serverError = false; // Set to true to simulate server error

            if (serverError) {
                setErrorMessage("Server error");
            } else {
                // Proceed with the login
                console.log("Login successful");

                setIsLoggedIn(true)
                closeModal();
            }
        }
    };

    const validateForm = () => {
        // Add your validation logic here
        return true; // Just return true for now
    };

    return (
        <div className="flex flex-col justify-between h-full md:w-[45%] w-full px-2">
            <div className="w-full flex flex-col items-center">
                <h1 className="text-2xl text-white">Log in</h1>
                <h4 className="text-[#92908F]">Welcome back! Please log in to access your account</h4>
            </div>
            <form className="flex flex-col" onSubmit={handleLogin}>
                {/* Phone number input */}
                {!showOtpInputs ? (
                    <input
                        className="bg-transparent border-b-2 border-gray-300 p-2 mb-2 text-gray-300 focus:border-[#8F8065] focus:outline-none"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="Enter your mobile number"
                    />
                ) : (
                    // OTP input fields
                    <div className="flex justify-between mb-4">
                        {formData.otp.map((otp, index) => (
                            <input
                                key={index}
                                className="bg-transparent border-2 border-gray-300 p-2 text-gray-300 focus:border-[#8F8065] focus:outline-none w-1/4 mx-2 h-12 text-center rounded"
                                type="text"
                                name="otp"
                                data-index={index}
                                value={otp}
                                onChange={(e) => handleOtpInputChange(e, index)}
                                maxLength="1"
                                required
                                placeholder="-"
                            />
                        ))}
                    </div>
                )}

                {/* Remember me checkbox */}
                <div className="flex items-center my-1">
                    <input
                        type="checkbox"
                        id="rememberMe"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                        className="mr-2"
                    />
                    <label htmlFor="rememberMe" className="text-sm text-white">
                        Remember Me
                    </label>
                </div>

                {/* Get OTP button */}
                {!showOtpInputs ? (
                    <button
                        type="button"
                        onClick={() => setShowOtpInputs(true)} // Show OTP fields on click
                        className="bg-[#8F8065] text-white rounded-sm py-2"
                    >
                        Get OTP
                    </button>
                ) : (
                    <button
                        type="submit"
                        className="bg-[#8F8065] text-white rounded-sm py-2"
                    >
                        Submit OTP
                    </button>
                )}

                {errorMessage && (
                    <p className="text-red-500 text-center">{errorMessage}</p>
                )}

                <p className="text-center text-white">
                    Don't have an account?{" "}
                    <span
                        className="text-[#8F8065] cursor-pointer underline hover:text-blue-600"
                        onClick={handleSignUpTap}
                    >
                        Sign up
                    </span>
                </p>
            </form>
        </div>
    );
}

export default LoginForm;
