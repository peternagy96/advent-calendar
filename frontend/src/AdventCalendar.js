import React from 'react';
import axios from 'axios';
import Present from './Present';
import './AdventCalendar.scss';

const AdventCalendar = () => {
    const [days, setDays] = React.useState([])

    React.useEffect(() => {
        const apiCall = async () => {
          try {
            const response =await axios.get(`${process.env.REACT_APP_API_URL}/api/days`);
            setDays(response.data.days);
          } catch (e) {
            console.log(e);
          }
        }
        apiCall();
      }, [])

    return <div className="advent-calendar">
        <div className="calendar-grid">
            {days.map((day, index) => (
                <div key={index} className="grid-item">
                    {<Present key={index} day={day} />}
                </div>)
            )}
        </div>
    </div>;
};

export default AdventCalendar;
