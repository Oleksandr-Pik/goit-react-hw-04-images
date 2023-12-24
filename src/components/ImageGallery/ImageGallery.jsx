import React from 'react';
// import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';

const ImageGallery = ({ images, toggleModal, updateСurrentImage }) => {
  
  return (
    <ul className="ImageGallery">
      {images.map(({ tags, id, webformatURL, largeImageURL }) => (
        <li className="ImageGalleryItem" key={id}>
          <ImageGalleryItem
            tags={tags}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            toggleModal={toggleModal}
            updateСurrentImage={updateСurrentImage}
          />
        </li>
      ))}
    </ul>
  );
};

// ImageGallery.propTypes = {};

export default ImageGallery;
