import SortingArrow from "../SortingArrow";
import styles from "./TableHeader.module.css";

interface Props {
  label: string;
  sortDirection?: "asc" | "des" | "";
  onClick?: () => void;
  classNames?: string;
}

const TableHeader: React.FC<Props> = ({
  label,
  sortDirection,
  onClick,
  classNames,
}) => {
  return (
    <th onClick={onClick}>
      <div className={`${styles.container} ${classNames}`}>
        <span
          className={`${styles.label} ${
            sortDirection !== undefined ? styles.labelPointer : undefined
          }`}
        >
          {label}
        </span>
        <SortingArrow sortDirection={sortDirection} />
      </div>
    </th>
  );
};

export default TableHeader;
