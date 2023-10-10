import './About.css'
function About(props) {

  return (
    <div className='about4'>

    <h1 className='about4-h1' style={{color:'#B80000',fontFamily:'Domine'}}>ABOUT HIMCOFED</h1>
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',margin:'50px 0px 25px 0px'}}>
    <h3 className='about4-heading' style={{fontFamily:'Domine',color:'#0034B8',textAlign:'center'}}>HIMACHAL PRADESH STATE CO-OP. DEVELOPMENT FEDERATION</h3>
    <div className='about4-paragraph' style={{margin:'30px 0px',textAlign:'justify',fontFamily:'Domine'}}>The Himachal Pradesh State Cooperative Development Federation Ltd. Shimla came into being in the year 1960, at the initiative of the Department of Cooperation, H.P. Government. Its principal objective in nutshell is, “to promote and develop the Cooperative Movement in Himachal Pradesh; to educate, guide and assist the people in their efforts to build up and expand the co-operative movement”. </div>
    </div>

    <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',margin:'25px 0px 25px 0px'}}>
    <h3 className='about4-heading' style={{fontFamily:'Domine',color:'#0034B8',textAlign:'center'}}>ABOUT PRINTING PRESS</h3>
    <div className='about4-paragraph' style={{margin:'30px 0px',textAlign:'justify',fontFamily:'Domine'}}>A Printing Press was established by this Federation in the year 1971 with a view to provide stationery and printing facilities to the Cooperative Institutions of the State on reasonable prices. In the recent years the Printing Unit has been modernized by installation of three Offset Printing Machines. The modernization has enhanced the quality and quantitative capacity of the Press. As a result this Federation is able to acquire the printing work from H.P. University, Transport Department, Science & Technology, ICAR, Pachayati Raj etc.</div>
    </div>


    </div>
  );
}

export default About;