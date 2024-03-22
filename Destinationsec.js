// DestinationsSection.js
import React from 'react';

const destinations = [
  {
    id: 1,
    name: 'Paris, France',
    image: 'paris.jpg',
    description: 'Experience the romantic charm of Paris with its iconic landmarks such as the Eiffel Tower and Louvre Museum.'
  },
  {
    id: 2,
    name: 'Bali, Indonesia',
    image: 'bali.jpg',
    description: 'Relax on pristine beaches, explore lush rice terraces, and immerse yourself in Balinese culture and spirituality.'
  },
  // Add more destinations as needed
];

const DestinationsSection = () => {
  return (
    <section id="destinations">
      <h2>Popular Destinations</h2>
      <div className="destination-grid">
        {destinations.map(destination => (
          <div key={destination.id} className="destination">
            <img src={destination.image} alt={destination.name} />
            <h3>{destination.name}</h3>
            <p>{destination.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DestinationsSection;
