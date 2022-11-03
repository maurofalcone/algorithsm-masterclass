import { useCallback, useMemo, useState } from "react";
import { details } from "../../mocks";
import MyInput from "../../shared/MyInput";
import { IDetails, ISortBy } from "../../types";
import Cart from "./Cart";
import { ReactComponent as SearchSVG } from "../../assets/icons/search.svg";
import styles from "./ShoppingCart.module.css";

const ShoppingCart = () => {
  const [filter, setFilter] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [sortBy, setSortBy] = useState<ISortBy>({ col: "", dir: "" });
  const [selectedId, setSelectedId] = useState("");

  const sortItems = useCallback(
    (a: IDetails, b: IDetails) => {
      if (!sortBy.col || !sortBy.dir) return 0;
      if (typeof a[sortBy.col] === "number") {
        if (sortBy.dir === "asc") {
          return a[sortBy.col] > b[sortBy.col] ? 1 : -1;
        } else if (sortBy.dir === "des") {
          return a[sortBy.col] < b[sortBy.col] ? 1 : -1;
        }
      } else {
        const result = a[sortBy.col]
          .toString()
          .localeCompare(b[sortBy.col].toString());
        if (sortBy.dir === "asc") {
          return result;
        } else if (sortBy.dir === "des") {
          return result < 1 ? 1 : -1;
        }
      }
      return 0;
    },
    [sortBy.col, sortBy.dir]
  );

  const filtered = useMemo(
    () =>
      details.filter((d) =>
        d.product.toLowerCase().includes(filter.toLowerCase())
      ),
    [filter]
  );

  const sorted = useMemo(
    () => [...filtered].sort(sortItems),
    [filtered, sortItems]
  );

  const isSorted = !sortBy.col || !sortBy.dir;

  const list = isSorted ? filtered : sorted;

  const selectedProduct = list.find((dp) => dp.id === selectedId);

  const onSortChange = (params: ISortBy) => {
    setSortBy(params);
  };

  const onSelect = (id: string) => {
    setSelectedId(id);
  };

  return (
    <div>
      <div>
        <h1>My Cart</h1>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setFilter(inputValue);
        }}
        className={styles.form}
      >
        <MyInput
          label=""
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className={styles.button}>
          <SearchSVG width={30} height={30} />
        </button>
      </form>
      <Cart
        sortedColumn={sortBy.col}
        sortedDirection={sortBy.dir}
        onSortChange={onSortChange}
        details={list}
        onSelect={onSelect}
        selectedId={selectedId}
      />
      {selectedProduct ? (
        <div className={styles.selectedProduct}>
          <div>Selected Product:</div>
          <div>Id: {selectedProduct.id}</div>
          <div>Product: {selectedProduct.product}</div>
          <div>Price: {selectedProduct.price}</div>
          <div>Quantity: {selectedProduct.qty}</div>
        </div>
      ) : null}
    </div>
  );
};

export default ShoppingCart;
