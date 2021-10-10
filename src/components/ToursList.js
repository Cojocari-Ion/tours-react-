import React from 'react';
import Tour from './Tour';

const ToursList =({tours, setTours})=> {

    
    return (
        <div className="tour-list">
            {tours.map((tour) => (
                <Tour setTours={setTours} tours={tours} tour={tour} price={tour.price} image={tour.image} name={tour.name} key={tour.id} info={tour.info} />
            ))}
        </div>
    )
}

export default ToursList
