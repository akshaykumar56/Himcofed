import './Footer.css'
import {Link} from 'react-router-dom'
function NavScrollExample() {
  return (
    <div className="Footer">
      <div style={{display:'inline'}}>© 2023 HIMCOFED All Rights Reserved |<Link to='http://silicongarage.in/' style={{tectDecoration:'none',color:'white'}}>Designed and Developed by Silicon Garage</Link></div> 
    </div>
  );
}

export default NavScrollExample;