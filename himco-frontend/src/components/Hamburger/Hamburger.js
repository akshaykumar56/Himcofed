import './Hamburger.css'
import {useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
function NavScrollExample() {
    /* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav(e) {
    e.preventDefault()
    document.getElementById("mySidenav").style.width = "0";
  }
  

  function show_hide1() {
    var click = document.getElementById("hamberger-list-items-1");
    var click1 = document.getElementById("hamberger-list-items-2");
    var click2 = document.getElementById("hamberger-list-items-3");
    var click3 = document.getElementById("hamberger-list-items-4");
    if(click.style.display === 'block') 
    {click.style.display = 'none';
  }
     else 
     {click.style.display = 'block';
     click1.style.display = 'none';
     click2.style.display = 'none';
     click3.style.display = 'none';
    }
 }

 function show_hide2() {
  var click = document.getElementById("hamberger-list-items-1");
    var click1 = document.getElementById("hamberger-list-items-2");
    var click2 = document.getElementById("hamberger-list-items-3");
    var click3 = document.getElementById("hamberger-list-items-4");
  if(click1.style.display === 'block') click1.style.display = 'none'; 
  else {click1.style.display = 'block';
  click.style.display = 'none';
  click2.style.display = 'none';
  click3.style.display = 'none';
 }
}
function show_hide3() {
  var click = document.getElementById("hamberger-list-items-1");
    var click1 = document.getElementById("hamberger-list-items-2");
    var click2 = document.getElementById("hamberger-list-items-3");
    var click3 = document.getElementById("hamberger-list-items-4");
  if(click2.style.display === 'block') click2.style.display = 'none'; 
  else 
     {click2.style.display = 'block';
     click1.style.display = 'none';
     click3.style.display = 'none';
     click.style.display = 'none';
    }
}
function show_hide4() {
  var click = document.getElementById("hamberger-list-items-1");
    var click1 = document.getElementById("hamberger-list-items-2");
    var click2 = document.getElementById("hamberger-list-items-3");
    var click3 = document.getElementById("hamberger-list-items-4");
  if(click3.style.display === 'block') click3.style.display = 'none';
  else 
  {click3.style.display = 'block';
  click1.style.display = 'none';
  click2.style.display = 'none';
  click.style.display = 'none';
 }}



 const [text, setText] = useState(''); 
  const handleOnChange = (event)=>{
    setText(event.target.value) 
}
let navigate=useNavigate();
let regex1 = /home/i;
let regex2 = /about/i;
let regex3 = /man/i;
let regex4 = /mem/i;
let regex5 = /bank/i;
let regex6 = /prog/i;
let regex7 = /repo/i;
let regex8 = /gall/i;
let regex9 = /notifi/i;
let regex10 = /downl/i;
let regex11 = /schem/i;
let regex12 = /cont/i;
let regex13 = /coop/i;
let regex14 = /history/i;
let regex15 = /principle/i;
const handelClick=(text)=>{
 if(regex1.test(text)){
  navigate('/', {replace: true})
 }
 else if(regex2.test(text)){
  navigate('/about/about', {replace: true})
 }
 else if(regex3.test(text)){
  navigate('/about/management', {replace: true})
 }
 else if(regex3.test(text)){
  navigate('/about/management', {replace: true})
 }
 else if(regex4.test(text)){
  navigate('about/membership', {replace: true})
 }
 else if(regex5.test(text)){
  navigate('/about/bankdetails', {replace: true})
 }
 else if(regex6.test(text)){
  navigate('/program', {replace: true})
 }
 else if(regex7.test(text)){
  navigate('/annual_report', {replace: true})
 }
 else if(regex8.test(text)){
  navigate('/gallery', {replace: true})
 }
 else if(regex9.test(text)){
  navigate('/notification', {replace: true})
 }
 else if(regex10.test(text)){
  navigate('/downloads', {replace: true})
 }
 else if(regex11.test(text)){
  navigate('/schemes', {replace: true})
 }
 else if(regex12.test(text)){
  navigate('/contact', {replace: true})
 }
 else if(regex13.test(text)){
  navigate('/coop/about_coop', {replace: true})
 }
 else if(regex13.test(text)){
  navigate('/coop/about_coop', {replace: true})
 }
 else if(regex14.test(text)){
  navigate('/coop/history', {replace: true})
 }
 else if(regex15.test(text)){
  navigate('/coop/principles', {replace: true})
 }
 else if(text.length===0){
  navigate('/home', {replace: true})
 }
 else{
  navigate('/not_found', {replace: true})
 }
}
  return (
    <>
  <div className='Hamburger' style={{backgroundColor:'#0033B8',padding:'5px 0px 5px 0px',justifyContent:'space-around',flexDirection:'row'}}>
  <div id="mySidenav" className="sidenav" style={{backgroundColor:'#0034B8',color:'white',opacity:'0.955',zIndex:'10'}}>
  <div style={{margin:'20px 20px 10px 20px',display:'flex',justifyContent:'center',alignItems:'center'}}>
         <input type='text' placeholder='search' onChange={handleOnChange} style={{width:'170px'}}/>
         <div onClick={()=>handelClick(text)}><div onClick={closeNav} className='search-button' style={{backgroundColor:'#B80000',color:'white',display:'flex',justifyContent:'center',alignItems:'center',width:'38px',height:'30px'}}> <span className="material-symbols-outlined">search</span></div></div>
  </div>
  <Link  className="closebtn" onClick={closeNav}>&times;</Link>
  <div onClick={closeNav}><Link to="/" style={{color:'white',fontSize:'18px'}}>Home</Link></div>
  <li key={1} className="nav-item dropdown" style={{display:'flex',justifyContent:'flex-start'}}>
        <div className="hamberger"  style={{width:'250px'}}>
        <Link onClick={()=>show_hide1()} className="hamberger-drop-button" to="#" style={{color:'white',fontSize:'18px'}}><div style={{display:'flex',alignItems:'flex-end'}}>About Us<span className="material-symbols-outlined">arrow_drop_down</span></div></Link>
      <div id="hamberger-list-items-1" style={{position:'absolute',width:'250px',zIndex:'17'}}>
      <div  onClick={closeNav}><Link  className="dropdown-item-1" to="/about/about" style={{fontSize:'14px'}}>About HIMCOFED</Link></div>
      <div  onClick={closeNav}><Link  className="dropdown-item-1" to="/about/management" style={{fontSize:'14px'}}>Management Of HIMCOFED</Link></div>
      <div  onClick={closeNav}><Link  className="dropdown-item-1" to="/about/membership" style={{fontSize:'14px'}}>Membership</Link></div>
      <div  onClick={closeNav}><Link className="dropdown-item-1" to="/about/bankdetails" style={{fontSize:'14px'}}>Bank Link A/C Details</Link></div>
      </div>
      </div>
      </li>


      <li key={2} className="nav-item dropdown" style={{display:'flex',justifyContent:'flex-start'}}>
        <div className="hamberger"  style={{width:'250px'}}>
        <Link onClick={()=>show_hide2()} className="hamberger-drop-button" to="#" style={{color:'white',fontSize:'18px'}}><div style={{display:'flex',alignItems:'flex-end'}}>Coop Movement <span className="material-symbols-outlined">arrow_drop_down</span></div></Link>
      <div id="hamberger-list-items-2" style={{position:'absolute',width:'250px',zIndex:'16'}}>
      <div  onClick={closeNav}><Link  className="dropdown-item-1" to="/coop/about_coop" style={{fontSize:'14px'}}>About Coop</Link></div>
      <div  onClick={closeNav}><Link  className="dropdown-item-1" to="/coop/principles" style={{fontSize:'14px'}}>Coop Definition & Principles</Link></div>
      <div  onClick={closeNav}><Link  className="dropdown-item-1" to="/coop/history" style={{fontSize:'14px'}}>History of Movement</Link></div>
      </div>
      </div>
      </li>




      <li key={3} className="nav-item dropdown" style={{display:'flex',justifyContent:'flex-start'}}>
        <div className="hamberger"  style={{width:'250px'}}>
        <Link onClick={()=>show_hide3()} className="hamberger-drop-button" to="#" style={{color:'white',fontSize:'18px'}}><div style={{display:'flex',alignItems:'flex-end'}}>Program <span className="material-symbols-outlined">arrow_drop_down</span></div></Link>
      <div id="hamberger-list-items-3" style={{position:'absolute',width:'250px',zIndex:'15'}}>
      <div  onClick={closeNav}><Link className="dropdown-item-1" to="/program" style={{fontSize:'14px'}}>Introduction & Objectives</Link></div>
      <div  onClick={closeNav}><Link className="dropdown-item-1" to="/program" style={{fontSize:'14px'}}>Program</Link></div>
      </div>
      </div>
      </li>
   
      <li key={4} className="nav-item dropdown" style={{display:'flex',justifyContent:'flex-start'}}>
        <div className="hamberger"  style={{width:'250px'}}>
        <Link onClick={()=>show_hide4()} className="hamberger-drop-button" to="#" style={{color:'white',fontSize:'18px'}}><div style={{display:'flex',alignItems:'flex-end'}}>Reports <span className="material-symbols-outlined">arrow_drop_down</span></div></Link>
      <div id="hamberger-list-items-4" style={{position:'absolute',width:'250px',zIndex:'14'}}>
      <div onClick={closeNav}><Link  className="dropdown-item-1" to="/annual_report" style={{fontSize:'14px'}}>Annual Reports</Link></div>
      </div>
      </div>
      </li>


    <div onClick={closeNav}><Link to="/gallery" style={{color:'white',fontSize:'18px'}}>Gallery</Link></div>
  <div onClick={closeNav}><Link  to="/notification" style={{color:'white',fontSize:'18px'}}>Notification</Link></div>
  <div onClick={closeNav}><Link  to="/contact" style={{color:'white',fontSize:'18px',width:'250px'}}>Contact Us</Link></div>
  <div onClick={closeNav}><Link  to="/downloads" style={{color:'white',fontSize:'18px'}}>Downloads</Link></div>
  <div onClick={closeNav}><Link  to="/schemes" style={{color:'white',fontSize:'18px'}}>Schemes</Link></div>
  
</div>

 {/* Use any element to open the sidenav  */}
<button className='Hamburger-button' onClick={openNav} style={{backgroundColor:'transparent',border:'0px'}}>
<div style={{height:'3px',width:'20px',backgroundColor:'white',margin:'3px'}}></div>
<div style={{height:'3px',width:'20px',backgroundColor:'white',margin:'3px'}}></div>
<div style={{height:'3px',width:'20px',backgroundColor:'white',margin:'3px'}}></div>
</button>
<div></div>
<div></div>
<a className='Ecommerce-Link-hamburger' href='https://celadon-vacherin-0fb6a1.netlify.app/' target='_blank' style={{color:'white',textDecoration:'none'}}><div style={{background:'rgb(184, 0, 0)',padding:'5px 5px',borderRadius:'5px',fontSize:'14px'}}>
  E-commerce</div></a>

</div>
    </>
  );
}

export default NavScrollExample;

