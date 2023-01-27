import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function App() {
  return (
    <Carousel>
      <div>
        <img src="https://www.rd.com/wp-content/uploads/2018/11/France.jpg" alt="France" />
        <p className="legend">France</p>
      </div>
      <div>
        <img src="https://www.rd.com/wp-content/uploads/2018/11/Norway.jpg" alt="Norway" />
        <p className="legend">Norway</p>
      </div>
      <div>
        <img src="https://www.rd.com/wp-content/uploads/2018/11/New-Zealand.jpg"  alt="New Zealand" />
        <p className="legend">New Zealand</p>
      </div>
    </Carousel>
  );
}

export default App;