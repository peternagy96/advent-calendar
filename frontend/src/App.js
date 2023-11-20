import React from 'react';
import AdventCalendar from './AdventCalendar';
import './App.scss';

const App = () => {
  return (
      <div className="app">
        <div className="container">
            <div className="headline-container">
                <h1 className="title">Advent Calendar</h1>
            </div>
            <AdventCalendar />
        </div>
    </div>
  );
};

export default App;
