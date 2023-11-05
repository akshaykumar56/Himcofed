import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import {useState,useEffect} from 'react';
import * as React from 'react';
// Components
import About from './components/About/About'
import Navbar from './components/Navbar/Navbar'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import Achievments from './components/Achievments/Achievment'
import Hamburger from './components/Hamburger/Hamburger'
// Pages
// 404 not found
import NotFound from './pages/Not_found/NotFound'

const Home = React.lazy(() => import('./pages/Home/home'));
const Notification= React.lazy(() => import('./pages/Notification/Notification'));
const Gallery = React.lazy(() => import('./pages/Gallery/Gallery'));

//About
const About2 = React.lazy(() => import('./pages/About/About'));
const Management = React.lazy(() => import('./pages/About/Management'));
const Bank = React.lazy(() => import('./pages/About/Bankdetail'));
const Membership = React.lazy(() => import('./pages/About/Membership'));

//Coop
const CoopPrinciple = React.lazy(() => import('./pages/Coop/About_coop'));
const History = React.lazy(() => import('./pages/Coop/History'));
const AboutCoop = React.lazy(() => import('./pages/Coop/Coop_principle'));

//Contact
const Contact = React.lazy(() => import('./pages/Contact/Contact'));

//Admin Message
const Admin = React.lazy(() => import('./pages/Administrator/Admin'));

//Program
const Program = React.lazy(() => import('./pages/Program/Program'));


// Report 
const AnnualReport = React.lazy(() => import('./pages/Annual_report/Annual_report'));

// Download
const Downloads = React.lazy(() => import('./pages/Download/Download'));

// Schemes
const Schemes= React.lazy(() => import('./pages/Schemes/Schemes'));




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
          <Route exact path="/" element={<React.Suspense fallback={<>...</>}>
              <Home arr={arr}/>
            </React.Suspense>}/>
          <Route exact path="/home" element={<React.Suspense fallback={<>...</>}>
              <Home arr={arr}/>
            </React.Suspense>}/>
          <Route exact path="/gallery" element={<React.Suspense fallback={<>...</>}>
              <Gallery/>
            </React.Suspense>}/>
          <Route exact path="/notification" element={<React.Suspense fallback={<>...</>}>
              <Notification arr={arr}/>
            </React.Suspense>}/>
          <Route exact path="/about/about" element={<React.Suspense fallback={<>...</>}>
              <About2/>
            </React.Suspense>}/>
          <Route exact path="/about/management" element={<React.Suspense fallback={<>...</>}>
              <Management/>
            </React.Suspense>}/>
          <Route exact path="/about/bankdetails" element={<React.Suspense fallback={<>...</>}>
              <Bank/>
            </React.Suspense>}/>
          <Route exact path="/about/membership" element={<React.Suspense fallback={<>...</>}>
              <Membership/>
            </React.Suspense>}/>
          <Route exact path="/coop/principles" element={<React.Suspense fallback={<>...</>}>
              <CoopPrinciple/>
            </React.Suspense>}/>
          <Route exact path="/coop/history" element={<React.Suspense fallback={<>...</>}>
              <History/>
            </React.Suspense>}/>
          <Route exact path="/coop/about_coop" element={<React.Suspense fallback={<>...</>}>
              <AboutCoop/>
            </React.Suspense>}/>
          <Route exact path="/program" element={<React.Suspense fallback={<>...</>}>
              <Program/>
            </React.Suspense>}/>
          <Route exact path="/contact" element={<React.Suspense fallback={<>...</>}>
              <Contact/>
            </React.Suspense>}/>
          <Route exact path="/annual_report" element={<React.Suspense fallback={<>...</>}>
              <AnnualReport/>
            </React.Suspense>}/>
          <Route exact path="/downloads" element={<React.Suspense fallback={<>...</>}>
              <Downloads/>
            </React.Suspense>}/>
          <Route exact path="/schemes" element={<React.Suspense fallback={<>...</>}>
              <Schemes/>
            </React.Suspense>}/>
            <Route exact path="/admin" element={<React.Suspense fallback={<>...</>}>
              <Admin/>
            </React.Suspense>}/>
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
