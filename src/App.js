import { Routes,Route } from 'react-router-dom';
import './App.css';
import SignupForm from './components/SignupForm';
// import LoginForm from './components/Login';
import NavigationBar from './components/NavigationBar';
// import LoginForm from './components/Login';
import SearchForm from './components/searchform';
import About from './components/About';
import ContactForm from './components/ContactForm';
import BusAvailability from './components/BusAvailability';
import BusSeatAvailability from './components/BusSeatAvailability';
import PassengerDetailsForm from './components/PassengerDetails';
import PaymentForm from './components/PaymentForm';
import PaymentTiming from './components/PaymentTimings';
import LoginForm from './components/Login';

// import SearchForm from './components/searchform';
// import LoginForm from './components/Login';
function App() {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<LoginForm/>}/>
      <Route  path='/Register' element={<SignupForm/>}/>
      <Route  path='/NavigationBar' element={<SearchForm/>}/>
      <Route  path='/Signup' element={<SignupForm/>}></Route>
      <Route  path='/About' element={<About/>}></Route>
      {/* <Route  path="/search" element={<SearchForm/>}/> */}
      <Route path='/ContactForm'element={<ContactForm/>}></Route>
      <Route path='/bus'element={<BusAvailability/>}></Route>
      <Route path='/buseat'element={<BusSeatAvailability/>}></Route>
      <Route path='/book'element={<PassengerDetailsForm/>}></Route>
      <Route path='/pay'element={<PaymentForm/>}></Route>
      <Route path='/PassengerDetails'element={<PassengerDetailsForm/>}></Route>
      <Route path='/Payment'element={<PaymentTiming/>}></Route>

      

    </Routes>

    </>
  );
}

export default App;








