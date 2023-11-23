import React from 'react';
import axios from 'axios';

import AdventCalendar from './AdventCalendar';
import './App.scss';

const App = () => {

  const [title, setTitle] = React.useState('');

  React.useEffect(() => {
    const apiCall = async () => {
      try {
        const response =await axios.get(`${process.env.REACT_APP_API_URL}/api/title`);
        setTitle(response.data);
      } catch (e) {
        console.log(e);
        setTitle("Tja");
      }
    }
    apiCall();
  }, [])

  return (
      <div className="app">
        {/* <div className='ornament'>
          <img className={"ornament-img"} src='img/ornament.png' alt=''/>
        </div> */}
        <div className="container">
            <div className="headline-container">
                <img className={"tree"} src='img/tree.png' alt=''/>
                <span className="title">{title}</span>
            </div>
            <AdventCalendar />
            <div className="spacer"/>
        </div>
    </div>
  );
};

export default App;
