import { useMemo } from "react";
import TableHeader from "../../../shared/tables/TableHeader";
import { IDetails, ISortBy } from "../../../types";
import { formatCurrency, getTotal } from "../../../utils";
import styles from "./Cart.module.css";

interface Props {
  details: IDetails[];
  onSortChange: (params: ISortBy) => void;
  sortedDirection: ISortBy["dir"];
  sortedColumn: ISortBy["col"];
  onSelect: (id: string) => void;
  selectedId: string;
}

const Cart: React.FC<Props> = ({
  details,
  onSortChange,
  sortedColumn,
  sortedDirection,
  onSelect,
  selectedId,
}) => {
  const handleSortChange = (field: ISortBy["col"]) => {
    if (!sortedDirection) {
      onSortChange({ col: field, dir: "asc" });
    } else if (sortedDirection === "asc") {
      onSortChange({ col: field, dir: "des" });
    } else if (sortedDirection === "des") {
      onSortChange({ col: "", dir: "" });
    }
  };

  const total = useMemo(() => getTotal(details), [details]);

  return (
    <div className={styles.tableWrapper}>
      <table>
        <tbody>
          <tr>
            <TableHeader
              classNames={styles.productHeader}
              onClick={() => handleSortChange("product")}
              label="Product"
              sortDirection={sortedColumn === "product" ? sortedDirection : ""}
            />
            <TableHeader
              onClick={() => handleSortChange("qty")}
              label="Quantity"
              sortDirection={sortedColumn === "qty" ? sortedDirection : ""}
            />
            <TableHeader
              classNames={styles.priceHeader}
              onClick={() => handleSortChange("price")}
              label="Price"
              sortDirection={sortedColumn === "price" ? sortedDirection : ""}
            />
          </tr>
          {details.map((detail) => {
            return (
              <tr
                onClick={() => {
                  if (selectedId === detail.id) {
                    onSelect("");
                  } else {
                    onSelect(detail.id);
                  }
                }}
                className={`${styles.container} ${
                  selectedId === detail.id ? styles.selectedRow : undefined
                }`}
                key={detail.id}
              >
                <td className={styles.tableData} style={{ textAlign: "start" }}>
                  {detail.product}
                </td>
                <td className={styles.tableData}>{detail.qty}</td>
                <td className={styles.tableData} style={{ textAlign: "end" }}>
                  {formatCurrency(detail.price)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={styles.total}>Total: {formatCurrency(total)}</div>
    </div>
  );
};

export default Cart;
