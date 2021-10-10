import React, {useState} from 'react';
import './Tour.css';

const Tour = ({price, image, id, name, info, tours, tour, setTours})=> {

    const [readMore, setReadMore] = useState(false);    

    const deleteHandler = () => {
        setTours(tours.filter((el) => el.id !== tour.id));
    };

    return (
        <div id={id} className="tour-card">
            <img width="700px" src={image} alt={name} />
            <div className="description">
                <h3 className="tittle">{name}</h3>
                <span className="price">${price}</span>
            </div>
            <p className="info">
                {readMore? `${info}` : `${info.substring(0, 100)}...`}
                <button className="text-remove-btn" onClick={()=> setReadMore(!readMore)}>{readMore? 'show less' : 'show more'}</button>
            </p>
            <button onClick={deleteHandler} className="remove-button">not interested</button>
        </div>
    )
}

export default Tour
