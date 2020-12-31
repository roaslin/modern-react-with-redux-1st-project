import React from 'react';

const transactions = [
  {
    name: 'raul',
    amount: 10,
  },
  {
    name: 'raul',
    amount: 150,
  },
  {
    name: 'raul',
    amount: -110,
  },
];

const TransactionList = () => {
  const renderedTransactions = transactions.map((transaction) => {
    return (
      <div className='item'>
        <div className='content'>
          <div className='header'>
            {transaction.name} [{transaction.amount}]
          </div>
        </div>
      </div>
    );
  });
  return <div>{renderedTransactions}</div>;
};

export default TransactionList;
