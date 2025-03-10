import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/AuthScreens/Header/Header'
import Body from './Components/AuthScreens/Body/Boday'
import Footer from './Components/AuthScreens/Footer/Footer'
import CarsListScreen from './Components/AuthScreens/CarsListScreen/CarsListScreen'
import CarDetailsScreen from './Components/AuthScreens/CarDetailsscreen/CardDetailsScreen'
import DealerDetails from './Components/AuthScreens/DealerDetails/DealerDetails'
import BookTestDriveScreen from './Components/AuthScreens/BookTestDriveScreens/BookTestDriveScreen'
import MyProfile from './Components/AuthScreens/Profile/Myprofile'
import WishList from './Components/AuthScreens/WishList/Wishlist'
import AboutUs from './Components/AuthScreens/AboutUs/AboutUs'
import FaqScreen from './Components/AuthScreens/Faq/FaqScreen'
import TermsAndCondition from './Components/AuthScreens/TermsCondition/TermsAndCondition'
import PurchasedHistory from './Components/AuthScreens/PurchasedHistory/PurchasedHistory'
import CarComparison from './Components/AuthScreens/WishList/ComparisonScreen'
import PrivacyPolicy from './Components/AuthScreens/TermsCondition/PrivacyPolicy'
import HelpCenter from './Components/AuthScreens/HelpCenter/HelpCenter'
import ContactUs from './Components/AuthScreens/ContactUs/ContactUs'
import NewsAndUpdate from './Components/AuthScreens/NewsandUpdates/NewsandUpdate'
import HowItWorks from './Components/AuthScreens/HowItWorks/HowItworks'
import CarPurchasedHistory from './Components/AuthScreens/PurchasedHistory/CarPurchasedHistory'
import { useStateContext } from './Context/ContextProvider'
import SideBar from './Components/AuthScreens/Sidebar/Sidebar'
import BookYouTestDriveHome from './Components/AuthScreens/BookTestDriveScreens/BookYourTestDriveHome'


function App() {
  const { isActive, setIsActive, screenSize } = useStateContext()
  return (
    <>
      <BrowserRouter>
        <Header />
        {screenSize < 900 && isActive &&
          <div className='w-64 fixed right-0 top-0 sidebar z-50 h-full bg-[#171A21] text-white'>
            <SideBar />
          </div>
        }
        <Routes>
          <Route path='/' element={<Body />} />
          <Route path='/cars' element={<CarsListScreen />} />
          <Route path='/car-details' element={<CarDetailsScreen />} />
          <Route path='/car-dealer' element={<DealerDetails />} />
          <Route path='/test-drive' element={<BookTestDriveScreen />} />
          <Route path='/profile' element={<MyProfile />} />
          <Route path='/wishlist' element={<WishList />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/faq' element={<FaqScreen />} />
          <Route path='/terms-conditions' element={<TermsAndCondition />} />
          <Route path='/purchased-history' element={<PurchasedHistory />} />
          <Route path='/comparison' element={<CarComparison />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/help-center' element={<HelpCenter />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/news' element={<NewsAndUpdate />} />
          <Route path='/how-it-works' element={<HowItWorks />} />
          <Route path='/car-purchased-history' element={<CarPurchasedHistory />} />
          <Route path='/book-testdrive' element={<BookYouTestDriveHome />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
