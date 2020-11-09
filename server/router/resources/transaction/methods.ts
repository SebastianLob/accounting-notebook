import {
  getTransactions as getTransactionsState,
  addTransaction,
  modifyAccountBalance,
  getAccountBalance as getAccountBalanceStore
} from '../../../state';
import CodeError from '../../../types/CodeError';
import Transaction from '../../../types/Transaction';
import {getFormattedNumber, getLastId, getFormattedDate} from '../../../utils/getters';
import {validateId, validateTransactionData, validatePositiveAccountBalance} from '../../../utils/validations';

export const getTransactions = (): Array<Transaction> => getTransactionsState();

export const getTransactionById = (transactionId: string): Transaction => {
  validateId(transactionId);
  const transaction = getTransactions().find(transaction => transaction.id === transactionId);
  if (transaction === undefined) {
    throw new CodeError('Transaction not found', 404);
  }
  return transaction;
};

export const createNewTransaction = (data: any): Transaction => {
  validateTransactionData(data);
  const debit = data.type === 'debit';
  const amount = data.amount;
  if (debit) {
    validatePositiveAccountBalance(amount);
  }
  const nextId = String(parseInt(getLastId(getTransactions())) + 1);
  const newTransaction = new Transaction(nextId, data.type, getFormattedNumber(amount), getFormattedDate(new Date()));
  addTransaction(newTransaction);
  modifyAccountBalance(debit ? (amount * -1) : amount);
  return newTransaction;
};

export const getAccountBalance = (): number => getAccountBalanceStore();