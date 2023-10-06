import './Notification.css'
function NavScrollExample(props) {
  let arr=[...props.arr]
  arr.reverse()
  function formatMyDate(value, locale = 'en-GB') {
    return new Date(value).toLocaleDateString(locale);
}
  return (
    <div style={{margin:'90px 10px',display:'flex',alignItems:'center',justifyContent:'center'}}>
    <table className='notification-table'>
        <thead style={{backgroundColor:'#B80000'}}>
          <tr style={{color:'white'}}>
            <th style={{padding:'0px 10px'}}>Heading</th>
            <th style={{padding:'0px 10px'}}>Description</th>
            <th style={{padding:'0px 10px'}}>Time</th>
            <th style={{padding:'0px 10px'}}>Download</th>
            </tr>
        </thead>
        <tbody >
    {arr.map((element)=>{ return <tr key={element.id} style={{borderBottom:'1px solid black'}}>
        {element.attributes.Heading?<td style={{padding:'0px 10px'}}>{element.attributes.Heading}</td>:<td style={{padding:'0px 10px'}}>...</td>}
        {element.attributes.Description?<td style={{padding:'0px 10px'}}>{element.attributes.Description}</td>:<td style={{padding:'0px 10px'}}>...</td>}
        <td style={{padding:'0px 10px'}}>{formatMyDate(element.attributes.createdAt)}</td>
        {element.attributes.Download.data?<td style={{padding:'0px 10px'}}><a href={`${process.env.REACT_APP_SERVERNAME}${element.attributes.Download.data[0].attributes.url}`}>Download</a></td>:<td style={{padding:'0px 10px'}}>...</td>}
        </tr>
    })}
   </tbody>
</table>
    </div>
  );
}

export default NavScrollExample;

