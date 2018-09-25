import React, { Component } from 'react';
import styled from "styled-components";
import ReactModal from 'react-modal';
// import Button from '@material-ui/core/Button';

import Centered from '../styles/Styles'
import Image from '../components/Image';

ReactModal.setAppElement('#root')


const List = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    align-self: center;
    text-align: center;
`;

const Button = styled.button`

border-radius: 50%;
background: #3498DB;
padding: 1vw;
color: black;
margin: 10px;
width: auto;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: black;
  margin-right: 20px;


`
// const Button = styled.button`
//   &:hover {
//     border: 3px solid #f8d315;
//   }
// `;

const customStyles = {
  content: {
    backgroundColor: "#3498DB",
    border: "1px solid black",
    borderRadius: "50px",
    bottom: "auto",
    height: "600px", // set height
    left: "50%",
    padding: "2rem",
    position: "absolute",
    right: "auto",
    top: "25%", // start from center
    transform: "translate(-50%,-" + "90px" + ")", // adjust top "up" based on height
    width: "70%",
    maxWidth: "60rem"
  }
};





class ImagesPage extends Component {
  constructor() {
    super();
    this.state = {
      pictures: [],
      images: [],
      showModal: false,
      itemId: 0,
    }
  }

  handleOpenModal = (imageId) => {
    this.setState({ showModal: true, itemid: imageId });
    
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  renderModal = () => {
    const image = this.state.images[this.state.itemid];
    if (image) console.log(1111, image.farm);
    const large = image && `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`;

    return(
      <div>
        <List>
          <img src={large}></img>
          <Box />
          <div>
            <h2>{image && image.title}</h2>
          
          </div>
        {/* <Image
          imagePath={large}
        />
        <h1>{image.title}</h1> */}
        </List>
      </div>
    )
  }


  componentDidMount() {
    fetch('https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=84c6afeaf411534f698e1316eb6cf7d5&format=json&nojsoncallback=1')
    .then(function(response){
      return response.json()
    })
    .then(function(j){
      this.setState({ images: j.photos.photo });
      
    }.bind(this))
  }
    render() {
      // const images = this.state
      return (
        <Centered>
            <h1>Images Page</h1>
            <h2>Here is the images page</h2>
            {this.state.images.map((image, i) => {
              const thumbnail = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_t.jpg`;
              const large = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_b.jpg`;
              console.log(image)
            return (
              <Button onClick={() => this.handleOpenModal(i)}>
                <Image
                  imagePath={thumbnail}
                  title={image.title}
                />
              </Button>
            )
            })}
            <ReactModal
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal}
          style={customStyles}
        >
          {this.renderModal()}
        </ReactModal>
        </Centered>
      ) 
    }
  }
  
  export default ImagesPage;