export type typeOfTransaction = 'credit'|'debit';

export default class Transaction {
  id: string;
  type: typeOfTransaction;
  amount: number;
  effectiveDate: string;

  constructor(id: string, type: typeOfTransaction, amount: number, effectiveDate: string) {
    this.id = id;
    this.type = type;
    this.amount = amount;
    this.effectiveDate = effectiveDate;
  }

  getAmount(): number {
    return this.amount;
  }
}