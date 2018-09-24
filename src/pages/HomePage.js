import React from 'react';
import { Link } from 'react-router-dom'
import Centered from '../styles/Styles'


// import Background from '../images/home-background.jpg';

// var sectionStyle = {
//   width: "100%",
//   height: "400px",
//   backgroundImage: `url(${Background})`
// };

// class Section extends Component {
//   render() {
//     return (
//       <section style={ sectionStyle }>
//       </section>
//     );
//   }
// }

const HomePage = () => (
  <div className="Homepage-background">
    <Centered>
        <div className="Homepage">
        <h1>Welcome</h1><br />
        <Link to="/images" className="ImagesPageLink">Images</Link>
        </div>
    </Centered>
  </div>
);

export default HomePage