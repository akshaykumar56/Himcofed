import './Contact.css'

function Contact(props) {

  return (
    <div className='contact' style={{display:'flex',flexDirection:'column',justifyContent:'flex-start'}}>
     <div style={{height:'40px',width:'200px',padding:'10px 20px',color:'white',backgroundColor:'#B80000',fontSize:'25px',display:'flex',justifyContent:'center',alignItems:'center',fontFamily:'Domine',margin:'30px 0px'}}>
        Address
     </div>
    <div>
        <div className='eng-heading' style={{margin:'10px 0px',fontFamily:'Domine'}}>Sahkar Bhawan, Near Dogra Lodge, Shimla-171004(H.P.) Phone : 2656667-2803323 Fax : 0177-2656667 E-mail : himcofedshimla@gmail.com</div>
        <div className='hin-heading' style={{margin:'10px 0px',fontFamily:'Domine'}}>सहकार भवन, समीप डोगरा लॉज, शिमला - 171004 (हि. प्र.) दूरभाष : 2656667- 2803323, फैक्स : 0177 - 2656667</div>
    </div>
    <div className='contact-email' style={{height:'40px',padding:'10px 20px',color:'white',backgroundColor:'#0033B8',fontSize:'25px',display:'flex',justifyContent:'center',alignItems:'center',fontFamily:'Domine',margin:'30px 0px'}}>
      <a className='Link' href='https://himcofedshimla@gmail.com' style={{textDecoration:'none',color:'white'}}>Email: himcofedshimla@gmail.com</a>
     </div>

    </div>
  );
}

export default Contact;