import { moveSyntheticComments } from "typescript";

export const getLastId = (array: Array<any>): string => {
  const lastId = array.length === 0 ? '0' : array[array.length-1].id;
  return lastId;
};

export const getFormattedNumber = (numberToFormat: number): number => {
  return +parseFloat(String(numberToFormat)).toFixed(2);
};

export const getFormattedDate = (dateToFormat: Date): string => {
  const year = String(dateToFormat.getFullYear()).padStart(4, '0');
  const month = String(dateToFormat.getMonth()+1).padStart(2, '0');
  const day = String(dateToFormat.getDate()).padStart(2, '0');
  const hour = String(dateToFormat.getHours()).padStart(2, '0');
  const minutes = String(dateToFormat.getMinutes()).padStart(2, '0');
  const seconds = String(dateToFormat.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
};
