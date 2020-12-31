export const createAccount = account => {
  return {
    type: 'ACCOUNT_CREATED',
    payload: { name: account, amount: 100 },
  };
};
