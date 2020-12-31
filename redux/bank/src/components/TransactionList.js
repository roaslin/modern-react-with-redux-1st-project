import React from 'react';
import { connect } from 'react-redux';

const TransactionList = ({ transactions }) => {
  if (!transactions.length) {
    return <div>No transactions</div>;
  }
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

const mapStateToProps = (state) => {
  return { transactions: state.transactions };
};

export default connect(mapStateToProps)(TransactionList);
