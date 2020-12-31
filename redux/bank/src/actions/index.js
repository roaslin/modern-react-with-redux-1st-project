export const createAccount = (account) => {
  return {
    type: 'ACCOUNT_CREATED',
    payload: { name: account, amount: 100 },
  };
};

export const addTransaction = (account) => {
  return {
    type: 'AMOUNT_ADDED',
    payload: { name: account, amount: 50 },
  };
};

export const withdrawTransaction = (account) => {
  return {
    type: 'AMOUNT_WITHDRAWED',
    payload: { name: account, amount: -20 },
  };
};
