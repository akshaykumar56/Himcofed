import './Coop_principle.css'
import Accordion from './Accordion'
function CoopPrinciple(props) {

  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
    <div className='coop_principle' style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>

    <h1 style={{color:'#B80000',fontFamily:'Domine',display:'flex',justifyContent:'center',textAlign:'center'}}>COOPERATIVE DEFINITION VALUE & PRINCIPLES</h1>
    <div style={{display:'flex',justifyContent:'center',flexDirection:'column',margin:'50px 0px 30px 0px'}}>
    <h3 style={{fontFamily:'Domine',backgroundColor:'#0034B8',color:'white',width:'200px',padding:' 5px 15px '}}><center>Definition</center></h3>
    <div className='definition_text' style={{margin:'5px 0px',textAlign:'justify',fontFamily:'Domine'}}>A co-operative is an autonomous association of persons united voluntarily to meet their common economic, social, and cultural needs and aspirations through a jointly-owned and democratically-controlled enterprise. Ranging from small-scale to multi-million dollar businesses across the globe, co-operatives employ more than 100 million women and men and have more than 800 million individual members.</div>
    </div>

    <div style={{display:'flex',justifyContent:'center',flexDirection:'column',margin:'10px 0px 5px 0px'}}>
    <h3 style={{fontFamily:'Domine',backgroundColor:'#0034B8',color:'white',width:'200px',padding:' 5px 15px '}}><center>Values</center></h3>
    <div className='definition_text' style={{margin:'5px 0px',textAlign:'justify',fontFamily:'Domine'}}>
    Co-operatives are based on the values of self-help, self-responsibility, democracy, equality, equity and solidarity. In the tradition of their founders, co-operative members believe in the ethical values of honesty, openness, social responsibility and caring for others.
</div>
    </div>


    <div className='principle' style={{display:'flex',justifyContent:'center',flexDirection:'column',margin:'50px 0px 5px 0px'}}>
    <h3 style={{fontFamily:'Domine',backgroundColor:'#0034B8',color:'white',width:'200px',padding:' 5px 15px '}}><center>Principles</center></h3>
    <div className='definition_text' style={{margin:'5px 0px',fontFamily:'Domine'}}>
    The co-operative principles are guidelines by which co-operatives put their values into practice:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                          
    </div>
    </div>
    </div>
  
    
    <div style={{width:'80%',margin:'0px 0px 50px 0px'}}>
    <Accordion/>
   </div>
   </div>
  );
}



export default CoopPrinciple;

