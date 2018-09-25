import React, { Component } from 'react';
import styled from "styled-components";
import ReactModal from 'react-modal';
// import Button from '@material-ui/core/Button';

import store from '../store'
import Centered from '../styles/Styles'
import Image from '../components/Image';

ReactModal.setAppElement('#root')


const List = styled.div`
    text-align: center;
`;

const Thumbnail = styled.button`
border-radius: 50%;
background: #3F51B5;
padding: 1vw;
color: black;
margin: 10px;
width: auto;
`;


const customStyles = {
  content: {
    backgroundColor: "#3F51B5",
    border: "1px solid black",
    borderRadius: "50px",
    bottom: "auto",
    height: "40vw", // set height
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
      showModal: false,
      loading: true,
    }
  }

  handleOpenModal = (imageId) => {
    this.setState({ showModal: true });
    store.dispatch({
      type: 'set_imageId',
      imageId: imageId,
    })
    
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  renderModal = () => {
    const { images, imageId } = store.getState();

    const image = images[imageId];
    const large = image && `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`;

    return(
      <div >
        <List>
          <img src={large}></img>
          <h2>{image && image.title}</h2>
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
      console.log(j);
      store.dispatch({
        type: 'set_images',
        images: j.photos.photo
      })
      this.setState({ loading: false });
    }.bind(this))
  }




    render() {
      const { showModal } = this.state;
      const { images } = store.getState();
      return (
        <Centered>
            <h1>Images Page</h1>
            <h2>List of interesting images from Flickr</h2>
            {/* const order = store.getState().order */}
            {images.length > 0 && images.map((image, i) => {
              const thumbnail = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_t.jpg`;
              return (
                <Thumbnail onClick={() => this.handleOpenModal(i)}>
                  <Image
                    imagePath={thumbnail}
                    title={image.title}
                  />
                </Thumbnail>
              )
            })}
            <ReactModal
          isOpen={showModal}
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