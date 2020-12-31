export const accountsReducer = (accounts = [], action) => {
  if (action.type === 'ACCOUNT_CREATED') {
    return [...accounts, action.payload];
  }

  return accounts;
};
