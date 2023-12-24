import React from 'react';

const Button = ({ handleLoadMore }) => {

  return (
    <button
      className="Button"
      type="button"
      onClick={handleLoadMore}
    >
      Load more
    </button>
  );
};

export default Button;
