import React from "react";
import SortUpIcon from "../../../assets/icons/icon-sort.png";
import styles from "./SortingArrow.module.css";

interface Props {
  sortDirection?: "asc" | "des" | "";
}

const renderSortDirection = (dir: Props["sortDirection"]) => {
  if (!dir) return null;
  if (dir === "asc") return <img src={SortUpIcon} alt="asc" />;
  if (dir === "des")
    return <img className={styles.down} src={SortUpIcon} alt="des" />;
};

const SortingArrow: React.FC<Props> = ({ sortDirection }) => {
  return (
    <span
      className={`${styles.container} ${
        !!sortDirection
          ? styles.sorted
          : sortDirection === ""
          ? styles.unsorted
          : styles.none
      }`}
    >
      {renderSortDirection(sortDirection)}
    </span>
  );
};

export default SortingArrow;
