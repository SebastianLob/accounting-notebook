import {getAccountBalance as getAccountBalanceStore} from '../../../state';

export const getAccountBalance = (): number => getAccountBalanceStore();