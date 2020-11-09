import Transaction from './types/Transaction';
import { getFormattedNumber } from './utils/getters';

const initialAccountBalance = 1000;

interface State {
  transactions: Array<Transaction>;
  accountBalance: number;
};

const state: State = {
  transactions: [],
  accountBalance: initialAccountBalance
};

export const getAccountBalance= (): number => getFormattedNumber(state.accountBalance);
export const getTransactions = (): Array<Transaction> => state.transactions;
export const addTransaction = (newTransaction: Transaction): void => {state.transactions.push(newTransaction)};
export const modifyAccountBalance = (transactionAmount: number): void => {state.accountBalance += transactionAmount};