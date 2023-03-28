import React from 'react';

const getDate = () => {
  const today = new Date();

  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  return today.toLocaleDateString('en-US', options);
};

export default getDate;
