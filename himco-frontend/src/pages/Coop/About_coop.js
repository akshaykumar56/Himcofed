import './About_coop.css'

function AboutCoop(props) {

  return (
    <div className='about_coop_main' style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
    <div className='about_coop' style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>

    <h1 style={{color:'#B80000',fontFamily:'Domine',display:'flex',justifyContent:'center'}}>ABOUT COOPERATIVE</h1>
    <p style={{fontFamily:'Domine',textAlign:'justify',margin:'30px 0px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:"28px"}}>Co-operatives are social enterprises formed by members, for members, for good </p>
    <p style={{fontFamily:'Domine',textAlign:'justify',margin:'30px 0px'}}>Co-operatives range in size - from humble store-fronts to large Fortune 500 companies. In fact, the Co-operatives can be found in all traditional economic sectors, including agriculture, fisheries, consumer and financial services, housing, and production (workers’ co-operatives). While similar in many ways to any other enterprise, Co-operatives are unique in ways that truly matter to society and to the members they serve.</p>
    <div style={{display:'flex',justifyContent:'center',flexDirection:'column',margin:'50px 0px 30px 0px'}}>
    <h3 style={{fontFamily:'Domine',backgroundColor:'#0034B8',color:'white',width:'200px',padding:'5px 0px '}}><center>Mission</center></h3>
    <div className='about_coop_mission_text' style={{margin:'5px 0px',textAlign:'justify',fontFamily:'Domine'}}>To Promote a Strong and Vibrant Cooperative Movement in the State for Eco-friendly, equitable & Socio-Economic Development of Rural People. The responsibility of Union is Cooperative Education, Training, Publicity, propaganda and providing of information's and guidance's.</div>
    </div>

    <div style={{display:'flex',justifyContent:'center',flexDirection:'column',margin:'10px 0px 5px 0px'}}>
    <h3 style={{fontFamily:'Domine',backgroundColor:'#0034B8',color:'white',width:'200px',padding:'5px 0px '}}><center>Vision</center></h3>
    <div className='about_coop_vision_text' style={{margin:'5px 0px',textAlign:'justify',fontFamily:'Domine'}}>
    We build Cooperation for Member's Socio-economic upliftment through Cooperative Education, Training and Information.
</div>
    </div>


   </div> 
   </div>
  );
}



export default AboutCoop;

