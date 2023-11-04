import './Carousel.scss'
import {useState,useEffect} from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function Carousel1(props) {
  let[arr,setArr]=useState([])
  
  let fetchData=async (phototypes)=>{
        console.log(`${process.env.REACT_APP_SERVERNAME}/api/${phototypes}?populate=*`)
        let data=await fetch(`${process.env.REACT_APP_SERVERNAME}/api/${phototypes}?populate=*`);
        let response=await data.json();
        let notification=await response.data;
        setArr([...notification])
    }
      
    
    useEffect(()=>{
         fetchData('gallery-category1s')
       },[])
  return (
    <>
    {arr.length!==0?<div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
    {/* <div className="pic-ctn" >
    {arr.map((element)=>{return <img key={element.id} src={`http://localhost:1337${element.attributes.image.data[0].attributes.url}`} alt="" className="pic"/>})}
  </div> */}
  
  <Carousel>
  {arr.map((element)=>{return <div className='caro-img'>
    <img key={element.id} src={`${process.env.REACT_APP_SERVERNAME}${element.attributes.Image.data[0].attributes.url}`} alt="" className="pic"/> 
                </div>
  })}          
  </Carousel>
  
    <div className='key' style={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
    <button key={1} onClick={()=>fetchData('gallery-category1s')} style={{backgroundColor:'#B80000',color:'white',margin:'2px 10px',fontSize:'14px',height:'55px'}}>Education and Training</button>
    {/* <button key={2} onClick={()=>fetchData('gallery-category2s')} style={{backgroundColor:'#B80000',color:'white',margin:'2px 10px',fontSize:'14px',height:'55px'}}>Category2</button>
    <button key={3} onClick={()=>fetchData('gallery-category3s')} style={{backgroundColor:'#B80000',color:'white',margin:'2px 10px',fontSize:'14px',height:'55px'}}>Category3</button>
    <button key={4} onClick={()=>fetchData('gallery-category4s')} style={{backgroundColor:'#B80000',color:'white',margin:'2px 10px',fontSize:'14px',height:'55px'}}>Category4</button>
    <button key={5} onClick={()=>fetchData('gallery-category5s')} style={{backgroundColor:'#B80000',color:'white',margin:'2px 10px',fontSize:'14px',height:'55px'}}>Category5</button>
    <button key={6} onClick={()=>fetchData('gallery-category6s')} style={{backgroundColor:'#B80000',color:'white',margin:'2px 10px',fontSize:'14px',height:'55px'}}>Category6</button> */}
    </div>
    </div>:<div style={{margin:'90px 10px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
    <div className='Error' style={{textAlign:'center',fontFamily:'Domine',display:'flex',justifyContent:'center',alignItems:'center',width:'100%',color:'black',fontSize:'30px'}}>
   Server Side Error
    </div>
    </div>}
    </>
  );
}

export default Carousel1;
