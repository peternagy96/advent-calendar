import React from 'react';
import AdventCalendar from './AdventCalendar';
import './App.scss';

const App = () => {
  return (
      <div className="app">
        <div className="container">
            <div className="headline-container">
                <span className="title">Advent Calendar</span>
            </div>
            <AdventCalendar />
        </div>
    </div>
  );
};

export default App;
