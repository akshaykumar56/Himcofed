import './About.css'
import './Management.css'
function Management(props) {

  return (
    <div className='about-management'>

    <h1 style={{display:'flex',justifyContent:'center',alignItems:'center',color:'#B80000',fontFamily:'Domine'}}>Management Of HIMCOFED</h1>
    <div style={{display:'flex',justifyContent:'center',flexDirection:'column',margin:'50px 0px 10px 0px'}}>
    <h3 style={{fontFamily:'Domine',backgroundColor:'#0034B8',color:'white',width:'250px',padding:'5px 0px'}}><center>Chairman</center></h3>
    <div className='about-management-paragraph'style={{margin:'30px 0px',textAlign:'justify',fontFamily:'Domine'}}>Due to Election Petition pend before the Hon'ble High Court from 2018, Registrar Cooperative Societies Himachal Pradesh appointed Administrator vide their office letter No.  7-33/2007 Coop. (A&S) dated 3rd June 2023 in place of Sh. Kaul Singh Negi nominated Chairman for the smooth functioning of the Federation and conduct the election of HIMCOFED within six months. Sh. Gaurav Chauhan Deputy Registrar Eastern Division (Shimla) Join the Duties as Administrator of HIMCOFED on dated 5-6-2023.</div>
    </div>

    <div style={{display:'flex',justifyContent:'center',flexDirection:'column',margin:'10px 0px 25px 0px'}}>
    <h3 style={{fontFamily:'Domine',backgroundColor:'#0034B8',color:'white',width:'250px',padding:'5px 0px'}}><center>Secretary</center></h3>
    <div className='about-management-paragraph'style={{margin:'30px 0px',textAlign:'justify',fontFamily:'Domine'}}>The Secretary shall be the Chief Executive of the Federation ltd subject to the Control of the President and Executive Committees.
                 After the Retirement of Sh. Mehar Chand Thakur during  the year 2014 ,  there is no regular Secretary of Himcofed due to no employees fall the feeder category of the post of the Secretary.
         As per merit cum seniority list Sh. Gaurav Jarial Lecturer as holding & act the Post of Secretary without any consequential benefit since September, 2019   
</div>
    </div>
    </div>
  );
}



export default Management;

