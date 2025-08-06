import React, { useEffect, useState } from 'react';
import BirthdayCard from './components/core/BirthdayCard';
import './styles/global.css';

const App: React.FC = () => {
  const [name, setName] = useState('Birthday Person');
  const [message, setMessage] = useState('Happy Birthday! 🎉');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlName = urlParams.get('name');
    const urlMessage = urlParams.get('message');

    if (urlName) {
      setName(decodeURIComponent(urlName));
    }
    if (urlMessage) {
      setMessage(decodeURIComponent(urlMessage));
    }
  }, []);

  return (
    <div className='App'>
      <BirthdayCard name={name} message={message} />
    </div>
  );
};

export default App;
