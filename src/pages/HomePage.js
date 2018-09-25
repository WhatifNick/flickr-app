import React from 'react';
import { Link } from 'react-router-dom'
import Centered from '../styles/Styles'


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