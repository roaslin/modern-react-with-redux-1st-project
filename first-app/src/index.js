// import REACT and REACTDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// create ract component
const App = function(){
    return <div>Hi there!</div>;
};

// take the react component and show itr on the screen

ReactDOM.render(<App />, document.querySelector('#root'));
