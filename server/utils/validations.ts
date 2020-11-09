import {getAccountBalance} from "../state";
import CodeError from "../types/CodeError";

export const validateId = (transactionId: string): void => {
  const alphanumericRegEx  = /^[a-z0-9]+$/i;
  if (!alphanumericRegEx.test(transactionId)) {
    throw new CodeError('The ID is invalid.', 400);
  }
};

export const validateTransactionData = (data: any): void => {
  if (data.type === undefined || (data.type !== 'debit' && data.type !== 'credit')) {
    throw new CodeError('You must send debit or credit operation', 400);
  }
  if (data.amount === undefined || typeof data.amount !== 'number') {
    throw new CodeError('You must send a number for the amount', 400);
  }
};

export const validatePositiveAccountBalance = (amount: number): void => {
  const accountBalance = getAccountBalance();
  if (accountBalance - amount < 0) {
    throw new CodeError('It is not possible to do this transaction. The account balance cannot be negative', 409);
  }
};