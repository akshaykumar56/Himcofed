import './home.css'
import {Link} from 'react-router-dom'
import NewsTicker from 'react-advanced-news-ticker';
import Img2 from './alert.png'
import Person1 from './1.png'
import Person2 from './2.png'
import Person3 from './3.png'
import Image1 from './carousel-image/1.jpg'
import Image2 from './carousel-image/2.jpg'
import Image3 from './carousel-image/3.jpg'
function Home(props) {
  let n_arr=[...props.arr]
  console.log(n_arr)
  n_arr.reverse()
  let arr=n_arr.slice(0,6)
  console.log(arr)
  function formatMyDate(value, locale = 'en-GB') {
    return new Date(value).toLocaleDateString(locale);
}



  return (
    <div className="home">
    <div className='component'>
      <div className='carousel carousel-home' >
      

      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={Image1} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={Image2} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={Image3} alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

</div>
      <div className='home-image-links' style={{margin:'50px 0px'}}>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#B80000',height:'60px',color:'white',fontSize:'24px'}}>NOTIFICATIONS</div>
    {arr.length!==0?<NewsTicker 
    key={Math.random()}
    rowHeight = {30}
    maxRows = {16}
    speed = {2000}
    // direction = {Directions.DOWN}
    duration = {2000}
    autoStart = {true}
    pauseOnHover = {true}
    id = "myId"
    className = "myClassName1 myClassName2"
    style = {{margin:'0px',backgroundColor:'#71AEDA'}}>
    {arr.map((element)=>{return element.attributes.Download.data?<a style={{color:'black',textDecoretion:'none'}} href={`${process.env.REACT_APP_SERVERNAME}${element.attributes.Download.data[0].attributes.url}`}><div key={element.id} style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:'15px'}}><img src={Img2} alt='new'/><div style={{width:'70%'}}><div style={{marginBottom:'0px',display:'flex',justifyContent:'space-between'}}><div>{element.attributes.Heading}</div><div style={{fontSize:'12px'}}>{formatMyDate(element.attributes.createdAt)}</div></div><div style={{fontSize:'12px'}}>{element.attributes.Description.slice(0,25)}...</div></div></div></a>:<div key={element.id} style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:'15px'}}><img src={Img2} alt='new'/><div style={{width:'70%'}}><div style={{marginBottom:'0px',display:'flex',justifyContent:'space-between'}}><div>{element.attributes.Heading}</div><div style={{fontSize:'12px'}}>{formatMyDate(element.attributes.createdAt)}</div></div><div style={{fontSize:'12px'}}>{element.attributes.Description.slice(0,25)}...</div></div></div>})}
    
</NewsTicker>:<div style={{height:'375px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'18px'}}>No Notifications</div>}
   <div style={{display:'flex',alignItems:'center',justifyContent:'flex-end',backgroundColor:'#71AEDA',padding:'10px 10px',fontSize:'14px'}}><Link className="nav-link" to="/notification" style={{color:'white'}}>View All &gt;</Link></div>
 </div>
 </div>
  

  <div>
    <div className='Persons'>
      <div className='personality'><div className='personality-image' ><img src={Person1} alt='personality'/></div><div style={{margin:'20px 20px',height:'120px'}}><b style={{fontSize:'18px'}}>Sh. Mukesh Agnihotri</b><br/>
<p style={{fontSize:'14px'}}>Hon'ble Deputy Chief Minister<br/>
Co-operation, Jal Shakti, Transport, Language, Arts and Culture Minister</p>
</div></div>
      <div className='personality'><div className='personality-image'><img src={Person2} alt='personality'/></div><div style={{margin:'20px 20px',height:'120px'}}><b style={{fontSize:'18px'}}>Sh. C. Paulrasu, IAS</b><br/><p style={{fontSize:'14px'}}>Secretary Cooperation</p></div></div>
      <div className='personality'><div className='personality-image'><img src={Person3} alt='personality'/></div><div style={{margin:'20px 20px',height:'120px'}}><b style={{fontSize:'18px'}}>Sh.Sandeep Kadam</b><br/><p style={{fontSize:'14px'}}>Registrar Cooperative Societies</p></div></div>
    </div>
  </div>



   <div className='chairman'>
    <div className='image-1' style={{backgroundPosition:'center',fontSize:'25px',fontFamily:'Domine',color:'white',display:'flex',justifyContent:'flex-end',alignItems:'center',padding:'20px 0px',flexDirection:'column'}}>
      <p>Gaurav Chauhan</p>
    <p style={{fontSize:'16px'}}>Deputy Registrar(Eastern Division)</p>
    </div>
    <div className='message'>
    <div className='message1'>Administrator's Message</div>
    <div className='message2'>
    It is with immense pleasure that I, as the Administrator of Himachal Pradesh State Cooperative
Development Federation (HIMCOFED), extend a warm and hearty welcome to you on our official
website.
Himcofed, establish in 1960 under the visionary guidance of the government, has been at the
forefront of cooperative education and training in Himachal Pradesh. Our mission is to empower
individuals and cooperative societies with the knowledge and skills necessary to foster a thriving
cooperative movement in our state.
At Himcofed, we take great pride in our two state level cooperative training centers, where our
dedicated team conducts the annual four-months Cooperative Diploma Course. This course is a
cornerstone of our commitment to imparting valuable knowledge, fostering collaboration, and
promoting the spirit within our community.
Additionally, we work tirelessly to provide training and support to the management and
members of cooperative societies at the block and village levels. We believe that strong and
well-informed cooperative societies are the bedrock of a prosperous and harmonious Himachal
Pradesh.
Our website aims to be a comprehensive resource for information, updates and resources
related to our initiative, courses, and the cooperative movement as a whole. We hope that it will
serve as a valuable platform for communication, knowledge-sharing, and engagement for all our
stakeholders.
We encourage you to explore the various section of our website, stay update with our latest
developments, and utilize the resources we offer. Please feel free to reach out to us if you have
any questions, suggestion, or if you require any assistance. We are here to support you every
step of the way.
Thanks you for your interest and support in HIMCOFED's mission. We look forward to your
active participation and collaboration as we work together to create a more vibrant and
prosperous cooperative ecosystem in Himachal Pradesh.
Once again, welcome to our online home, and we hope you find your visit here informative and
inspiring.
    </div>
    <div></div>
    </div>
    </div>
    </div>
  );
}

export default Home;