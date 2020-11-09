import express from 'express';
import Resource from '../types/Resource';
import {Router} from '../types/ExpressTypes';
import transaction from './resources/transaction';
import accountBalance from './resources/accountBalance';


const router: Router = express.Router();

const resources: Array<Resource> = [
  {path: '/transaction', importedResource: transaction},
  {path: '/accountBalance', importedResource: accountBalance}
];

resources.forEach((resource: Resource) => router.use(resource.path, resource.importedResource));

export default router;