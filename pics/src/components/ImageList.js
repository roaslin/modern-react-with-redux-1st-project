import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';


const ImageList = props => {
    // const images = props.images.map((image)=>{ 
    // return <img alt={image.description} key={image.id} src={image.urls.regular} /> // before
        const images = props.images.map((image)=>{ // after with destructure image
        return <ImageCard key={image.id} image={image} />
    });
    return <div className="image-list">{images}</div>;
};

export default ImageList;