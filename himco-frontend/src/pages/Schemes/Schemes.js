import './Schemes.css'
import { useState,useEffect } from 'react';
function Schemes(props) {
    let[arr,setArr]=useState([])
    useEffect(() => {
      let fetchData=async ()=>{
        let data=await fetch(`${process.env.REACT_APP_SERVERNAME}/api/schemes?populate=*`);
        let response=await data.json();
        let notification=await response.data;
        setArr([...notification])
      }
      fetchData()   
    },[]);
  arr.reverse()
//   function formatMyDate(value, locale = 'en-GB') {
//     return new Date(value).toLocaleDateString(locale);
// }
  return (
    <>
    {arr.length!==0?<div style={{margin:'90px 10px',display:'flex',alignItems:'center',justifyContent:'center'}}>
    <table className='schemes-table'>
        <thead style={{backgroundColor:'#B80000'}}>
          <tr style={{color:'white'}}>
            <th style={{padding:'0px 10px'}}>Description</th>
            {/* <th style={{padding:'0px 10px'}}>Time</th> */}
            <th style={{padding:'0px 10px'}}>Download</th>
            </tr>
        </thead>
        <tbody >
    {arr.map((element)=>{ return <tr key={element.id} style={{borderBottom:'1px solid black'}}>
        {element.attributes.Description?<td style={{padding:'0px 10px'}}>{element.attributes.Description}</td>:<td style={{padding:'0px 10px'}}>...</td>}
        {/* <td style={{padding:'0px 10px'}}>{formatMyDate(element.attributes.createdAt)}</td> */}
        {element.attributes.Download.data?<td style={{padding:'0px 10px'}}><a href={`${process.env.REACT_APP_SERVERNAME}${element.attributes.Download.data[0].attributes.url}`}>Download</a></td>:<td style={{padding:'0px 10px'}}>...</td>}
        </tr>
    })}
   </tbody>
</table>
    </div>:<div style={{margin:'90px 10px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
    <div className='Error' style={{textAlign:'center',fontFamily:'Domine',display:'flex',justifyContent:'center',alignItems:'center',width:'100%',color:'black',fontSize:'30px'}}>
   Server Side Error
    </div>
    </div>}
    </>
  );
}

export default Schemes;

