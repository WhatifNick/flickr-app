import React from 'react';
import { Link } from 'react-router-dom'
import Centered from '../styles/Styles'
import Button from '@material-ui/core/Button';



const HomePage = () => (
  <div className="homepage-background">
    <Centered>
        <div className="homepage">
        <h1>Welcome</h1><br />
        <Button ><Link to="/images" className="images-button">Go to images</Link></Button>
        </div>
    </Centered>
  </div>
);

export default HomePage