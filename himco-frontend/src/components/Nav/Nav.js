import './Nav.css'
import {Link} from 'react-router-dom'
function NavScrollExample() {
  

  return (
    <>
  <nav className="navbar navbar-expand-lg " style={{height:'54px'}}>
 
  <div className="collapse collapse-navbar navbar-collapse" id="navbarSupportedContent" style={{height:'54px'}}>
    <div>
    <ul className="navbar-nav mr-auto">
      <li key={1} className="nav-item active">
        <Link className="nav-link" to="/" style={{color:'white'}}>Home<span className="sr-only">(current)</span></Link>
      </li>

      <li key={2} className="nav-item dropdown">
        <Link style={{color:'white',pointerEvents:'none'}} className="nav-link dropdown-toggle" to="/about/about" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          About Us
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <Link className="dropdown-item" to="/about/about">About HIMCOFED</Link>
          <Link className="dropdown-item" to="/about/management">Management Of HIMCOFED</Link>
          <Link className="dropdown-item" to="/about/membership">Membership</Link>
          <Link className="dropdown-item" to="/about/bankdetails">Bank Link A/C Details</Link>
        </div>
      </li>
      

      <li key={3} className="nav-item dropdown">
        <Link style={{color:'white',pointerEvents:'none'}} className="nav-link dropdown-toggle" to="/coop/about_coop" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Coop Movement 
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="/coop/about_coop">About Coop</Link>
          <Link className="dropdown-item" to="/coop/principles">Coop Definition & Principles</Link>
          <Link className="dropdown-item" to="/coop/history">History of Movement</Link>
        </div>
      </li>

      
      
      <li key={4} className="nav-item dropdown">
        <Link style={{color:'white',pointerEvents:'none'}} className="nav-link dropdown-toggle" to="/program" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Program
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <div className="btn-group dropright2" style={{width:'220px'}}>
          <Link className="dropdown-item" to="/program">Education & Training   <b>&gt;</b></Link>
          <div className="right2">
          <Link className="dropdown-item" to="/program">Introduction & Objectives</Link>
          <Link className="dropdown-item" to="/program">Programs</Link>
         </div>
         </div>
        </div>
      </li>
    

      <li key={5} className="nav-item dropdown">
        <Link style={{color:'white',pointerEvents:'none'}} className="nav-link dropdown-toggle" to="/annual_report" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Reports
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="/annual_report">Annual Reports</Link>
        </div>
      </li>


      <li key={6} className="nav-item active">
        <Link style={{color:'white'}} className="nav-link" to="/gallery">Gallery<span className="sr-only">(current)</span></Link>
      </li>

      <li key={7} className="nav-item active">
        <Link style={{color:'white'}} className="nav-link" to="/notification">Notifications<span className="sr-only">(current)</span></Link>
      </li>

      <li key={8} className="nav-item active">
        <Link style={{color:'white'}} className="nav-link" to="/contact">Contact Us<span className="sr-only">(current)</span></Link>
      </li>

      <li key={9} className="nav-item active">
        <Link style={{color:'white'}} className="nav-link" to="/downloads">Downloads<span className="sr-only">(current)</span></Link>
      </li>

      <li key={10} className="nav-item active">
        <Link style={{color:'white'}} className="nav-link" to="/schemes">Schemes<span className="sr-only">(current)</span></Link>
      </li>
    </ul>
  </div>
  <a className='Ecommerce-Link' href='https://celadon-vacherin-0fb6a1.netlify.app/' target='_blank' style={{color:'white',textDecoration:'none'}}><div style={{background:'rgb(184, 0, 0)',padding:'5px 5px',borderRadius:'5px'}}>
  E-commerce</div></a>
  </div>
</nav>
    
    </>
  );
}

export default NavScrollExample;

