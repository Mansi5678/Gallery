import React from 'react';

// Create a component for the individual column
const Column = ({ images }) => (
  <div className="Col">
    {images.map((image, index) => (
      <img key={index} src={image} alt={`image-${index}`} />

    ))}
  </div>
);

// Create a component for the grid
const PhotoGrid = () => {
  // Define image URLs
  const images = [
    "https://www.w3schools.com/w3images/underwater.jpg",
    "https://www.w3schools.com/w3images/ocean.jpg",
    "https://www.w3schools.com/w3images/wedding.jpg",
    "https://www.w3schools.com/w3images/mountainskies.jpg",
    "https://www.w3schools.com/w3images/rocks.jpg",
    "https://www.w3schools.com/w3images/underwater.jpg",
    "https://www.w3schools.com/w3images/wedding.jpg",
    "https://www.w3schools.com/w3images/rocks.jpg",
    "https://www.w3schools.com/w3images/falls2.jpg",
    "https://www.w3schools.com/w3images/paris.jpg",
    "https://www.w3schools.com/w3images/nature.jpg",
    "https://www.w3schools.com/w3images/mist.jpg",
    "https://www.w3schools.com/w3images/paris.jpg",
    "https://www.w3schools.com/w3images/underwater.jpg",
    "https://www.w3schools.com/w3images/ocean.jpg",
    "https://www.w3schools.com/w3images/wedding.jpg",
    "https://www.w3schools.com/w3images/mountainskies.jpg",
    "https://www.w3schools.com/w3images/rocks.jpg",
    "https://www.w3schools.com/w3images/underwater.jpg",
    "https://www.w3schools.com/w3images/wedding.jpg",
    "https://www.w3schools.com/w3images/rocks.jpg",
    "https://www.w3schools.com/w3images/falls2.jpg",
    "https://www.w3schools.com/w3images/paris.jpg",
    "https://www.w3schools.com/w3images/nature.jpg",
    "https://www.w3schools.com/w3images/mist.jpg",
    "https://www.w3schools.com/w3images/paris.jpg"

  ];

  // Split images into groups of 6 for each column
  const columns = [];
  for (let i = 0; i < images.length; i += 6) {
    columns.push(images.slice(i, i + 6));
  }

  return (
    <div className="Rw">
      {columns.map((images, index) => (
        <Column key={index} images={images} />
      ))}
    </div>
  );
};

export default PhotoGrid;
