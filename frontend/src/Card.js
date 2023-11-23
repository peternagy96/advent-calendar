import React from 'react';
import './Card.scss';


export const Card = (props) => {
    // card component shown in the middle of the screen with
    // the text of the day, when a box is clicked
    return (
        <div className="card__background" >
            <div className="card">
                <div className='card__content' >
                    <div className="card__title">
                        {props.title}
                    </div>
                    <div className="card__text">
                        {props.text}
                    </div>
                </div>
            </div>
        </div>
    );
}