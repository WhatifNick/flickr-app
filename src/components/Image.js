import React from 'react';
import styled from "styled-components";


const Img = styled.img`
  float: left;
  opacity: 0.8;
  border-radius: 50%;
  height: 15vw;
  width: 15vw;

  &:hover {
    opacity: 1;
    -webkit-transform: scale(1.03);
    -ms-transform: scale(1.03);
    transform: scale(1.02);
  }
`;

const ImgDiv = styled.div`
  color: black;
  background-color: white;
`;

const Title = styled.h1`
  margin: 1px;
`

const Image = (props) => (
  <ImgDiv>
    <Img src={props.imagePath} alt={props.title}/>
    {/* <Title>{props.title}</Title> */}
  </ImgDiv>
);

export default Image;