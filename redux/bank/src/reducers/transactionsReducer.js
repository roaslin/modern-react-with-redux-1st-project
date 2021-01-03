export const transactionsReducer = (transactions = [], action) => {
    if (action.type === 'AMOUNT_ADDED') {
      return [action.payload, ...transactions];
    }
  
    if (action.type === 'AMOUNT_WITHDRAWED') {
        return [action.payload, ...transactions];
      }
    return transactions;
  };
  