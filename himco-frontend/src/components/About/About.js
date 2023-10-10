import './About.css'
import phone from './phone.png'
import shape from './shape.png'
import {Link} from 'react-router-dom'
function NavScrollExample() {
  return (
    <div className="About">
        <div className='About-container'>
        <div className='About-1'>
        <div className='heading-about'>
          <div className='english-heading-about'>
          Himachal Pradesh State Co-operative Development Federation Ltd.
          </div>
          <div className='hindi-heading-about' >
          हिमाचल प्रदेश राज्य सहकारी विकास संघ सीमित 
          </div>
        </div>
        <div  style={{display:'flex',flex:'row',alignItems:'center'}}><div style={{display:'flex',justifyContent:'center',alignItems:'center'}}><img src={shape} alt='location_img' style={{width:'16px',marginRight:'5px'}}/></div><h6 className="address" style={{color:'#0033B8',height:'18px',display:'flex',alignItems:'center'}}>Sahkar Bhawan, Near Dogra Lodge, Shimla-171004 (H.P.) Phone : 2656667-2803323</h6></div>
        <div  style={{display:'flex',flex:'row',alignItems:'center'}}><div style={{display:'flex',justifyContent:'center',alignItems:'center'}}><img src={phone} alt='contact_img' style={{width:'16px',marginRight:'5px'}}/></div><h6 className="address" style={{color:'#0033B8',height:'18px',display:'flex',alignItems:'center'}}>+91 9418029712</h6></div>
        </div>

        
        <div className='About-2'>
        <h3 style={{cLinklor:'#B80000'}}>About Us</h3>
        <h6><Link  onClick={()=>{window.scroll(0,0)}} to='/about/about' style={{color:'black'}}>About HIMCOFED</Link></h6>
        <h6><Link  onClick={()=>{window.scroll(0,0)}} to="/about/management" style={{color:'black'}}>Management of HIMCOFED</Link></h6>
        <h6><Link  onClick={()=>{window.scroll(0,0)}} to="/about/membership" style={{color:'black'}}>Membership</Link></h6>
        <h6><Link  onClick={()=>{window.scroll(0,0)}} to="/about/bankdetails" style={{color:'black'}}>Bank A/C Details</Link></h6>
        </div>


        <div className='About-links'>
        <h3 style={{color:'#B80000'}}>Useful Links</h3>
        <h6><Link  onClick={()=>{window.scroll(0,0)}} to='/annual_report' style={{color:'black'}}>Reports</Link ></h6>
        <h6><Link  onClick={()=>{window.scroll(0,0)}} to='/gallery' style={{color:'black'}}>Gallery</Link ></h6>
        <h6><Link  onClick={()=>{window.scroll(0,0)}} to='/contact' style={{color:'black'}}>Contact Us</Link ></h6>
        </div>
        </div>
        </div>
  );
}

export default NavScrollExample;