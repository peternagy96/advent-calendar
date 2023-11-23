import React from 'react';
import axios from 'axios';
import Present from './Present';
import {Card} from './Card';
import './AdventCalendar.scss';

import defaultDays from './defaultDays.json';

const AdventCalendar = () => {
    const [days, setDays] = React.useState(defaultDays["days"])
    const [showCard, setShowCard] = React.useState(false);
    const [cardTitle, setCardTitle] = React.useState('');
    const [cardText, setCardText] = React.useState('');
    const [cardImg, setCardImg] = React.useState('img/tree.png');

    React.useEffect(() => {
        const apiCall = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/days`);
                setDays(response.data.days);
            } catch (e) {
                console.log(e);
            }
        }
        apiCall();
    }, [])

    const handlePresentClick = async (event, day) => {
        if (!day.active) {
            return;
        }
        const apiCall = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/days/${day.id}`);
                setCardTitle(response.data.title);
                setCardText(response.data.text);
                if (response.data.img) {
                    setCardImg(response.data.img);
                }
            } catch (e) {
                setCardTitle(`Title for day ${day.id}`);
                setCardText(`Text for day ${day.id}`);
            }
        }
        apiCall()
            .then(() => {
                document.body.style.overflow = "hidden";
                setShowCard(true);
            })
            .catch(err => {
                setShowCard(false)
            });
    }

    const handleBackgroundClick = () => {
        document.dispatchEvent(new Event("closed"));
        document.body.style.overflow = null;
        setShowCard(false);
    }

    return <div className="advent-calendar">
        {showCard &&
            <Card
                title={cardTitle}
                text={cardText}
                img={cardImg}
                handleBackgroundClick={handleBackgroundClick}
            />}
        <div className="calendar-grid">
            {days.map((day, index) => (
                <div key={index} className="grid-item">
                    {<Present key={index} day={day} handleClick={(e) => handlePresentClick(e, day)} />}
                </div>)
            )}
        </div>
    </div>;
};

export default AdventCalendar;
