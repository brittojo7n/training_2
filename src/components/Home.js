import '../App.css';
import { Carousel } from 'antd';

function Home() {
  const carouselImgStyle = {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '8px'
  };

  return (
    <div style={{
      maxWidth: '350px',
      margin: '40px auto',
      padding: '24px',
    }}>
      <h1 style={{ textAlign: 'center', fontSize: '1.5rem', marginBottom: '16px' }}>Home Page</h1>
      <Carousel autoplay>
        <div>
          <img
            src="https://picsum.photos/id/1018/350/180"
            alt="Slide 1"
            style={carouselImgStyle}
          />
        </div>
        <div>
          <img
            src="https://picsum.photos/id/1025/350/180"
            alt="Slide 2"
            style={carouselImgStyle}
          />
        </div>
        <div>
          <img
            src="https://picsum.photos/id/1035/350/180"
            alt="Slide 3"
            style={carouselImgStyle}
          />
        </div>
        <div>
          <img
            src="https://picsum.photos/id/1043/350/180"
            alt="Slide 4"
            style={carouselImgStyle}
          />
        </div>
      </Carousel>
    </div>
  )
}

export default Home;