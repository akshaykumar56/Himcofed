import './Bankdetail.css'

function BankDetail(props) {
    let arr=[{'No':'1','Name':'Himachal Pradesh State Cooperative Development Federation Ltd','Account':'0427000106713010','Address':'Punjab National Bank, The Mall Shimla-171001','IFSC':'PUNB0042700'},
    {'No':'2','Name':'Himachal Pradesh State Cooperative Development Federation Ltd','Account':'438011958','Address':'  Himachal Pradesh State Cooperative Bank, The Mall Shimla -171001','IFSC':'HPSC0000438'}
  ]
  return (
    <div className='Bank'>

    <h1 style={{textAlign:'center',color:'#0034B8',fontFamily:'Domine'}}>The Bank Detail Electronic Transfer (RTGS/NEFT) In the Account of H.P State Cooperative 
Development Federation Ltd (HIMCOFED)</h1>
    

    <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',margin:'50px 0px 50px 0px'}}>
    <table>

        <thead >
        <tr style={{backgroundColor:'#B80000',color:'white',fontFamily:'Domine'}}>
        <th style={{padding:'10px'}}>Name of Account</th>
        <th style={{padding:'10px'}}>Account No.</th>
        <th style={{padding:'10px'}}>Name of the bank with Address</th>
        <th style={{padding:'10px'}}>IFSC Code</th>
        </tr>
        </thead>
        <tbody>
    {arr.map((element)=>{return <tr key={element.No} > 
        <td style={{padding:'10px',textAlign:'justify',fontWeight:'500'}}>{element.Name}</td>
        <td style={{padding:'10px',textAlign:'justify',fontWeight:'500'}}>{element.Account}</td>
        <td style={{padding:'10px',textAlign:'justify',fontWeight:'500'}}>{element.Address}</td>
        <td style={{padding:'10px',textAlign:'justify',fontWeight:'500'}}>{element.IFSC}</td>
    </tr>})}
    </tbody>
    </table>
    </div>


    </div>
  );
}

export default BankDetail;

