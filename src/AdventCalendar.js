import React from 'react';
import Present from './Present';
import './AdventCalendar.scss';

const AdventCalendar = () => {
    const totalDays = 24; // Total number of days in the advent calendar

    return <div className="advent-calendar">
        <div className="calendar-grid">
            {Array.from({ length: totalDays }, (_, index) => (
                <div key={index} className="grid-item">
                    {<Present key={index} day={index} />}
                </div>)
            )}
        </div>
    </div>;
};

export default AdventCalendar;
