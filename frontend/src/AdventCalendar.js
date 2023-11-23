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
            } catch (e) {
                setCardTitle(`Title for day ${day.id}`);
                setCardText(`Text for day ${day.id}`);
                console.log(e);
            }
        }
        apiCall();
        setShowCard(true);

    }

    const handleCardClick = () => {
        setShowCard(false);
    }

    return <div className="advent-calendar">
        {showCard &&
        <div className="calendar-card" onClick={handleCardClick}>
            <Card title={cardTitle} text={cardText}  />
        </div>}
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
