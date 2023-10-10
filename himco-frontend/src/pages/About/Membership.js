import './Membership.css'

function Membership(props) {
  let array = [{
     SrNo:'1',
     Name0fSociety :"The Solan District Co-operative Development Federation Ltd; Solan"
    },
    {
     SrNo:'2',
     Name0fSociety :"The Bilaspur District Co-operative Development Federation Ltd; Bilaspur"
    },
    {
     SrNo:'3',
     Name0fSociety :"The Una District Co-operative Development"
    },
    {
     SrNo:'4',
     Name0fSociety :"The Sirmaur District Co-operative Development"
    },
    {
     SrNo:'5',
     Name0fSociety :"The Kullu District Co-operative Development "
    },
    {
     SrNo:'6',
     Name0fSociety :"The Mandi District Co-operative Development"
    },
    {
     SrNo:'7',
     Name0fSociety :"The Hamirpur District Co-operative Development Federation Ltd; Hamirpur"
    },
    {
     SrNo:'8',
     Name0fSociety :"The Kangra District Co-operative Development Federation Ltd;"
    },
    {
     SrNo:'9',
     Name0fSociety :"The H.P. State Coop. Dev. Fed. Employees Urban Salary earner T/C Society Ltd., Sehkar Bhawan, Shimla-171004"
    },
    {
     SrNo:'10',
     Name0fSociety :"H.P. State Coop. Training Centre Coop. Supply Society Ltd. Mashobra, Shimla-171007 "
    },
    {
     SrNo:'11',
     Name0fSociety :"The Bychari Coop. Mktg. Society Ltd. Bychari, P.O. Bychari, Distt. Shimla"
    },
    {
     SrNo:'12',
     Name0fSociety :"The H.P. Milk Fed. Emp. T/C Coop. Society Ltd; Totu, Shimla-11"
    },
    {
     SrNo:'13',
     Name0fSociety :"The Keonthal CMP Society Ltd; Kufri, P.O. Kufri, Teh. & Distt. Shimla-171209"
    },
    {
     SrNo:'14',
     Name0fSociety :"The SBI Regional Office Emp. T/C Society, Shimla-3"
    },
    {
     SrNo:'15',
     Name0fSociety :"The C.P.R.I. Staff Urban Coop. T&C Society Ltd; Shimla, Distt. Shimla-171001."
    },
    {
     SrNo:'16',
     Name0fSociety :"The Sapteshwar Maharaj Fruit and Vegetable M.K.T.C. Producing Coop. Society Ltd. Sapteshwar, P.O. Tiyali, Teh. Theog, Distt. Shimla-171209"
    },
    {
     SrNo:'17',
     Name0fSociety :"The Dabbet Majari Baggar Bar P&M Industry Coop. Society Ltd. Bilaspur, "
    },
    {
     SrNo:'18',
     Name0fSociety :"दी पल्थान सब्जी फल व फूल उत्पादन सहकारी सभा सीमित, गांव व डा० शोली, उप-तह. ननखड़ी, जिला शिमला "
    },
    {
     SrNo:'19',
     Name0fSociety :"The Indian Institute Advance Study Karamchari Kalyan Sansthan Coop. T/C Society Rashtraputti Bhawan,"
    },
    {
     SrNo:'20',
     Name0fSociety :"The Karyali CMP Coop. Society Ltd Karyali, P.O. Karyali, Teh. Suni, Distt. Shimla"
    },
    {
     SrNo:'21',
     Name0fSociety :"The H.P. State Coop. Bank Emp. S/E/ T/C Society Ltd; Shimla"
    },
    {
     SrNo:'22',
     Name0fSociety :"The LIC of India Insurance Advertiser DO’s T/C Coop. Society Ltd. Shimla"
    },
    {
     SrNo:'23',
     Name0fSociety :"The Mangarh Coop. Multi Purpose Society Ltd. Chowki, Teh. Sundernagar, Distt. Mandi"
    },
    {
     SrNo:'24',
     Name0fSociety :"The Dhabla G/S Sehkari Sabha Ltd; VPO Kothi, Teh. Ghumarwin, Distt. Bilaspur "
    },
    {
     SrNo:'25',
     Name0fSociety :"The Dadhol CAS Society Ltd; Padyalag, P.O. Dadhol, Teh. Ghumarwin, "
    },
    {
     SrNo:'26',
     Name0fSociety :"The Coop. Directorate Emp. T/C Society O/o RCS Kasumpti, Shimla-171009"
    },
    {
     SrNo:'27',
     Name0fSociety :"The Eastern Division Employees Coop. Non-Agri. T/C Society Ltd; Kasumpti, Shimla-171009"
    },
    {
     SrNo:'28',
     Name0fSociety :"दी स्वास्थ्य निदेशालय कर्मचारी ऋण व बचत सहकारी सभा सीमित, कसुम्पटी, शिमला-09"
    },
    {
     SrNo:'29',
     Name0fSociety :"दी हिमाचल प्रदेश खादी ग्रामोद्योग बोर्ड कर्मचारी गैर कृषि ऋण एवं बचत सहकारी सभा समिति, शिमला-4"
    },
    {
     SrNo:'30',
     Name0fSociety :"The Creative Distt. Town Labour Construction and Supplies Coop. Society Ltd. Bilaspur "
    },
    {
     SrNo:'31',
     Name0fSociety :"दी सहकार कर्मचारी गृह निर्माण सहकारी सभा सीमित बिलासपुर"
    },
    {
     SrNo:'32',
     Name0fSociety :"H.P. State Coop. Bank Ltd;The Mall,Shimla-171001"
    },
    {
     SrNo:'33',
     Name0fSociety :"The Bassi CMP Coop. Society Ltd. Bassi, Teh. Shri Naina Devi Ji, Distt. Bilaspur"
    },
    {
     SrNo:'34',
     Name0fSociety :"The Bilaspur Town T/C Coop. Society Ltd. Bilaspur, Distt. Bilaspur-174001"
    },
    {
     SrNo:'35',
     Name0fSociety :"The Jai Laxmi Coop. Mkgt. Cum Consumer Society Ltd. Piplughat, P.O. Khira, Teh. Sunni, Distt. Shimla"
    },
    {
      SrNo:'36' ,Name0fSociety :"The Talihiwala CMP Society Ltd. Talihiwal, P.O. Manpura, Teh. Baddi, Distt. Solan-174101"
      },
      {
       SrNo:'37',
       Name0fSociety :"The Baba Jawahar Singh Milk Producer Coop. Diary Society Ltd. Dhala, P.O. Gurumajara, Teh. Nalagarh, Distt. Solan"
      },
      {
       SrNo:'38',
       Name0fSociety :"The Aadhar Multipurpose (T&C) Coop. Society Ltd. Bharmar, Teh. Jawali, Distt. Kangra-176021"
      },
      {
       SrNo:'39',
       Name0fSociety :"The Dharampur CMP Madhan Society Ltd. Dharampur, P.O. Dharampur, Teh. Theog, Distt. Shimla "
      },
      {
       SrNo:'40',
       Name0fSociety :"The Dhella CA Service Society Ltd. P.O. Gurumajara, Teh. Baddi, Distt. Solan-173205"
      },
      {
       SrNo:'41',
       Name0fSociety :"The Guga Gherwin Gram Sewa Sehkari Sabha Ltd. Gherwin, P.O. Gherwin, Teh. Jhandutta, Distt. Bilaspur"
      },
      {
       SrNo:'42',
       Name0fSociety :"The Solan District Co-operative Development Federation Ltd; Solan "
      }]
  return (
   <>
   <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
    <div className='membership' style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>

    <h1 style={{color:'#B80000',fontFamily:'Domine',display:'flex',justifyContent:'center',textAlign:'center'}}>The H.P. State Co-operative Development Federation, Shimla-171004</h1>
    <h2 style={{color:'#B80000',fontFamily:'Domine',display:'flex',justifyContent:'center',margin:'20px 0px 0px 0px',textAlign:'center'}}>List of Member Societies as on 31.03.2023</h2>
    </div>

<div className='membership-table' style={{margin:'0px 0px 30px 0px'}}>
    <table >
      <thead>
        <tr style={{backgroundColor:'#B80000',color:'white'}}>
          <th>Sr No.</th>
          <th style={{padding:'0px 10px'}}>Name Of Society</th>
        </tr>
      </thead>
      <tbody>
      {array.map((element)=>{return <tr>
        <td style={{width:'50px',textAlign:'center'}}>{element.SrNo}</td>
        <td style={{padding:'0px 10px'}}>{element.Name0fSociety}</td>
      </tr>})}
      </tbody>
    </table>
    </div>
    </div>

   </>
  );
}



export default Membership;

