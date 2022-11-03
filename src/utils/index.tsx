import { IDetails } from "../types";

export const getTotal = (details: IDetails[]) => {
  const result = details.reduce((acc, detail) => {
    acc += detail.price * detail.qty;
    return acc;
  }, 0);
  return result;

  // let total = 0;
  // details.forEach((d) => {
  //   total = d.price * d.qty;
  // });
  // return total;

  // let total = 0;
  // for (let i = 0; i < details.length; i++) {
  //   const element = details[i];
  //   total += element.price * element.qty;
  // }
};

export const formatCurrency = (value: number) => {
  const fixedValue = value.toFixed(2);
  return `$${fixedValue.replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
};

export enum Routes {
  SCORES = "/scores",
  CHECK_LIST = "/check-list",
  FAMILY_TREE = "/family-tree",
  SHOPPING_CART = "/shopping-cart",
  TO_DO_LIST = "/to-do-list",
}
