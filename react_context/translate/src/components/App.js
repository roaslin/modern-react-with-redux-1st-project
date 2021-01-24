import React, { useState } from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

const App = () => {

  return (
    <div className='ui container'>
      <LanguageStore>
        <LanguageSelector />
        {/* value is part of provider */}
        {/* Before  */}
        {/* <ColorContext.Provider value='red'>
        <LanguageContext.Provider value={language}>
        <UserCreate />
        </LanguageContext.Provider>
      </ColorContext.Provider> */}
        {/* After */}
        <ColorContext.Provider value='red'>
          <UserCreate />
        </ColorContext.Provider>
      </LanguageStore>
    </div>
  );
};

export default App;
