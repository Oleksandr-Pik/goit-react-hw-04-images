import React from 'react';
// import PropTypes from 'prop-types';

const ImageGalleryItem = ({tags, webformatURL, largeImageURL, toggleModal, updateСurrentImage }) => {
  return (
          <img
            className="ImageGalleryItem-image"
            src={webformatURL}
            alt={tags}
            onClick={() => {
              toggleModal();
              updateСurrentImage(largeImageURL);
            }}
          />
  );
};

// ImageGallery.propTypes = {};

export default ImageGalleryItem;
