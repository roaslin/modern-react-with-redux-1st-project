import React from 'react';
import { connect } from 'react-redux';

// const accounts = [{ name: 'raul' }, { name: 'davura' }, { name: 'goku' }];

const AccountList = ({ accounts }) => {
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
              //   onClick={() => selectSong(song)}
            >
              Add amount
            </button>
            <button
              className='ui mini button'
              //   onClick={() => selectSong(song)}
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
  console.log(state);
  return { accounts: state.accounts };
};

export default connect(mapStateToProps)(AccountList);
