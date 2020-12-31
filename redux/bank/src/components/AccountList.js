import React from 'react';
import { connect } from 'react-redux';
import { addTransaction, withdrawTransaction } from '../actions';

const AccountList = ({ accounts, addTransaction, withdrawTransaction }) => {
  if (accounts.length === 0) {
    return <div>No accounts</div>;
  }

  const renderedAccount = accounts.map((account) => {
    return (
      <div className='item' key={account.name}>
        <div className='content'>
          <div className='header'>
            {account.name}
            <button
              className='ui mini button'
              onClick={() => addTransaction(account.name)}
            >
              Add amount
            </button>
            <button
              className='ui mini button'
              onClick={() => withdrawTransaction(account.name)}
            >
              Withdraw
            </button>
          </div>
        </div>
      </div>
    );
  });
  return <div>{renderedAccount}</div>;
};

const mapStateToProps = (state) => {
  return { accounts: state.accounts };
};

export default connect(mapStateToProps, {
  addTransaction,
  withdrawTransaction,
})(AccountList);
