import { Images } from "../../../assets/Images/Images";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
    return (
      <footer className="bg-black text-gray-400 pt-10 pb-0.5 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left">
          {/* Logo Section */}
          <div className="mb-6 md:mb-0 flex flex-col items-center">
            <img src={Images.avLogo}/>
            <img className="mt-4" src={Images.autoViton}/>
          </div>
  
          {/* Company Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-[#8F8065] mb-3">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-200">About</a></li>
              <li><a href="#" className="hover:text-gray-200">Cars</a></li>
              <li><a href="#" className="hover:text-gray-200">Contact Us</a></li>
              <li><a href="#" className="hover:text-gray-200">FAQ</a></li>
            </ul>
          </div>
  
          {/* Information Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-[#8F8065] mb-3">Information</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-200">Testimony</a></li>
              <li><a href="#" className="hover:text-gray-200">Vendor's Hub</a></li>
              <li><a href="#" className="hover:text-gray-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-200">Cancellation and Refund</a></li>
              <li><a href="#" className="hover:text-gray-200">How it Works</a></li>
            </ul>
          </div>
  
          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#8F8065] mb-3">Follow us</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" className="text-gray-400 hover:text-gray-200 text-2xl">
                <Facebook color="white" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200 text-2xl">
                <Instagram color="white" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200 text-2xl">
                <Twitter color="white" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-gray-500 mt-10 text-sm">
          &copy; Bedimcode. All rights reserved
        </div>
      </footer>
    );
  };
  
  export default Footer;
  