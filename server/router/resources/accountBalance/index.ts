import express from 'express'
import {getAccountBalance} from './methods';

const accountBalanceRouter = express.Router();

accountBalanceRouter.get('/', (req: express.Request, res: express.Response) => res.json(getAccountBalance()));

export default accountBalanceRouter;