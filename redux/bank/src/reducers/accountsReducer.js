export const accountsReducer = (accounts = [], action) => {
  if (action.type === 'ACCOUNT_CREATED') {
    console.log('reducer' + action.payload);
    return [...accounts, action.payload];
  }

  return accounts;
};
