import './Annual_report.css'
import {useState,useEffect} from 'react'
function AnnualReport(props) {
    let[arr,setArr]=useState([])
    useEffect(() => {
      let fetchData=async ()=>{
        let data=await fetch(`${process.env.REACT_APP_SERVERNAME}/api/annual-reports?populate=*`);
        let response=await data.json();
       setArr(response.data[0].attributes.Report.data[0].attributes.url)
      }
      fetchData()   
    },[]);
  return (
    <>
    {arr.length!==0?<div style={{margin:'90px 10px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
    <div className='Annual_report' style={{textAlign:'center',fontFamily:'Domine',display:'flex',backgroundColor:'#B80000',justifyContent:'center',alignItems:'center',width:'100%',color:'white'}}>
   Annual Report
    </div>
    <a href={`${process.env.REACT_APP_SERVERNAME}${arr}`} style={{color:'white',fontFamily:'Domine',fontSize:'20px'}}><button style={{padding:'0px 10px',margin:'40px',backgroundColor:'#0033B8',color:'white',fontFamily:'Domine',fontSize:'20px'}}>Show</button></a>
    </div>:
    <div style={{margin:'90px 10px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
    <div className='Annual_report' style={{textAlign:'center',fontFamily:'Domine',display:'flex',justifyContent:'center',alignItems:'center',width:'100%',color:'black'}}>
   Server Side Error
    </div>
    </div>}
    </>
  );
}

export default AnnualReport;