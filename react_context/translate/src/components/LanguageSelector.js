import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

const LanguageSelector = (props) => {
  return (
    <LanguageContext.Consumer>
      {({onLanguageChange}) => (
        <div>
          Select a language
          <i
            onClick={() => onLanguageChange('english')}
            className='flag us'
          />
          <i
            onClick={() => onLanguageChange('dutch')}
            className='flag nl'
          />
        </div>
      )}
    </LanguageContext.Consumer>
  );
};

export default LanguageSelector;
