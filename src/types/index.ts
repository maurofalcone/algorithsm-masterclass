export interface ISortBy {
  col: "product" | "price" | "qty" | "";
  dir: "asc" | "des" | "";
}

export interface IDetails {
  id: string;
  qty: number;
  product: string;
  price: number;
}

export interface IFamilyTree {
  name: string;
  age: number;
  children?: IFamilyTree[];
}
