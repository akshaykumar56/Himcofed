import Logo from './Logo.png'
import './Navbar.css'
import {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
function NavScrollExample() {
  var button=document.getElementsByClassName('search-button')[0];

const handleKeyDown = (e) => {
  if (e.key === 'Enter') {
    button.click();
  }
}


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
    <div className="Navbar">
        <div className='Navbar-container' style={{margin:'0px 20px'}}>
        <Link className="navbar-brand" to="/"> <div className='logo'> 
          <img src={Logo} alt='logo'/>
        </div>
        </Link>
        <div className='heading'>
          <div className='english-heading'>
          Himachal Pradesh State Co-operative Development Federation Ltd.  
          </div>
          <div className='hindi-heading'>
          हिमाचल प्रदेश राज्य सहकारी विकास संघ सीमित 
          </div>
        </div>
        <div className='search' style={{width:'230px'}}>
         <input type='text' placeholder='search' onKeyDown={handleKeyDown} onChange={handleOnChange}/>
         <div style={{cursor:'pointer'}} onClick={()=>handelClick(text)}><div className='search-button' style={{backgroundColor:'#B80000',color:'white',display:'flex',justifyContent:'center',alignItems:'center',width:'38px',height:'30px'}}> <span className="material-symbols-outlined">search</span></div></div>
        </div>
        </div>
        </div>
  );
}

export default NavScrollExample;