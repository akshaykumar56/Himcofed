import Img1 from './1.png'
import './Achievments.css'
function NavScrollExample() {
  return (
    <div className='achievements'>
      <div className='image' style={{backgroundImage:`url(${Img1})`,backgroundRepeat:"no-repeat",backgroundSize:'cover',backgroundPosition:'center'}}></div>
      <div className='image' style={{backgroundImage:`url(${Img1})`,backgroundRepeat:"no-repeat",backgroundSize:'cover',backgroundPosition:'center'}}></div>
    </div>
  );
}

export default NavScrollExample;