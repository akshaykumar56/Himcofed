import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import {useState,useEffect} from 'react';

// Components
import About from './components/About/About'
import Navbar from './components/Navbar/Navbar'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import Achievments from './components/Achievments/Achievment'
import Hamburger from './components/Hamburger/Hamburger'
// Pages
import Notification from './pages/Notification/Notification'
import Home from './pages/Home/home'
import Gallery from './pages/Gallery/Gallery'


//About
import About2 from './pages/About/About'
import Management from './pages/About/Management'
import Bank from './pages/About/Bankdetail'
import Membership from './pages/About/Membership'

//Coop
import CoopPrinciple from './pages/Coop/Coop_principle'
import History from './pages/Coop/History'
import AboutCoop from './pages/Coop/About_coop'


import Contact from './pages/Contact/Contact'


//Program
import Program from './pages/Program/Program'


// Report 
import AnnualReport from './pages/Annual_report/Annual_report'

// Download
import Downloads from './pages/Download/Download'


// Schemes
import Schemes from './pages/Schemes/Schemes'

// 404 not found
import NotFound from './pages/Not_found/NotFound'



function App() {
  let[arr,setArr]=useState([])
  useEffect(() => {
    let fetchData=async ()=>{
      let data=await fetch(`${process.env.REACT_APP_SERVERNAME}/api/notifications?populate=*`);
      let response=await data.json();
      let notification=await response.data;
      setArr([...notification])
    }
    fetchData()   
  },[]);

  
  
  return (
    <>
    <Router>
      <Navbar/>
      <Nav/>
      <Hamburger/>
        <Routes>
          <Route exact path="/" element={<Home arr={arr}/>}/>
          <Route exact path="/home" element={<Home arr={arr}/>}/>
          <Route exact path="/gallery" element={<Gallery />}/>
          <Route exact path="/notification" element={<Notification arr={arr}/>}/>
          <Route exact path="/about/about" element={<About2/>}/>
          <Route exact path="/about/management" element={<Management/>}/>
          <Route exact path="/about/bankdetails" element={<Bank/>}/>
          <Route exact path="/about/membership" element={<Membership/>}/>
          <Route exact path="/coop/principles" element={<CoopPrinciple/>}/>
          <Route exact path="/coop/history" element={<History/>}/>
          <Route exact path="/coop/about_coop" element={<AboutCoop/>}/>
          <Route exact path="/program" element={<Program/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/annual_report" element={<AnnualReport/>}/>
          <Route exact path="/downloads" element={<Downloads/>}/>
          <Route exact path="/schemes" element={<Schemes/>}/>
          <Route exact path="/not_found" element={<NotFound/>}/>
        </Routes>
    <Achievments/>
    <About/>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
