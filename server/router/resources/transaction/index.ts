import express from 'express';
import {getTransactions, getTransactionById, createNewTransaction, getAccountBalance} from './methods';
import {Request, Response} from '../../../types/ExpressTypes';

const transactionRouter = express.Router();

transactionRouter.get('/', (req: Request, res: Response) => res.json(getTransactions()));

transactionRouter.get('/:id', (req: Request, res: Response) => {
  try {
    res.json(getTransactionById(req.params.id));
  } catch (error) {
    res.status(error.code).json({Error: error.message});
  }
});

transactionRouter.post('/', (req: Request, res: Response) => {
  try {
    res.json({
      newTransaction: createNewTransaction(req.body),
      balanceAccount: getAccountBalance()
    });
  } catch (error) {
    res.status(error.code).json({Error: error.message});
  }
});

export default transactionRouter;