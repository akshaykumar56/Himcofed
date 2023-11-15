import './Gallery.css'
import  Carousel  from './Corousel';
function Gallery() {
  
  return (
    <div className="Gallery">
      <div>
        <div className='gallery-heading'>
        Gallery
        </div>
        <div className='gallery-text' >
        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida sed tellus non ultrices. Aliquam feugiat et tortor at eleifend. Duis vitae ligula sed massa rhoncus dignissim. Cras id quam laoreet lectus luctus efficitur in et mi. Suspendisse sit amet dapibus arcu, vel porttitor nisl. Ut malesuada ullamcorper luctus. Duis orci nibh, interdum varius mollis non, tempus tristique enim. */}
        </div>
      </div>
      <div className='carousel-gallery'>
      <Carousel/>
      </div>
        </div>
  );
}

export default Gallery;