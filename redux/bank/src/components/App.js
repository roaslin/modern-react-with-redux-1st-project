import React from 'react';
import AccountList from './AccountList';
import AddAccount from './AddAccount';
import TransactionList from './TransactionList';

const App = () => {
  return (
    <div className='ui container grid'>
      <div className='ui row'>
        <div className='column four wide'>
          <AddAccount />
        </div>
        <div className='column four wide'>
          <AccountList />
        </div>
        <div className='column eight wide'>
          <TransactionList />
        </div>
      </div>
    </div>
  );
};

export default App;
