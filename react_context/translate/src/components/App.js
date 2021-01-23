import React, { useState } from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

const App = () => {
  const [language, setLanguage] = useState('english');

  return (
    <div className='ui container'>
      <div>
        Select a language
        <i onClick={() => setLanguage('english')} className='flag us' />
        <i onClick={() => setLanguage('dutch')} className='flag nl' />
      </div>
      {/* value is part of provider */}
      <ColorContext.Provider value='red'>
        <LanguageContext.Provider value={language}>
          <UserCreate />
        </LanguageContext.Provider>
      </ColorContext.Provider>
    </div>
  );
};

export default App;
